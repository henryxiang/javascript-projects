import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'

const defalutStyle = {
  display: 'inline-block',
  width: '100px'
}

@observer class CounterView extends Component {
  render() {
    // pass in backing model object via 'counter' props
    const {counter, style=defalutStyle} = this.props
    return (
      <Button bsStyle="default" style={style}
              onClick={(event) => {counter.increment()}}
              onContextMenu={(event) => {event.preventDefault(); counter.reset()}}>
        {counter.count}
      </Button>
    )
  }
}

export default CounterView
