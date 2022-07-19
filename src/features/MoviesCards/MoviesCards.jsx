import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import styled from './styles.module.scss'
// eslint-disable-next-line import/extensions
import ResultCount from '../../base/ResultCount'
// eslint-disable-next-line import/extensions
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
            {movies.map((item) => (
              <MoviesCard key={item.id} item={item} />
            ))}
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
