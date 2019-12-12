import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(<App />)

// ReactDOM.render(<App />, rootEl)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
