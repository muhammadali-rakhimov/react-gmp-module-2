/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { connect, useDispatch } from 'react-redux'
// eslint-disable-next-line import/extensions
import Header from '../features/Header/Header.jsx'
// eslint-disable-next-line import/extensions
import MoviesSearch from '../features/MoviesSearch'
// eslint-disable-next-line import/extensions
import MoviesCards from '../features/MoviesCards'
import Footer from '../features/Footer/Footer.jsx'
import { useGetMoviesQuery } from '../services/api.js'
import {
  clearSearchMovies,
  setMovies,
  totalAmount,
} from '../redux/actions/actions.js'

/*
  =============================================================

  This is the second option

  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      console.log(xhttp.responseText)
    }
  }

  xhttp.open('GET', 'http://localhost:4000/movies?limit=10', true)
  xhttp.send()

  =============================================================
*/

function App({
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
    <Container fluid>
      <div className="min-vh-100 d-flex flex-column">
        <Container>
          <Row>
            <Header />
          </Row>
        </Container>
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
            <Footer />
          </div>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
