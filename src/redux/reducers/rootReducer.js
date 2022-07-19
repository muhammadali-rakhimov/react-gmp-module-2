import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movies: [],
  totalAmount: 0,
  selectedMovie: null,
  sortBy: 'release_date',
  sortOrder: 'desc',
  filter: '',
  limit: 20,
  search: '',
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
    case actionTypes.SET_SORTBY:
      return { ...state, sortBy: action.payload }
    case actionTypes.SET_FILTER:
      return { ...state, filter: action.payload }
    case actionTypes.SET_SEARCH:
      return { ...state, search: action.payload }
    case actionTypes.SEARCH_MOVIES:
      return { ...state, movies: action.payload.data }
    case actionTypes.SEARCH_MOVIES_AMOUNT:
      return { ...state, totalAmount: action.payload }
    case actionTypes.CLEAR_SEARCH_MOVIES:
      return { ...state, search: '' }
    default:
      return state
  }
}
