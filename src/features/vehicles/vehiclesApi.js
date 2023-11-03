import { apiSlice } from "../api/apiSlice";

export const vehiclesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVehicles: builder.query({
            query: ({ page, limit }) => `/vehicles?page=${page}&limit=${limit}`
        }),
    })
});

export const { useGetVehiclesQuery } = vehiclesApi;