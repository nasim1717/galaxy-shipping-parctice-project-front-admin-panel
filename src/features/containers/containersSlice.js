import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    containerSearch: {},
    containerGlobalSearch: "",
    containerGlobalSearchOn: false,
};

const continerSlice = createSlice({
    name: "containers",
    initialState,
    reducers: {
        containerSearch: (state, action) => {
            state.containerSearch = action.payload;
            state.containerGlobalSearchOn = false;
        },
        containerGlobalSearch: (state, action) => {
            state.containerGlobalSearch = action.payload;
            state.containerGlobalSearchOn = true;
        },

    }
});

export const { containerSearch, containerGlobalSearch } = continerSlice.actions;
export default continerSlice.reducer