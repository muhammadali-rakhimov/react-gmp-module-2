import React from 'react'
import styled from './style.module.scss'

function index({ name }) {
  return (
    <button className={styled.addMovie} type="button">
      <span>+ </span>
      {name}
    </button>
  )
}

export default index
