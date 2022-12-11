import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoiveProvider } from './Context/MovieContext'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MoiveProvider>
    <App />
    </MoiveProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
