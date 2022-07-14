import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootReducer } from './reducers/rootReducer.js'
import { moviesApi } from '../services/api.js'

const store = configureStore({
  reducer: {
    root: rootReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //  getDefaultMiddleware().concat(moviesApi.middleware),
})

setupListeners(store.dispatch)

export default store
