import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadPlanSearch: {},
    loadPlanGlobalSearch: "",
    loadPlanGlobalSearchOn: false,
};

const loadPlanSlice = createSlice({
    name: "loadPlan",
    initialState,
    reducers: {
        loadPlanSearch: (state, action) => {
            state.loadPlanSearch = action.payload;
            state.loadPlanGlobalSearchOn = false;
        },
        loadPlanGlobalSearch: (state, action) => {
            state.loadPlanGlobalSearch = action.payload;
            state.loadPlanGlobalSearchOn = true;
        },

    }
});

export const { loadPlanSearch, loadPlanGlobalSearch } = loadPlanSlice.actions;
export default loadPlanSlice.reducer;