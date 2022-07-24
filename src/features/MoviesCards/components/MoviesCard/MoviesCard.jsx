/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getSelectedMovie } from '../../../../redux/actions/actions'
import styled from './styles.module.scss'
import notFound from './notFound.jpg'
import { useDeleteMovieMutation } from '../../../../services/api'

// eslint-disable-next-line object-curly-newline
function index({ item, selectThisMovie }) {
  const [iconVisibility, setIconVisibility] = useState(false)
  const [confirm, setConfirm] = useState(false)

  const dispatch = useDispatch()

  const [deleteMovie, { status, isSuccess }] = useDeleteMovieMutation()

  // eslint-disable-next-line no-unused-expressions
  // isSuccess && status === 'fulfilled'
  //   ? dispatch(isDeletedDispatch(true))
  // : 'Pending...'

  return (
    <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
      <div className={styled.imageParent}>
        <div className={styled.imageParentDiv}>
          <img
            onClick={() => {
              scroll(0, 0)
              dispatch(selectThisMovie(item))
            }}
            className={clsx(styled.image, styled.cursor)}
            src={item.poster_path ? item.poster_path : notFound}
            onContextMenu={() => console.log(item.title)}
            alt="image"
          />
        </div>
        <div
          onClick={() => {
            setIconVisibility(!iconVisibility)
          }}
          className={styled.kebabIcon}
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            width="30"
            height="30"
            viewBox="0 0 20 20"
          >
            <path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z" />
          </svg>
          <div
            className={
              iconVisibility ? styled.kebabIconMenu : styled.kebabIconMenuHide
            }
          >
            <ul>
              <li>Edit</li>
              <li
                onClick={() => {
                  setConfirm(true)
                }}
              >
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
      {confirm ? (
        <div className={styled.popup}>
          <div className={styled.popupChild}>
            <button
              onClick={() => {
                setConfirm(false)
              }}
              className={styled.popupX}
            >
              &#10006;
            </button>
            <div className={styled.popupText}>
              <h2 className={styled.popupTitle}>DELETE MOVIE</h2>
              <p className={styled.popupOverview}>
                Are you sure you want to delete this movie?
              </p>
              <button
                onClick={() => {
                  deleteMovie(item.id)
                  setConfirm(false)
                }}
                className={styled.popupButton}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
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
          <p className={styled.type}>
            {item.genres
              ? item.genres.map((el) => <span key={el}>{el} </span>)
              : null}
          </p>
        </div>
        <div className={styled.year}>
          <p className={styled.yearNumber}>
            {item.release_date ? item.release_date.substring(0, 4) : 'unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isDeletedState: state.root.isDeleted,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectThisMovie: (item) => dispatch(getSelectedMovie(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
