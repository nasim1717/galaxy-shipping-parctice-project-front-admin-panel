import { apiSlice } from "../api/apiSlice";

export const vehiclesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVehicles: builder.query({
            query: ({ page, limit, sortStart, sorted, search, globalSearch, globalSearchOn }) => {
                let query = ""
                for (let key in search) {
                    if (search[key]) {
                        query += `${key}=${search[key]}&`
                    }
                }
                if (sortStart) {
                    if (sorted.sorted) {
                        return `/vehicles?${globalSearchOn ? "vehicle_global_search=" + globalSearch + "&" : query}order_by_column=${sorted.ordBy}&order_by=DESC&page=${page}& limit=${limit} `
                    }
                    return `/vehicles?${globalSearchOn ? "vehicle_global_search=" + globalSearch + "&" : query}order_by_column=${sorted.ordBy}&order_by=ASC& page=${page}&limit=${limit}`
                }
                return `/vehicles?${globalSearchOn ? "vehicle_global_search=" + globalSearch + "&" : query}page=${page}&limit=${limit}`
            },
            providesTags: ["Vehicles"]
        }),
        addVehicle: builder.mutation({
            query: (data) => {
                return {
                    url: `/vehicles`,
                    method: "POST",
                    body: data,
                }
            },
            invalidatesTags: ["Vehicles"]
        })
    })
});

export const { useGetVehiclesQuery, useAddVehicleMutation } = vehiclesApi;