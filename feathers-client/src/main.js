import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './material-ui-app'
import io from 'socket.io-client'

injectTapEventPlugin()

console.log("===== Application Started =====")

const socket = io('http://localhost:3030/')
socket.on('connect', () => {
  console.log("socket connected")
})

socket.on('messages created', (data) => {
  console.log("new message => \n", data)
})

socket.on('messages updated', (data) => {
  console.log("updated message => \n", data)
})

const index = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(index, document.getElementById('app'))
