/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEditMovieMutation } from '../../services/api'
import styled from './styles.module.scss'

function EditMovieModal({ handleClose, item }) {
  const [editMovie] = useEditMovieMutation()

  const formik = useFormik({
    initialValues: {
      title: item.title,
      poster_path: item.poster_path,
      genres: item.genres[0],
      release_date: item.release_date,
      vote_average: item.vote_average,
      runtime: item.runtime,
      overview: item.overview,
    },
    validationSchema: Yup.object({
      vote_average: Yup.number().required('Rating must be a number!'),
      runtime: Yup.number().required('Runtime must be a number!'),
    }),
    onChange: (e) => formik.setFieldValue(formik.values.genres, e.target.value),
    onSubmit: () => {
      editMovie({
        id: item.id,
        title: formik.values.title,
        poster_path: formik.values.poster_path,
        genres: [formik.values.genres],
        release_date: formik.values.release_date,
        vote_average: 1 * formik.values.vote_average,
        runtime: 1 * formik.values.runtime,
        overview: formik.values.overview,
      }).then(() => handleClose())
    },
    onReset: () => {
      formik.values.title = ''
      formik.values.poster_path = ''
      formik.values.genres = ''
      formik.values.release_date = ''
      formik.values.vote_average = 0
      formik.values.runtime = 0
      formik.values.overview = ''
    },
  })

  return (
    <div className={styled.parent}>
      <div className={styled.titleDiv}>
        <h2 className={styled.title}>EDIT MOVIE</h2>
        <button onClick={handleClose} className={styled.buttonClose}>
          &#10006;
        </button>
      </div>
      <form onSubmit={formik.handleSubmit} className="col-lg-12 my-2">
        <div className="d-flex">
          <div className="col-lg-6">
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="title">
                TITLE
              </label>
              <input
                className={styled.inputField}
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onReset={formik.handleReset}
                value={formik.values.title}
                placeholder="Moana"
              />
            </div>
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="poster_path">
                MOVIE URL
              </label>
              <input
                className={styled.inputField}
                id="poster_pasth"
                name="poster_path"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster_path}
                placeholder="https://"
              />
            </div>
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="genres">
                GENRES
              </label>
              <select
                id="genres"
                name="genres"
                onChange={
                  formik.handleChange
                  // eslint-disable-next-line react/jsx-curly-newline
                }
                onBlur={formik.handleBlur}
                value={formik.values.genres}
                className={styled.selectGenre}
              >
                <option value="all">All</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="horror">Horror</option>
                <option value="documentary">Documentary</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="animation">Animation</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="release_date">
                RELEASE DATE
              </label>
              <input
                type="date"
                id="release_date"
                name="release_date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.release_date}
                className={styled.datePicker}
                placeholder="Select Date"
              />
            </div>
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="vote_average">
                RATING
              </label>
              <input
                className={styled.inputField}
                type="text"
                id="vote_average"
                name="vote_average"
                onChange={
                  (value) =>
                    formik.setFieldValue('vote_average', 1 * value.target.value)
                  // eslint-disable-next-line react/jsx-curly-newline
                }
                onBlur={formik.handleBlur}
                value={formik.values.vote_average}
                placeholder="7.8"
              />
              {formik.errors.vote_average ? (
                <div className={styled.errorParent}>
                  <div className={styled.errorChild}>
                    {formik.errors.vote_average}
                  </div>
                </div>
              ) : null}
            </div>
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="runtime">
                RUNTIME
              </label>
              <input
                className={styled.inputField}
                type="text"
                id="runtime"
                name="runtime"
                onChange={
                  (value) => formik.setFieldValue('runtime', value.target.value)
                  // eslint-disable-next-line react/jsx-curly-newline
                }
                onBlur={formik.handleBlur}
                value={formik.values.runtime}
                placeholder="minutes"
              />
              {formik.errors.runtime ? (
                <div className={styled.errorParent}>
                  <div className={styled.errorChild}>
                    {formik.errors.runtime}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={clsx('col-12', styled.inputDiv)}>
          <label className={styled.labels} htmlFor="overview">
            OVERVIEW
          </label>
          <input
            id="overview"
            name="overview"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.overview}
            className={clsx(styled.inputField, styled.inputFieldOverview)}
            placeholder="Movie description"
            type="text"
          />
        </div>
        <div className={styled.lastButtons}>
          <button
            onClick={formik.handleReset}
            className={styled.inputReset}
            type="reset"
          >
            Reset
          </button>
          <button className={styled.inputSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditMovieModal
