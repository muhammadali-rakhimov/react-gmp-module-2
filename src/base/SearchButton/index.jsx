import React from 'react'
import styled from './style.module.scss'

const index = () => (
  <input
    type="submit"
    className={`${styled.searchButton} col col-md-3 p-3`}
    value="SEARCH"
  />
)

export default index
