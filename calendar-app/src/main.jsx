import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import App from './material-ui-app.jsx'
import App from './calendar-app'

injectTapEventPlugin()

// const App = () => (
//   <MuiThemeProvider>
//     <TestApp />
//   </MuiThemeProvider>
// )

ReactDOM.render(
  (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  ),
  document.getElementById('app')
)
