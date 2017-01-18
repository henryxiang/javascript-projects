import React, {Component} from 'react'
import CounterListView from '../view/counter-list'
import Counter from '../model/counter'
// import ObservableList from '../model/observable-list'
import ObservableList from '../model/realtime-observable-list'

//const counterList = new ObservableList()
//counterList.add(new Counter())

const counterList = new ObservableList('http://localhost:3030', 'counters')

class CounterApp extends Component {
  render() {
    return <CounterListView counterList={counterList} />
  }
}

export default CounterApp
