/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react'
import Modal from 'react-modal'
import clsx from 'clsx'
import styled from './Header.module.scss'
import wallpaper from '../../../public/img/header-background.png'
import AddMovie from '../../base/AddMovie/index.jsx'
import SearchButton from '../../base/SearchButton/index.jsx'
import AddMovieModal from '../AddMovieModal/AddMovieModal.jsx'
import toUpper from '../../shared/utils/toUpper'

function Header() {
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

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
        <div onClick={toggleModal}>
          <AddMovie name={toUpper('Add Movie')} />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '0',
            borderRadius: '10px',
            background: '#333333',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
            width: '50%',
            margin: '0 auto',
          },
        }}
      >
        <AddMovieModal clickClose={toggleModal} />
      </Modal>
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
            />
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
