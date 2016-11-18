import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';

import React from 'react'
import ReactDOM from 'react-dom'
import CounterListView from './view/counter-list'
import CounterList from './model/counter-list'

const counterList = new CounterList()
counterList.addCounter()

ReactDOM.render(
  <CounterListView model={counterList} />,
  document.getElementById('app')
)
