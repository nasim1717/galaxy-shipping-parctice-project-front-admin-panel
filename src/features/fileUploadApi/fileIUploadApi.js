import { apiSlice } from "../api/apiSlice";

export const fileUploadApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        exportPhotoUpload: builder.mutation({
            query: ({ data, type }) => {
                return {
                    url: `exports/0/photos-upload?type=${type}`,
                    method: "POST",
                    body: data
                }
            }
        })
    })
});

export const { useExportPhotoUploadMutation } = fileUploadApi;