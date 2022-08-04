/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import styled from './styles.module.scss'
import ResultCount from '../../base/ResultCount'
import MoviesCard from './components/MoviesCard/MoviesCard.jsx'

function MoviesCards({ movies, totalAmount }) {
  return (
    <div className={clsx(styled.parent, 'pt-4')}>
      <div className="px-5 mb-4">
        <ResultCount number={totalAmount} />
      </div>
      <div className="d-flex">
        <div className="col-12">
          <div className="row mb-5 mt-2">
            {movies
              ? movies.map((item) => <MoviesCard key={item.id} item={item} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.root.movies,
    totalAmount: state.root.totalAmount,
  }
}

export default connect(mapStateToProps, null)(MoviesCards)
