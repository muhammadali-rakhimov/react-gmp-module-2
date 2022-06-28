/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React from 'react'
import styled from './styles.module.scss'

function AddMovieModal({ clickClose }) {
  return (
    <div className={styled.parent}>
      <div className={styled.titleDiv}>
        <h2>ADD MOVIE</h2>
        <button onClick={clickClose}>&#10006;</button>
      </div>
      <form className="col-lg-12">
        <div className={clsx('col-5', styled.inputLabel)}>
          <label htmlFor="modalName">TITLE</label>
          <input id="modalName" type="text" />
        </div>
        <div className={clsx('col-5', styled.inputLabel)}>
          <label htmlFor="modalName">Smth</label>
          <input id="modalName" type="text" />
        </div>
      </form>
    </div>
  )
}

export default AddMovieModal
