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
// eslint-disable-next-line import/extensions
import Footer from '../features/Footer/Footer.jsx'
import { useGetMoviesQuery } from '../services/api.js'
import { setMovies, totalAmount } from '../redux/actions/actions.js'

function App({ settingMovies, settingTotalAmount }) {
  // =============================================================
  // This is the second option

  // const xhttp = new XMLHttpRequest()
  // xhttp.onreadystatechange = function () {
  //   if (xhttp.readyState === 4 && xhttp.status === 200) {
  //     console.log(xhttp.responseText)
  //   }
  // }

  // xhttp.open('GET', 'http://localhost:4000/movies?limit=10', true)
  // xhttp.send()

  // =============================================================

  const { data, isSuccess, isError, error, isLoading } = useGetMoviesQuery(10)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(settingMovies(data))
      dispatch(settingTotalAmount(data.totalAmount))
    } else if (isError) {
      console.log(error)
    }
  }, [isSuccess])

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
              'Error'
            ) : null}
            <Footer />
          </div>
        </Container>
      </div>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingMovies: (item) => dispatch(setMovies(item)),
    settingTotalAmount: (number) => dispatch(totalAmount(number)),
  }
}

export default connect(null, mapDispatchToProps)(App)
