import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://655b41e9ab37729791a8c926.mockapi.io';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['cars'],
  endpoints: builder => ({
    getCars: builder.query({
      query: ({ page = 1, limit = 12 }) =>
        `/adverts?page=${page}&limit=${limit}`,
      providesTags: ['cars'],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
