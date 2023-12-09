import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    towingRateSearch: {},
};

const towingRateSlice = createSlice({
    name: "towingRate",
    initialState,
    reducers: {
        towingRateSearch: (state, action) => {
            state.towingRateSearch = action.payload;
        },
    }
});

export const { towingRateSearch } = towingRateSlice.actions;
export default towingRateSlice.reducer;