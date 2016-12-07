import React from 'react'
import LikeItView from '../view/like-it'
import Counter from '../model/counter'

const props = {
  likeCounter: new Counter(),
  dislikeCounter: new Counter()
}

class LikeItApp extends React.Component {

  render() {
    return (
      <LikeItView {...props} />
    )
  }

}

export default LikeItApp
