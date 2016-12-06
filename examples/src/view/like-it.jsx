import React from 'react'
import {observer} from 'mobx-react'
import IconButton from 'material-ui/IconButton'

@observer
class LikeItView extends React.Component {

  render() {
    const {likeCounter, dislikeCounter} = this.props
    return (
      <div>
          <IconButton iconClassName="fa fa-thumbs-o-up"
                      iconStyle={{color:'#449eed'}}
                      onClick={event => likeCounter.increment()} />
          {likeCounter.count}

          <IconButton iconClassName="fa fa-thumbs-o-down"
                      iconStyle={{color:'#db6262'}}
                      onClick={event => dislikeCounter.increment()} />
          {dislikeCounter.count}
      </div>
    )
  }

}

export default LikeItView;
