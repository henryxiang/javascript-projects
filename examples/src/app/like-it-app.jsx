import React from 'react'
import LikeItView from '../view/like-it'
import Counter from '../model/counter'
// import ObservableList from '../model/observable-list'
import ObservableList from '../model/realtime-observable-list'


// const counterList = new ObservableList()
const counterList = new ObservableList('http://localhost:3030', 'counters')

counterList.add(new Counter("Like"))
counterList.add(new Counter("Dislike"))


class LikeItApp extends React.Component {

  render() {
    return (
      <LikeItView counterList={counterList} />
    )
  }

}

export default LikeItApp
