import { apiSlice } from "../api/apiSlice";

export const containersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContainers: builder.query({
            query: ({ curentPage, dataLimit }) => {
                return `/containers?page=${curentPage}&limit=${dataLimit}`
            }
        })
    })
})

export const { useGetContainersQuery } = containersApi;