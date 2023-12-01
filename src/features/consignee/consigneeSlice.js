import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    consigneeSearch: {},
    consigneeGlobalSearch: "",
    consigneeGlobalSearchOn: false,
    consigneeSelectCustomer: {},
};

const consigneeSlice = createSlice({
    name: "consignee",
    initialState,
    reducers: {
        consigneeSearch: (state, action) => {
            state.consigneeSearch = action.payload;
            state.consigneeGlobalSearchOn = false;
        },
        consigneeGlobalSearch: (state, action) => {
            state.consigneeGlobalSearch = action.payload;
            state.consigneeGlobalSearchOn = true;
        },
        consigneeSelectCustomer: (state, action) => {
            state.consigneeSelectCustomer = action.payload;
        },

    }
});

export const { consigneeSearch, consigneeGlobalSearch, consigneeSelectCustomer } = consigneeSlice.actions;
export default consigneeSlice.reducer