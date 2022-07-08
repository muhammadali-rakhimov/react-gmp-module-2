/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import clsx from 'clsx'
import React, { useContext } from 'react'
import { Context } from '../../../../contexts/Context'
import styled from './styles.module.scss'

// eslint-disable-next-line object-curly-newline
function index({ item, src, name, type, year }) {
  const { setMovie } = useContext(Context)

  return (
    <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
      <img
        onClick={() => {
          scroll(0, 0)
          setMovie(item)
        }}
        className={clsx(styled.image, styled.cursor)}
        src={src}
        alt="image"
      />
      <br />
      <br />
      <div
        onClick={() => {
          scroll(0, 0)
          setMovie(item)
        }}
        className={clsx('d-flex justify-content-between m-3', styled.cursor)}
        role="button"
      >
        <div className="col-8">
          <p>{name}</p>
          <p>{type}</p>
        </div>
        <div className={styled.year}>
          <p className={styled.yearNumber}>{year}</p>
        </div>
      </div>
    </div>
  )
}

export default index
