/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import styled from './Header.module.scss'
import wallpaper from '../../../public/img/header-background.png'
// eslint-disable-next-line import/extensions
import AddMovie from '../../base/AddMovie/index.jsx'
// eslint-disable-next-line import/extensions
import Search from '../../base/Search/index.jsx'
// eslint-disable-next-line import/extensions
import SearchButton from '../../base/SearchButton/index.jsx'
// eslint-disable-next-line import/extensions
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx'
// eslint-disable-next-line import/extensions
// eslint-disable-next-line no-unused-vars
import AddMovieModal from '../AddMovieModal/AddMovieModal.jsx'

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('')
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (toggle) {
      document.write(Error('Crashed with Error Boundary!'))
      throw new Error('Crashed with Error Boundary!')
    }
  }, [toggle])

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      style={{ backgroundImage: `url(${wallpaper})` }}
      className={`${styled.parent} navbar navbar-light p-5`}
    >
      <div className={`container-fluid ${styled.containerHeader}`}>
        <a href="/" className={styled.logo}>
          <b>netflix</b>
          roulette
        </a>
        <div onClick={toggleModal}>
          <AddMovie />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        // eslint-disable-next-line react/jsx-no-bind
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
            background: '#333',
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
      <div className={`${styled.find} col p-5`}>
        <div className="container">
          <h1>FIND YOUR MOVIE</h1>
          <br />
          <div>
            <ErrorBoundary>
              <Search toggle={toggle} setToggle={setToggle} />
            </ErrorBoundary>
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
