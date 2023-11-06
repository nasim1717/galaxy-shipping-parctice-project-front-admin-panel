import { apiSlice } from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomersItem: builder.query({
            query: () => "/customers-item?customer_name="
        }),
        getCustomers: builder.query({
            query: ({ dataLimit, curentPage, sorted, sortStart, customerGlobalSearch, customerGlobalSearchOn, customerSearch }) => {
                console.log("customer glo searcnh--->", customerSearch);
                let query = "";
                for (let key in customerSearch) {
                    if (customerSearch[key]) {
                        query += `${key}=${customerSearch[key]}&`
                    }
                }
                if (sortStart) {
                    if (sorted.sorted) {
                        return `/customers?${customerGlobalSearchOn ? "customer_global_search=" + customerGlobalSearch + "&" : query}order_by_column${sorted.ordBy}&order_by=DESC&page=${curentPage}&limit=${dataLimit}`
                    }
                    else {
                        return `/customers?${customerGlobalSearchOn ? "customer_global_search=" + customerGlobalSearch + "&" : query}order_by_column${sorted.ordBy}&order_by=ASC&page=${curentPage}&limit=${dataLimit}`
                    }
                }
                return `/customers?${customerGlobalSearchOn ? "customer_global_search=" + customerGlobalSearch + "&" : query}page=${curentPage}&limit=${dataLimit}`
            }
        })
    })
});

export const { useGetCustomersItemQuery, useGetCustomersQuery } = customersApi;