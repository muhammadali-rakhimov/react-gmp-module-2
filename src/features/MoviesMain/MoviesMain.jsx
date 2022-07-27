/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { connect, useDispatch } from 'react-redux'
import MoviesSearch from '../MoviesSearch'
import MoviesCards from '../MoviesCards'
import { useGetMoviesQuery } from '../../services/api.js'
import {
  clearSearchMovies,
  setMovies,
  totalAmount,
} from '../../redux/actions/actions.js'

function MoviesMain({
  settingMovies,
  settingTotalAmount,
  sortBy,
  sortOrder,
  filter,
  limit,
  search,
  setClearSearchMovies,
}) {
  const { data, isSuccess, isError, error, isLoading } = useGetMoviesQuery({
    sortBy,
    sortOrder,
    filter,
    limit,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      if (search !== '') {
        dispatch(setClearSearchMovies())
      }
      dispatch(settingMovies(data))
      dispatch(settingTotalAmount(data.totalAmount))
    } else if (isError) {
      console.log(error)
    }
  }, [isSuccess, isError, data])

  return (
    <Container>
      <div className="row flex-grow-1">
        <MoviesSearch />
        {isLoading ? (
          'Loading...'
        ) : isSuccess ? (
          <MoviesCards />
        ) : isError ? (
          <>
            <h1>{error.status}</h1>
            <h4>{error.error}</h4>
          </>
        ) : null}
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.root.sortBy,
    sortOrder: state.root.sortOrder,
    filter: state.root.filter,
    limit: state.root.limit,
    search: state.root.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingMovies: (item) => dispatch(setMovies(item)),
    settingTotalAmount: (number) => dispatch(totalAmount(number)),
    setClearSearchMovies: () => dispatch(clearSearchMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesMain)
