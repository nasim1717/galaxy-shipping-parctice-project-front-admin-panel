import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sidebarFooter: false,
    sidebarOpen: false,
    nestedSidebarMenu: false,
}

const sidebarSlice = createSlice({
    name: "sidebars",
    initialState,
    reducers: {
        sidebarPrice: (state, action) => {
            state.sidebarFooter = action.payload;
        },
        sidebarBodyOpen: (state, action) => {
            state.sidebarOpen = action.payload
        },
        nestedSidebarMenu: (state, action) => {
            state.nestedSidebarMenu = action.payload;
        }
    }
});

export const { sidebarPrice, sidebarBodyOpen, nestedSidebarMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;