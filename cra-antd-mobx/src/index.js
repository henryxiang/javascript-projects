// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';

import React from 'react'
import ReactDOM from 'react-dom'
import CounterListView from './view/counter-list'
import Counter from './model/counter'
import ObservableList from './model/observable-list'

const counterList = new ObservableList()
counterList.add(new Counter())

ReactDOM.render(
  <CounterListView counterList={counterList} />,
  document.getElementById('root')
)
registerServiceWorker();
