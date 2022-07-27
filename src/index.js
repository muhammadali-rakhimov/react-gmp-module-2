import React from 'react'
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line import/extensions
import App from './pages/App'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
