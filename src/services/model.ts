// Redux toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
import { Parameter } from '../types/parameter';

export const modelApi = createApi({
  reducerPath: 'modelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'data/' }),
  endpoints: (builder) => ({
    getParams: builder.query<Parameter[], void>({
      query: () => 'model.json'
    })
  })
});

export const { useGetParamsQuery } = modelApi;
