import React, { useEffect, useState } from 'react'
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

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      document.write(Error('Crashed with Error Boundary!'))
      throw new Error('Crashed with Error Boundary!')
    }
  }, [toggle])

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
        <AddMovie />
      </div>
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
