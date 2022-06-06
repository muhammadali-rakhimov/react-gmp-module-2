import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// eslint-disable-next-line import/extensions
import Header from '../features/Header/Header.jsx'
// eslint-disable-next-line import/extensions
import MoviesSearch from '../features/MoviesSearch/index.jsx'
// eslint-disable-next-line import/extensions
import MoviesCards from '../features/MoviesCards/index.jsx'
// eslint-disable-next-line import/extensions
import Footer from '../features/Footer/Footer.jsx'

function App() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="container">
        <div className="row">
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row flex-grow-1">
          <MoviesSearch />
          <MoviesCards />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
