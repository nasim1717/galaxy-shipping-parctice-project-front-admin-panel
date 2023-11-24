import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: {},
    globalSearch: "",
    globalSearchOn: false,
    selectCustomer: {},
};

const exportsSlice = createSlice({
    name: "exports",
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
            state.globalSearchOn = false;
        },
        globalSearch: (state, action) => {
            state.globalSearch = action.payload;
            state.globalSearchOn = true;
        },
        selectCustomer: (state, action) => {
            state.selectCustomer = action.payload;
        }
    }
});

export const { search, globalSearch, selectCustomer } = exportsSlice.actions;
export default exportsSlice.reducer