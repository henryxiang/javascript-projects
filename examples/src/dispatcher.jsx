import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import AppLayout from './app/layout.jsx'
import Index from './app/index'
import MaterialUiDemoApp from './app/material-ui-demo-app'
import LikeItApp from './app/like-it-app'
import CounterApp from './app/counter-app'
import CalendarApp from './app/calendar-app'
import ComponentTester from './app/component-tester.jsx'
import BouncingBallApp from './app/bouncing-ball-app.jsx'

class Dispatcher extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={Index} />
          <Route path="/material-ui" component={MaterialUiDemoApp} />
          <Route path="/like-it" component={LikeItApp} />
          <Route path="/counter" component={CounterApp} />
          <Route path="/calendar" component={CalendarApp} />
          <Route path="/bouncing-ball" component={BouncingBallApp} />
          <Route path="/test" component={ComponentTester} />
        </Route>
      </Router>
    )
  }

}

export default Dispatcher;
