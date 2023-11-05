import { apiSlice } from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomersItem: builder.query({
            query: () => "/customers-item?customer_name="
        }),
        getCustomers: builder.query({
            query: ({ dataLimit, curentPage, sorted, sortStart }) => {
                if (sortStart) {
                    if (sorted.sorted) {
                        return `/customers?order_by_column${sorted.ordBy}&order_by=DESC&page=${curentPage}&limit=${dataLimit}`
                    }
                    else {
                        return `/customers?order_by_column${sorted.ordBy}&order_by=ASC&page=${curentPage}&limit=${dataLimit}`
                    }
                }
                return `/customers?page=${curentPage}&limit=${dataLimit}`
            }
        })
    })
});

export const { useGetCustomersItemQuery, useGetCustomersQuery } = customersApi;