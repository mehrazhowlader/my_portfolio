import React from 'react'
import { createRoot } from 'react-dom/client'
// Import order matters: tokens and base styles must land in the bundle before
// the component stylesheets so component rules can override them.
import './styles/global.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
