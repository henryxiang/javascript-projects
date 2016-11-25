import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import AppLayout from './app/layout.jsx'
import Index from './app/index'
import MaterialUiDemoApp from './app/material-ui-demo-app'
import CounterApp from './app/counter-app'
import CalendarApp from './app/calendar-app'

class Dispatcher extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={Index} />
          <Route path="/material-ui" component={MaterialUiDemoApp} />
          <Route path="/counter" component={CounterApp} />
          <Route path="/calendar" component={CalendarApp} />
        </Route>
      </Router>
    )
  }

}

export default Dispatcher;
