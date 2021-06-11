import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import App from './App'
import store from './store'

test('renders learn react link', () => {
  render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
  const element = screen.getByText(/Resumer/i)
  expect(element).toBeInTheDocument()
})
