import React from 'react'
import LikeItView from '../view/like-it'
import Counter from '../model/counter'
// import ObservableList from '../model/observable-list'
import RealTimeCounterStore from '../store/realtime-counter-store'

// const counterList = new ObservableList()

const counterList = new RealTimeCounterStore('http://localhost:3030', 'counters')
counterList.loadData()
// counterList.loadData({name: "Like"})
// counterList.loadData({name: "Dislike"})

class LikeItApp extends React.Component {

  render() {
    return (
      <LikeItView counterList={counterList} />
    )
  }

}

export default LikeItApp
