import { apiSlice } from "../api/apiSlice";

export const loadPlanApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLoadPlan: builder.query({
            query: ({
                currentPage,
                dataLimit,
                loadPlanSearch,
                loadPlanGlobalSearch,
                loadPlanGlobalSearchOnOf,
                sortStart,
                sortName,
                sortColumName
            }) => {
                let query = "";
                for (let [key, value] of Object.entries(loadPlanSearch)) {
                    if (value) {
                        query += `${key}=${value}&`
                    }
                }
                if (sortStart) {
                    return `/load-plans?${loadPlanGlobalSearchOnOf && loadPlanGlobalSearch ? "load_plan_global_search=" + loadPlanGlobalSearch + "&" : query}order_by_column=${sortColumName}&order_by=${sortName ? "DESC" : "ASC"}&page=${currentPage}&limit=${dataLimit}`
                }
                return `/load-plans?${loadPlanGlobalSearchOnOf && loadPlanGlobalSearch ? "load_plan_global_search=" + loadPlanGlobalSearch + "&" : query}page=${currentPage}&limit=${dataLimit}`
            }
        })
    })
})

export const { useGetLoadPlanQuery } = loadPlanApi;