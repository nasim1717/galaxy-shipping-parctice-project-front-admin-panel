import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curentPage: 1,
    totalPage: 1,
    dataLimit: 20,
    from: 0,
    to: 0,
    items: 0
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
        dataLimitInfo: (state, action) => {
            state.from = action.payload.from;
            state.to = action.payload.to;
            state.items = action.payload.items;
        }
    },

});

export const { curentPage, totalPage, dataLimit, dataLimitInfo } = paginateSlice.actions;
export default paginateSlice.reducer;