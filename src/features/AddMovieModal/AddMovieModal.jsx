/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import DatePicker from 'react-datepicker'
import styled from './styles.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

function AddMovieModal({ handleClose }) {
  const [genreValue, setGenreValue] = useState('')
  const [startDate, setStartDate] = useState()

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
          movieUrl: '',
          genre: '',
          releaseDate: '',
          vote_average: '',
          runtime: '',
          overview: '',
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2))
        }}
      >
        <Form className="col-lg-12 my-4">
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
                  placeholder="Moana"
                />
              </div>
              <div className={clsx('col-12', styled.inputDiv)}>
                <label className={styled.labels} htmlFor="movieUrl">
                  MOVIE URL
                </label>
                <Field
                  className={styled.inputField}
                  id="movieUrl"
                  name="movieUrl"
                  placeholder="https://"
                />
              </div>
              <div className={clsx('col-12', styled.inputDiv)}>
                <label className={styled.labels} htmlFor="genre">
                  GENRE
                </label>
                <Field
                  value={genreValue}
                  onChange={(e) => setGenreValue(e.target.value)}
                  name="genre"
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
                <label className={styled.labels} htmlFor="releaseDate">
                  RELEASE DATE
                </label>
                <DatePicker
                  className={styled.datePicker}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  id="releaseDate"
                  name="releaseDate"
                  placeholderText="Select Date"
                />
              </div>
              <div className={clsx('col-12', styled.inputDiv)}>
                <label className={styled.labels} htmlFor="vote_average">
                  RATING
                </label>
                <Field
                  className={styled.inputField}
                  id="vote_average"
                  name="vote_average"
                  placeholder="7.8"
                />
              </div>
              <div className={clsx('col-12', styled.inputDiv)}>
                <label className={styled.labels} htmlFor="runtime">
                  RUNTIME
                </label>
                <Field
                  className={styled.inputField}
                  id="runtime"
                  name="runtime"
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
              className={clsx(styled.inputField, styled.inputFieldOverview)}
              id="overview"
              name="overview"
              placeholder="Movie description"
              type="text"
            />
          </div>
          <div className={styled.lastButtons}>
            <button className={styled.inputReset} type="submit">
              Reset
            </button>
            <button className={styled.inputSubmit} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default AddMovieModal
