import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'

const defalutStyle = {
  display: 'inline-block',
  width: '100px'
}

@observer class CounterView extends Component {
  render() {
    const {model, style=defalutStyle} = this.props
    return (
      <Button bsStyle="default" style={style}
              onClick={(event) => {model.increment()}}
              onContextMenu={(event) => {event.preventDefault(); model.reset()}}>
        {model.count}
      </Button>
    )
  }
}

export default CounterView
