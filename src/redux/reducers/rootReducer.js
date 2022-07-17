import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movies: [],
  totalAmount: 0,
  selectedMovie: null,
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return { ...state, movies: action.payload.data }
    case actionTypes.TOTAL_AMOUNT:
      return { ...state, totalAmount: action.payload }
    case actionTypes.GET_SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload }
    case actionTypes.GET_SELECTED_MOVIE_NULL:
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}
