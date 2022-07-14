/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import clsx from 'clsx'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { getSelectedMovie } from '../../../../redux/actions/actions'
import styled from './styles.module.scss'
import notFound from './notFound.jpg'

// eslint-disable-next-line object-curly-newline
function index({ item, selectThisMovie }) {
  const dispatch = useDispatch()

  return (
    <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
      <img
        onClick={() => {
          scroll(0, 0)
          dispatch(selectThisMovie(item))
        }}
        className={clsx(styled.image, styled.cursor)}
        src={item.poster_path ? item.poster_path : notFound}
        alt="image"
      />
      <div
        onClick={() => {
          scroll(0, 0)
          dispatch(selectThisMovie(item))
        }}
        className={clsx('d-flex justify-content-between', styled.textContent)}
        role="button"
      >
        <div className="col-8">
          <p className={styled.name}>{item.title}</p>
          <p className={styled.type}>{item.genres}</p>
        </div>
        <div className={styled.year}>
          <p className={styled.yearNumber}>{item.year}</p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectThisMovie: (item) => dispatch(getSelectedMovie(item)),
  }
}

export default connect(null, mapDispatchToProps)(index)
