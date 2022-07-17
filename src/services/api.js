import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (limit) => ({
        url: `movies?limit=${limit}`,
      }),
    }),
  }),
})

export const { useGetMoviesQuery } = moviesApi
