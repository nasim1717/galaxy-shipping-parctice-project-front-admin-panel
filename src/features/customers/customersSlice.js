import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customerSearch: {},
    customerGlobalSearch: "",
    customerGlobalSearchOn: false,
};

const customerSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        customerSearch: (state, action) => {
            state.customerSearch = action.payload;
            state.customerGlobalSearchOn = false;
        },
        customerGlobalSearch: (state, action) => {
            state.customerGlobalSearch = action.payload;
            state.customerGlobalSearchOn = true;
        }
    }
});

export const { customerSearch, customerGlobalSearch } = customerSlice.actions;
export default customerSlice.reducer