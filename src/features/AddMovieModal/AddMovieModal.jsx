/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx'
import React from 'react'
import { useFormik } from 'formik'
import styled from './styles.module.scss'

function AddMovieModal({ handleClose }) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={styled.parent}>
      <div className={styled.titleDiv}>
        <h2>ADD MOVIE</h2>
        <button onClick={handleClose}>&#10006;</button>
      </div>
      <form onSubmit={formik.handleSubmit} className="col-lg-12">
        <div className={clsx('col-5', styled.inputLabel)}>
          <label htmlFor="modalName">TITLE</label>
          <input id="modalName" type="text" />
        </div>
        <div className={clsx('col-5', styled.inputLabel)}>
          <label htmlFor="modalName">Smth</label>
          <input id="modalName" type="text" />
        </div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMovieModal
