import { apiSlice } from "../api/apiSlice";

const towinRatesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTowingRates: builder.query({
            query: ({ currentPage, dataLimit, towingRateSearch, sortStart, sortColumName, sortName }) => {
                let query = "";
                for (let [key, value] of Object.entries(towingRateSearch)) {
                    if (value) {
                        query += `${key}=${value}&`
                    }
                }
                if (sortStart) {
                    return `/towing-rates?${query}order_by=${sortName ? "DESC" : "ASC"}&order_by_column=${sortColumName}&page=${currentPage}&limit=${dataLimit}`
                }
                return `/towing-rates?${query}page=${currentPage}&limit=${dataLimit}`
            }
        })
    })
});

export const { useGetTowingRatesQuery } = towinRatesApi;