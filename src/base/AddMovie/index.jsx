import React from 'react'
import styled from './style.module.scss'

function index() {
  return (
    <button className={`${styled.addMovie} p-2`} type="button">
      + ADD MOVIE
    </button>
  )
}

export default index
