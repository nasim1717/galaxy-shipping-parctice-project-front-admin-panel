import { apiSlice } from "../api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        consigneSearch: builder.query({
            query: (userId) => `/consignee-search?customer_user_id=${userId}`
        })
    })
});

export const { useConsigneSearchQuery } = searchApi;