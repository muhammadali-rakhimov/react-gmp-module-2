/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { setFilter, setSortBy } from '../../redux/actions/actions'
import styled from './styles.module.scss'

function MoviesSearch({ optionValue, setOptionValue, setFilterMovie }) {
  // eslint-disable-next-line no-unused-vars

  const dispatch = useDispatch()

  return (
    <div className={styled.parent}>
      <nav
        className={clsx(
          styled.navbar,
          'navbar',
          'navbar-expand-lg',
          'navbar-dark',
          'bg-dark'
        )}
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
              <li
                onClick={() => {
                  dispatch(setFilterMovie())
                }}
                className={styled.movieGenre}
              >
                All
              </li>
              <li
                onClick={() => dispatch(setFilterMovie('documentary'))}
                className={styled.movieGenre}
              >
                DOCUMENTARY
              </li>
              <li
                onClick={() => dispatch(setFilterMovie('comedy'))}
                className={styled.movieGenre}
              >
                COMEDY
              </li>
              <li
                onClick={() => dispatch(setFilterMovie('horror'))}
                className={styled.movieGenre}
              >
                HORROR
              </li>
              <li
                onClick={() => dispatch(setFilterMovie('crime'))}
                className={styled.movieGenre}
              >
                CRIME
              </li>
            </ul>
            <form className="d-flex" role="search">
              <p className={clsx('mt-3 me-3', styled.sortby)}>SORT BY</p>
              <select
                value={optionValue}
                onChange={(e) => dispatch(setOptionValue(e.target.value))}
                className={styled.select}
                name="sort"
              >
                <option value="release_date">RELEASE DATE</option>
                <option value="vote_average">RATING</option>
                <option value="genres">GENRE</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    optionValue: state.root.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOptionValue: (sortBy) => dispatch(setSortBy(sortBy)),
    setFilterMovie: (filter) => dispatch(setFilter(filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearch)
