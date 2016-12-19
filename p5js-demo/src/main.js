import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import App from './material-ui-app'
import App from './p5-app'

injectTapEventPlugin()

const index = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(index, document.getElementById('app'))
