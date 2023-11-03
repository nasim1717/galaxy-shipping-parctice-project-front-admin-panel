import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curentPage: 1,
    totalPage: 1,
    dataLimit: 20,
};

const paginateSlice = createSlice({
    name: "paginate",
    initialState,
    reducers: {
        curentPage: (state, action) => {
            state.curentPage = action.payload;
        },
        totalPage: (state, action) => {
            state.totalPage = action.payload;
        },
        dataLimit: (state, action) => {
            state.dataLimit = action.payload;
        },
    },

});

export const { curentPage, totalPage, dataLimit } = paginateSlice.actions;
export default paginateSlice.reducer;