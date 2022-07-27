import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import store from './redux/store.js'
import App from './pages/App'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<App />} />
          <Route path="/" element={<Navigate replace to="/search" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
