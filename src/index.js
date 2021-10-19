import React from 'react'
import ReactDOM from 'react-dom'
import './assets/fonts/Roboto/roboto.css'
import GlobalStyles from './globalStyles'
import { App } from './App/App'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyles/>
  </React.StrictMode>,
  document.getElementById('root'),
)


