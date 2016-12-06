import React, {Component} from 'react'
import CounterListView from '../view/counter-list'
import Counter from '../model/counter'
import ObservableList from '../model/observable-list'

const counterList = new ObservableList()
//counterList.add(new Counter())

class CounterApp extends Component {
  render() {
    return <CounterListView counterList={counterList} />
  }
}

export default CounterApp
