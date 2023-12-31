import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import sidebarSlice from "../features/sidebars/sidebarSlice";
import paginateSlice from "../features/paginate/paginateSlice";
import vehiclesSlice from "../features/vehicles/vehiclesSlice";
import customersSlice from "../features/customers/customersSlice";
import exportsSlice from "../features/exports/exportsSlice";
import consigneeSlice from "../features/consignee/consigneeSlice";
import containersSlice from "../features/containers/containersSlice";
import loadPlanSliece from "../features/loadPlan/loadPlanSliece";
import towingRateSlice from "../features/towinRates/towingRateSlice";



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        userAuth: authSlice,
        sidebars: sidebarSlice,
        pagination: paginateSlice,
        vehicles: vehiclesSlice,
        customers: customersSlice,
        exportsSlice: exportsSlice,
        consigneeSlice: consigneeSlice,
        containerSlice: containersSlice,
        loadPlanSlice: loadPlanSliece,
        towingRateSlice: towingRateSlice
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})

export default store;