/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from 'react'
import styled from './styles.module.scss'

// eslint-disable-next-line react/prop-types
function AddMovieModal({ clickClose }) {
  return (
    <div className={styled.parent}>
      <div className={styled.titleDiv}>
        <h2>ADD MOVIE</h2>
        <button onClick={clickClose}>&#10006;</button>
      </div>
      <form className='col-lg-12'>
        <div className={`col-5 ${styled.inputLabel}`}>
          <label htmlFor="modalName">TITLE</label>
          <input id="modalName" type="text" />
        </div>
        <div className={`col-5 ${styled.inputLabel}`}>
          <label htmlFor="modalName">TITLE</label>
          <input id="modalName" type="text" />
        </div>
      </form>
    </div>
  )
}

export default AddMovieModal
