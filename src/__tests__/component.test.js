/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider, useDispatch } from 'react-redux'
import { act } from 'react-dom/test-utils'
import Header from '../features/Header/Header.jsx'
import store from '../redux/store.js'
import '@testing-library/jest-dom'

const dispatch = useDispatch

test('just because', async () => {
  console.log(dispatch)

  await act(
    async () =>
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      )
    // eslint-disable-next-line function-paren-newline
  )

  const inputNode = screen.getByPlaceholderText(/what do you want to watch\?/i)
  const inputSubmit = screen.getByRole('button', {
    name: /search/i,
  })

  await act(() => {
    fireEvent(
      inputNode,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    fireEvent(
      inputSubmit,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    fireEvent.change(inputNode, { target: { value: 'aaaaaaaaaa' } })
    fireEvent.click(inputSubmit)
    console.log(inputNode)
  })
  // fireEvent.click(screen.getByText('Load Greeting'))
  // await waitFor(() => screen.getByRole('heading'))
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})

// fireEvent.click(screen.getByText('Load Greeting'))

// // wait until the `get` request promise resolves and
// // the component calls setState and re-renders.
// // `waitFor` waits until the callback doesn't throw an error

// await waitFor(() =>
//   // getByRole throws an error if it cannot find an element
//   screen.getByRole('heading'),
// )
