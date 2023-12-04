import { apiSlice } from "../api/apiSlice";

export const consigneeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConsignees: builder.query({
            query: ({ currentPage, dataLimit, search, globalSearch, globalSearchOn }) => {
                let query = ""
                for (let key in search) {
                    if (search[key]) {
                        query += `${key}=${search[key]}&`
                    }
                }
                if (query || globalSearchOn) {
                    return `/consignees?${globalSearchOn ? "consignee_global_search=" + globalSearch + "&" : query}page=${currentPage}&limit=${dataLimit}`
                }
                return `/consignees?page=${currentPage}&limit=${dataLimit}`
            },
            providesTags: ["Consignees"]
        }),
        createConsignee: builder.mutation({
            query: (data) => ({
                url: `/consignees`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Consignees"]
        })
    })
})

export const { useGetConsigneesQuery, useCreateConsigneeMutation } = consigneeApi;