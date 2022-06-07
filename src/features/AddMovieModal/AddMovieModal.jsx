/* eslint-disable react/button-has-type */
import React from 'react'
import styled from './styles.module.scss'

// eslint-disable-next-line react/prop-types
function AddMovieModal({ clickClose }) {
  return (
    <div className={styled.parent}>
      AddMovieModal
      <button onClick={clickClose}>Close modal</button>
    </div>
  )
}

export default AddMovieModal
