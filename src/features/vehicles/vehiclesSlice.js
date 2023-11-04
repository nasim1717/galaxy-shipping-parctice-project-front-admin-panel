import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: {},
    globalSearch: "",
    globalSearchOn: false,
};

const vehiclesSlice = createSlice({
    name: "vehicles",
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

export const { search, globalSearch } = vehiclesSlice.actions;
export default vehiclesSlice.reducer