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
