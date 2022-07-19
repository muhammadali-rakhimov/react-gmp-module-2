import * as actionTypes from './actionTypes'

export const setMovies = (item) => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: { data: item.data },
  }
}

export const totalAmount = (number) => {
  return {
    type: actionTypes.TOTAL_AMOUNT,
    payload: number,
  }
}

export const getSelectedMovie = (item) => {
  return {
    type: actionTypes.GET_SELECTED_MOVIE,
    payload: item,
  }
}

export const getSelectedMovieNull = () => {
  return {
    type: actionTypes.GET_SELECTED_MOVIE_NULL,
    payload: null,
  }
}

export const setSortBy = (sortBy) => {
  return {
    type: actionTypes.SET_SORTBY,
    payload: sortBy,
  }
}

export const setFilter = (filter) => {
  return {
    type: actionTypes.SET_FILTER,
    payload: filter,
  }
}

export const setSearchInput = (input) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: input,
  }
}

export const setSearchMovies = (item) => {
  return {
    type: actionTypes.SEARCH_MOVIES,
    payload: item,
  }
}

export const clearSearchMovies = () => {
  return {
    type: actionTypes.CLEAR_SEARCH_MOVIES,
  }
}

export const searchMoviesAmount = (number) => {
  return {
    type: actionTypes.SEARCH_MOVIES_AMOUNT,
    payload: number,
  }
}
