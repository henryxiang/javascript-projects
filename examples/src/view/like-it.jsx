import React from 'react'
import {observer} from 'mobx-react'
import IconButton from 'material-ui/IconButton'
import _ from 'lodash'

@observer
class LikeItView extends React.Component {

  render() {
    const {counterList} = this.props
    if (counterList.items != null && counterList.items.length == 2) {
      const counters = counterList.items
      const likeCounter = _.find(counters, {name: 'Like'})
      const dislikeCounter = _.find(counters, {name: 'Dislike'})
      return (
        <div>
            <IconButton iconClassName="fa fa-thumbs-o-up"
                        iconStyle={{color:'#449eed'}}
                        onClick={event => this.incrementCounter(likeCounter)} />
            {likeCounter.count}

            <IconButton iconClassName="fa fa-thumbs-o-down"
                        iconStyle={{color:'#db6262'}}
                        onClick={event => this.incrementCounter(dislikeCounter)} />
            {dislikeCounter.count}
        </div>
      )
    } else {
      return <div></div>
    }
    
  }

  incrementCounter(c) {
    const {counterList} = this.props
    c.increment()
    counterList.update(c)
  }
}

export default LikeItView;
