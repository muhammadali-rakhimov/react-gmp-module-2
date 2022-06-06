/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from './styles.module.scss'

// eslint-disable-next-line object-curly-newline
function index({ src, name, type, year }) {
  return (
    <div>
      <img className={styled.image} src={src} alt="image" />
      <br />
      <br />
      <div className="d-flex justify-content-between">
        <div className="col-8">
          <p>{name}</p>
          <p>{type}</p>
        </div>
        <div className={`col-2 ${styled.year}`}>
          <p>{year}</p>
        </div>
      </div>
    </div>
  )
}

export default index
