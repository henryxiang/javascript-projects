import React from 'react'
import {observer} from 'mobx-react'
import IconButton from 'material-ui/IconButton'

@observer
class LikeItView extends React.Component {

  render() {
    const {counterList} = this.props
    if (counterList.items != null && counterList.items.length == 2) {
      const counters = counterList.items
      const likeCounter = counters[0]
      const dislikeCounter = counters[1]
      return (
        <div>
            <IconButton iconClassName="fa fa-thumbs-o-up"
                        iconStyle={{color:'#449eed'}}
                        onClick={event => this.incrementCounter(0)} />
            {likeCounter.count}

            <IconButton iconClassName="fa fa-thumbs-o-down"
                        iconStyle={{color:'#db6262'}}
                        onClick={event => this.incrementCounter(1)} />
            {dislikeCounter.count}
        </div>
      )
    } else {
      return <div></div>
    }
    
  }

  incrementCounter(c) {
    const {counterList} = this.props
    const counter = counterList.items[c]
    console.log(counter)
    counter.increment()
    counterList.update(counter)
  }

}

export default LikeItView;
