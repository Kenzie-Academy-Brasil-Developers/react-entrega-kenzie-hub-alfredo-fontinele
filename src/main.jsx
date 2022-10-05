import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <App />
    </Router>
  </React.StrictMode>
)
