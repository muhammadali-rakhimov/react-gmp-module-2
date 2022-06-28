import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

function ResultCount({ number }) {
  return (
    <span className={style.resultCount}>
      <span className={style.number}>{number}</span>
      movies found
    </span>
  )
}

ResultCount.propTypes = {
  number: PropTypes.number.isRequired,
}

export default ResultCount
