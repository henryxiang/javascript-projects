import 'font-awesome/css/font-awesome.min.css'
// import css from './css/styles.mcss'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './material-ui-app'

injectTapEventPlugin()

const index = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

// console.debug("CSS => \n", css)

ReactDOM.render(index, document.getElementById('app'))
