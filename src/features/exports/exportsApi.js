import { apiSlice } from "../api/apiSlice";

export const exportsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getExports: builder.query({
            query: ({ curentPage, dataLimit, search, globalSearch, globalSearchOn }) => {
                let query = ""
                for (let key in search) {
                    if (search[key]) {
                        query += `${key}=${search[key]}&`
                    }
                }
                if (query || globalSearchOn) {
                    return `/exports?${globalSearchOn ? "export_global_search=" + globalSearch + "&" : query}page=${curentPage}&limit=${dataLimit}`
                }
                return `/exports?page=${curentPage}&limit=${dataLimit}`
            },
            providesTags: ["Exports"]
        }),
        createExports: builder.mutation({
            query: (data) => {
                return {
                    url: `/exports`,
                    method: "POST",
                    body: data,
                }

            },
            invalidatesTags: ["Exports"]
        }),
        deleteExports: builder.mutation({
            query: (id) => {
                return {
                    url: `/exports/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["Exports"]
        })
    })
});

export const { useGetExportsQuery, useCreateExportsMutation, useDeleteExportsMutation } = exportsApi;