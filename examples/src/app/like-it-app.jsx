import React from 'react'
import LikeItView from '../view/like-it'
import Counter from '../model/counter'

const likeCounter = new Counter()
const dislikeCounter = new Counter()

class LikeItApp extends React.Component {

  render() {
    return (
      <LikeItView likeCounter={likeCounter} dislikeCounter={dislikeCounter} />
    )
  }

}

export default LikeItApp
