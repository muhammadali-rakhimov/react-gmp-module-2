import * as actionTypes from './actionTypes'

export const getMovies = (item) => {
  return {
    type: actionTypes.GET_MOVIES,
    payload: { item },
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
