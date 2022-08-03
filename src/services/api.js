import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ sortBy, sortOrder, filter, limit }) => {
        return {
          url: 'movies/',
          params: { sortBy, sortOrder, filter, limit },
        }
      },
    }),
    getSearchMovies: builder.query({
      query: ({ search }) => {
        return {
          url: 'movies?searchBy=title',
          params: { search },
        }
      },
    }),
  }),
})

export const { useGetMoviesQuery, useGetSearchMoviesQuery } = moviesApi
