import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import $ from 'jquery'
import Popper from 'popper.js'
import App from './App/App'
import * as serviceWorker from './serviceWorker'
import '@fortawesome/fontawesome-free/js/all'
import 'react-image-lightbox/style.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
