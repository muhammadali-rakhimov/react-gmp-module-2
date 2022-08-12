import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import store from './redux/store.js'
import App from './pages/App'
import './index.scss'
import NotFound from './pages/404/NotFound.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/search" element={<App />} />
          <Route path="/search/:searchQuery" element={<App />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
