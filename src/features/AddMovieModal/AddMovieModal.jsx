/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React from 'react'
import { Formik, Field } from 'formik'
import styled from './styles.module.scss'

function AddMovieModal({ handleClose }) {
  return (
    <div className={styled.parent}>
      <div className={styled.titleDiv}>
        <h2 className={styled.title}>ADD MOVIE</h2>
        <button onClick={handleClose} className={styled.buttonClose}>
          &#10006;
        </button>
      </div>

      <Formik
        initialValues={{
          title: '',
          poster_path: '',
          genres: '',
          release_date: '',
          vote_average: '',
          runtime: '',
          overview: '',
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2))
        }}
      >
        {({
          title,
          poster_path,
          genres,
          release_date,
          vote_average,
          runtime,
          overview,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          setFieldValue,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit} className="col-lg-12 my-2">
            <div className="d-flex">
              <div className="col-lg-6">
                <div className={clsx('col-12', styled.inputDiv)}>
                  <label className={styled.labels} htmlFor="title">
                    TITLE
                  </label>
                  <Field
                    className={styled.inputField}
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={title}
                    placeholder="Moana"
                  />
                  {errors.name && <div id="feedback">{errors.name}</div>}
                </div>
                <div className={clsx('col-12', styled.inputDiv)}>
                  <label className={styled.labels} htmlFor="poster_path">
                    MOVIE URL
                  </label>
                  <Field
                    className={styled.inputField}
                    id="poster_path"
                    name="poster_path"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={poster_path}
                    placeholder="https://"
                  />
                </div>
                <div className={clsx('col-12', styled.inputDiv)}>
                  <label className={styled.labels} htmlFor="genres">
                    GENRES
                  </label>
                  <Field
                    id="genres"
                    name="genres"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={genres}
                    component="select"
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
                  </Field>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={release_date}
                    className={styled.datePicker}
                    placeholder="Select Date"
                  />
                </div>
                <div className={clsx('col-12', styled.inputDiv)}>
                  <label className={styled.labels} htmlFor="vote_average">
                    RATING
                  </label>
                  <Field
                    className={styled.inputField}
                    type="text"
                    id="vote_average"
                    name="vote_average"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={vote_average}
                    placeholder="7.8"
                  />
                </div>
                <div className={clsx('col-12', styled.inputDiv)}>
                  <label className={styled.labels} htmlFor="runtime">
                    RUNTIME
                  </label>
                  <Field
                    className={styled.inputField}
                    type="text"
                    id="runtime"
                    name="runtime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={runtime}
                    placeholder="minutes"
                  />
                </div>
              </div>
            </div>
            <div className={clsx('col-12', styled.inputDiv)}>
              <label className={styled.labels} htmlFor="overview">
                OVERVIEW
              </label>
              <Field
                id="overview"
                name="overview"
                onChange={handleChange}
                onBlur={handleBlur}
                value={overview}
                className={clsx(styled.inputField, styled.inputFieldOverview)}
                placeholder="Movie description"
                type="text"
              />
            </div>
            <div className={styled.lastButtons}>
              <button
                onClick={() =>
                  handleReset({
                    title: '',
                    poster_path: '',
                    genres: '',
                    release_date: '',
                    vote_average: '',
                    runtime: '',
                    overview: '',
                  })
                }
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
        )}
      </Formik>
    </div>
  )
}

export default AddMovieModal
