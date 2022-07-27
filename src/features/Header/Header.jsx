/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useCallback } from 'react'
import clsx from 'clsx'
import { Row, Col } from 'react-bootstrap'
import styled from './Header.module.scss'
import wallpaper from '../../../public/img/header-background.png'
import AddMovie from '../../base/AddMovie/index'
import SearchButton from '../../base/SearchButton'
import AddMovieModal from '../AddMovieModal/AddMovieModal'
import toUpper from '../../shared/utils/toUpper'
import Modal from '../../base/Modal/Modal'
import { Context } from '../../contexts/Context'
// import useLoaded from '../../shared/hooks/useLoaded.js'
// import useCardChanger from '../../shared/hooks/useCardChanger.js'

function Header() {
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { movie, setMovie } = useContext(Context)
  // const [alternate, setAlternate] = useState(false)
  // const [done, setDone] = useState(false)
  // useLoaded(done, setDone)
  // useCardChanger(alternate, setAlternate)

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
          {movie === null ? (
            <AddMovie
              onClick={() => setIsOpen(true)}
              name={toUpper('Add Movie')}
            />
          ) : (
            <div onClick={() => setMovie(null)} className={styled.cursor}>
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

      {movie === null ? (
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
                  movie === null ? styled.image : styled.imageFocus,
                  ''
                )}
                src={movie.src}
                alt="img"
              />
              <div className="ms-4">
                <p className={styled.movieName}>
                  {movie.name}
                  <span className={styled.rating}>{movie.rating}</span>
                </p>
                <p className={styled.movieType}>{movie.type}</p>
                <div className={clsx(styled.yearDuration, 'd-flex')}>
                  <p className={styled.year}>{movie.year}</p>
                  <p className={styled.duration}>{movie.duration}</p>
                </div>
                <p>{movie.text}</p>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </nav>
  )
}

export default Header
