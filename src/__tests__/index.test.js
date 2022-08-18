/* eslint-disable no-undef */
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Header from '../features/Header/Header.jsx'
import store from '../redux/store.js'

describe('App', () => {
  test('smth', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
