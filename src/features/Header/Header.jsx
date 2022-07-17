/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import clsx from 'clsx'
import { Row, Col } from 'react-bootstrap'
import { getSelectedMovieNull } from '../../redux/actions/actions'
import styled from './Header.module.scss'
import wallpaper from '../../../public/img/header-background.png'
import AddMovie from '../../base/AddMovie/index'
import SearchButton from '../../base/SearchButton'
import AddMovieModal from '../AddMovieModal/AddMovieModal'
import toUpper from '../../shared/utils/toUpper'
import Modal from '../../base/Modal/Modal'

function Header({ selectedMovie, selectedMovieNull }) {
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const handleChange = useCallback((e) => setInput(e.target.value), [input])

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
            <AddMovie
              onClick={() => setIsOpen(true)}
              name={toUpper('Add Movie')}
            />
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
        <AddMovieModal clickClose={isOpen} />
      </Modal>

      {selectedMovie === null ? (
        <div className={clsx(styled.find, 'col', 'p-5')}>
          <div className="container">
            <h1>FIND YOUR MOVIE</h1>
            <br />
            <div>
              <input
                type="text"
                className={`${styled.search} col col-md-9 p-3`}
                placeholder="What do you want to watch?"
                onChange={handleChange}
                value={input}
              />
              <SearchButton />
            </div>
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
                    {selectedMovie.vote_average}
                  </span>
                </p>
                <div className={styled.movieType}>
                  {selectedMovie.genres.map((item, index) => (
                    <span key={index}>{`${item} `}</span>
                  ))}
                </div>
                <div className={clsx(styled.yearDuration, 'd-flex')}>
                  <p className={styled.year}>{selectedMovie.release_date}</p>
                  <p className={styled.duration}>
                    {`${Math.trunc(selectedMovie.runtime / 60)}}h ${
                      selectedMovie.runtime -
                      Math.trunc(selectedMovie.runtime / 60) * 60
                    }`}
                    min
                  </p>
                </div>
                <p>{selectedMovie.overview}</p>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovieNull: () => dispatch(getSelectedMovieNull()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
