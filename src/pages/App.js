/* eslint-disable no-nested-ternary */
import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../features/Header/Header.jsx'
import Footer from '../features/Footer/Footer.jsx'
import MoviesMain from '../features/MoviesMain/MoviesMain.jsx'

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

function App() {
  return (
    <Container fluid>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <MoviesMain />
        <Footer />
      </div>
    </Container>
  )
}

export default App
