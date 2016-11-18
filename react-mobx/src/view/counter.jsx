import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'

@observer class CounterView extends Component {
  render() {
    const {model} = this.props
    return (
      <Button bsStyle="default" block
              onClick={(event) => {model.increment()}}
              onContextMenu={(event) => {event.preventDefault(); model.reset()}}>
        {model.count}
      </Button>
    )
  }
}

export default CounterView
