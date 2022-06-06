import React from 'react'
import styled from './style.module.scss'

// eslint-disable-next-line no-unused-vars
function index({ toggle, setToggle }) {
  return (
    <input
      type="text"
      className={`${styled.search} col col-md-9 p-3`}
      placeholder="What do you want to watch?"
      // eslint-disable-next-line no-undef
      onChange={(e) => setInput(e.target.value)}
      onClick={() => setToggle(true)}
    />
  )
}

export default index
