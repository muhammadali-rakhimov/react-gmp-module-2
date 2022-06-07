import React, { useState } from 'react'
import styled from './styles.module.scss'

function Main() {
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`${styled.parent}`}>
      <nav
        className={`${styled.navbar} navbar navbar-expand-lg navbar-dark bg-dark`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#rrr">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rrra">
                  DOCUMENTARY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rrra">
                  COMEDY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rrra">
                  HORROR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rrra">
                  CRIME
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <p className="mt-3 me-3">SORT BY</p>
              <button className="btn btn-outline-light" type="submit">
                RELEASE DATE
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Main
