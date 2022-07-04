import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import/extensions
import Header from '../features/Header/Header.jsx'
// eslint-disable-next-line import/extensions
import MoviesSearch from '../features/MoviesSearch'
// eslint-disable-next-line import/extensions
import MoviesCards from '../features/MoviesCards'
// eslint-disable-next-line import/extensions
import Footer from '../features/Footer/Footer.jsx'

function App() {
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
            <MoviesCards />
            <Footer />
          </div>
        </Container>
      </div>
    </Container>
  )
}

export default App
