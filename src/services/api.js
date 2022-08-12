/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ sortBy, sortOrder, filter, limit }) => {
        return {
          url: 'movies/',
          params: { sortBy, sortOrder, filter, limit },
        }
      },
      providesTags: ['Movies'],
    }),
    getSearchMovies: builder.query({
      query: ({ search, sortBy }) => {
        return {
          url: 'movies?searchBy=title',
          params: { search, sortBy },
        }
      },
      providesTags: ['Movies'],
    }),
    addMovie: builder.mutation({
      query: (body) => ({
        url: 'movies',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Movies'],
    }),
    getMovie: builder.query({
      query: (id) => `movies/${id}`,
      providesTags: (id) => [{ type: 'Movies', id }],
    }),
    editMovie: builder.mutation({
      query: (body) => ({
        url: 'movies',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Movies'],
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movies'],
    }),
  }),
})

export const {
  useGetMoviesQuery,
  useGetSearchMoviesQuery,
  useAddMovieMutation,
  useGetMovieQuery,
  useEditMovieMutation,
  useDeleteMovieMutation,
} = moviesApi
