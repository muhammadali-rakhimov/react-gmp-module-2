import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

function ResultCount({ number }) {
  return (
    <p className={style.resultCount}>
      <b>{number}</b>
      &nbsp;movies found
    </p>
  )
}

ResultCount.propTypes = {
  number: PropTypes.number.isRequired,
}

export default ResultCount
