import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Dispatcher from './dispatcher'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(<Dispatcher />, document.getElementById('app'))
