import { apiSlice } from "../api/apiSlice";

export const containersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContainers: builder.query({
            query: ({
                curentPage,
                dataLimit,
                containerSearch = {},
                containerGlobalSearch,
                containerGlobalSearchOnOf,
                sortStart,
                sortName,
                sortColumName
            } = {}) => {
                let query = "";
                for (let [key, value] of Object.entries(containerSearch)) {
                    if (value) {
                        query += `${key}=${value}&`
                    }
                }
                if (sortStart) {
                    return `/containers?${containerGlobalSearchOnOf && containerGlobalSearch ? "export_global_search=" + containerGlobalSearch + "&" : query
                        }order_by_column=${sortColumName}&order_by=${sortName ? "DESC" : "ASC"}&page=${curentPage}&limit=${dataLimit}`
                }
                return `/containers?${containerGlobalSearchOnOf && containerGlobalSearch ? "export_global_search=" + containerGlobalSearch + "&" : query
                    }page=${curentPage}&limit=${dataLimit}`
            }
        })
    })
})

export const { useGetContainersQuery } = containersApi;