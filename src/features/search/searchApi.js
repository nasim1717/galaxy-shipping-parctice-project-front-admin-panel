import { apiSlice } from "../api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        consigneSearch: builder.query({
            query: (userId) => `/consignee-search?customer_user_id=${userId}`
        }),
        getLocation: builder.query({
            query: () => `/settings/locations?status=1`
        })
    })
});

export const { useConsigneSearchQuery, useGetLocationQuery } = searchApi;