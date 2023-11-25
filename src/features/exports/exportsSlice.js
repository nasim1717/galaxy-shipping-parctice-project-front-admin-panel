import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: {},
    globalSearch: "",
    globalSearchOn: false,
    selectCustomer: {},
    fileUrls: {
        container_images: [],
        empty_container_photos: [],
        export_invoice_photo: [],
        loaded_photos: [],
        loading_photos: []
    }
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
        },
        fileUrls: (state, action) => {
            state.fileUrls = action.payload
        }
    }
});

export const { search, globalSearch, selectCustomer, fileUrls } = exportsSlice.actions;
export default exportsSlice.reducer