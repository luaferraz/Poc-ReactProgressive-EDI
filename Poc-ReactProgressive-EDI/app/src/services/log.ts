import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import CardLogViewModel from './types/CardLogViewModel';

export const cardLogApi = createApi({
  reducerPath: 'cardLogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:53979/', // URL base da API
  }),
  tagTypes: ['CardLog'],
  endpoints: (builder) => ({
    getCardLog: builder.query<CardLogViewModel, void>({
      query: () => 'ListarCardLogService',
      providesTags: ['CardLog'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCardLogQuery } = cardLogApi;
