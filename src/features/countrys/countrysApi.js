import { apiSlice } from "../api/apiSlice";

export const countrysApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => `/settings/countries?name=a`
        }),
        getState: builder.query({
            query: (id) => `/settings/states?country_id=${id}&name=`
        }),
        getCity: builder.query({
            query: (id) => `settings/cities?state_id=${id}&name=`
        }),
        getPort: builder.query({
            query: (id) => `settings/ports?state_id=${id}&status=1`
        }),
    })
});

export const { useGetCountryQuery, useGetStateQuery, useGetCityQuery, useGetPortQuery } = countrysApi;