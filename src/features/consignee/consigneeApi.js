import { apiSlice } from "../api/apiSlice";

export const consigneeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConsignees: builder.query({
            query: ({ currentPage, dataLimit }) => {
                return `/consignees?page=${currentPage}&limit=${dataLimit}`
            },
        })
    })
})

export const { useGetConsigneesQuery } = consigneeApi;