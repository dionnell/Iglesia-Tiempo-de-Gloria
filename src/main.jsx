import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './carrousel.scss'
import './bootstrap.min.css'
import './bootstrap.css'
import { MainApp } from './IglesiaApp/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
