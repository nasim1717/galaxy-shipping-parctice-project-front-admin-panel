import { apiSlice } from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomersItem: builder.query({
            query: () => "/customers-item?customer_name="
        }),
        getCustomers: builder.query({
            query: ({ dataLimit, curentPage }) => {
                return `/customers?page=${curentPage}&limit=${dataLimit}`
            }
        })
    })
});

export const { useGetCustomersItemQuery, useGetCustomersQuery } = customersApi;