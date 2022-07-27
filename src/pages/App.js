import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// eslint-disable-next-line import/extensions
import Header from '../features/Header/Header.jsx'
// eslint-disable-next-line import/extensions
import MoviesSearch from '../features/MoviesSearch'
// eslint-disable-next-line import/extensions
import MoviesCards from '../features/MoviesCards'
// eslint-disable-next-line import/extensions
import Footer from '../features/Footer/Footer.jsx'
import { Context } from '../contexts/Context.js'
import useMemoizedMovies from '../shared/hooks/useMemoizedMovies.js'

function App() {
  const [movie, setMovie] = useState(null)

  const providerMovie = useMemoizedMovies(movie, setMovie)

  return (
    <Context.Provider value={providerMovie}>
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
              <MoviesCards />
              <Footer />
            </div>
          </Container>
        </div>
      </Container>
    </Context.Provider>
  )
}

export default App
