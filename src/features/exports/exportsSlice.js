import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: {},
    globalSearch: "",
    globalSearchOn: false,
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
        }
    }
});

export const { search, globalSearch } = exportsSlice.actions;
export default exportsSlice.reducer