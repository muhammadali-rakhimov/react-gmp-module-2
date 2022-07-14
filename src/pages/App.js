import React from 'react'
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

function App() {
  // =============================================================

  // const xhttp = new XMLHttpRequest()
  // xhttp.onreadystatechange = function () {
  //   if (xhttp.readyState === 4 && xhttp.status === 200) {
  //     console.log(xhttp.responseText)
  //   }
  // }

  // xhttp.open('GET', 'http://localhost:4000/movies?limit=10', true)
  // xhttp.send()

  // =============================================================

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
