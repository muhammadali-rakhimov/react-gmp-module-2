/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import clsx from 'clsx'
import { Row, Col } from 'react-bootstrap'
import {
  getSelectedMovieNull,
  searchMoviesAmount,
  setSearchInput,
  setSearchMovies,
} from '../../redux/actions/actions'
import styled from './Header.module.scss'
import wallpaper from '../../../public/img/header-background.png'
import AddMovieModal from '../AddMovieModal/AddMovieModal'
import toUpper from '../../shared/utils/toUpper'
import Modal from '../../base/Modal/Modal'
import { useGetSearchMoviesQuery } from '../../services/api'

function Header({
  selectedMovie,
  selectedMovieNull,
  searchMovies,
  getSearch,
  setSearchMoviesAmount,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const { data, isError, error } = useGetSearchMoviesQuery({
    search: getSearch,
  })

  useEffect(() => {
    if (isError) {
      console.log(error)
    }
  }, [isError, error])

  return (
    <nav
      style={{ backgroundImage: `url(${wallpaper})` }}
      className={clsx(styled.parent, 'navbar', 'navbar-light', 'p-5')}
    >
      <div className={clsx('container-fluid', styled.containerHeader)}>
        <a href="/" className={styled.logo}>
          <b>netflix</b>
          roulette
        </a>
        <div>
          {selectedMovie === null ? (
            <button
              onClick={() => setIsOpen(true)}
              className={styled.addMovie}
              type="button"
            >
              <span>+ </span>
              {toUpper('Add Movie')}
            </button>
          ) : (
            <div
              onClick={() => dispatch(selectedMovieNull())}
              className={styled.cursor}
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="10.5"
                  r="9.5"
                  stroke="#F65261"
                  strokeWidth="2"
                />
                <path
                  d="M10.5 19.5L1.5 28.5"
                  stroke="#F65261"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <AddMovieModal handleClose={() => setIsOpen(false)} />
      </Modal>

      {selectedMovie === null ? (
        <div className={clsx(styled.find, 'col', 'p-5')}>
          <div className="container">
            <h1>FIND YOUR MOVIE</h1>
            <br />
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className={`${styled.search} col col-md-9 p-3`}
                placeholder="What do you want to watch?"
                onChange={(e) => dispatch(setSearchInput(e.target.value))}
                value={getSearch}
              />
              <button
                onClick={() => {
                  dispatch(searchMovies(data))
                  dispatch(setSearchMoviesAmount(data.totalAmount))
                }}
                className={`${styled.searchButton} col col-md-3 p-3`}
                type="submit"
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="container-fluid my-5 text-light">
          <Row>
            <Col className={clsx(styled.parentCard, 'd-flex')}>
              <img
                className={clsx(
                  selectedMovie === null ? styled.image : styled.imageFocus,
                  ''
                )}
                src={selectedMovie.poster_path}
                alt="img"
              />
              <div className="ms-4">
                <p className={styled.movieName}>
                  {selectedMovie.title}
                  <span className={styled.rating}>
                    {selectedMovie.vote_average
                      ? selectedMovie.vote_average
                      : '0.0'}
                  </span>
                </p>
                <div className={styled.movieType}>
                  {selectedMovie.genres
                    ? selectedMovie.genres.map((item, index) => (
                        <span key={index}>{`${item} `}</span>
                      ))
                    : null}
                </div>
                <div className={clsx(styled.yearDuration, 'd-flex')}>
                  <p className={styled.year}>
                    {selectedMovie.release_date
                      ? selectedMovie.release_date
                      : 'unknown'}
                  </p>
                  <p className={styled.duration}>
                    {`${Math.trunc(selectedMovie.runtime / 60)}h ${
                      selectedMovie.runtime -
                      Math.trunc(selectedMovie.runtime / 60) * 60
                    }min`}
                  </p>
                </div>
                <p>
                  {selectedMovie.overview
                    ? selectedMovie.overview
                    : 'Unknown overview'}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.root.selectedMovie,
    getSearch: state.root.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovieNull: () => dispatch(getSelectedMovieNull()),
    searchMovies: (item) => dispatch(setSearchMovies(item)),
    setSearchMoviesAmount: (number) => dispatch(searchMoviesAmount(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
