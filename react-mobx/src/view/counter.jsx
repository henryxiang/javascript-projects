import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Badge from 'react-bootstrap/lib/Badge'

const defalutStyles = {
  counter: {
    display: 'inline-block',
    width: '50px',
    margin: '5px',
    cursor: 'pointer'
  }
}

@observer class CounterView extends Component {
  render() {
    /* pass in backing model object via 'counter' props */
    const {counter, styles=defalutStyles} = this.props
    return (
      <Badge  style={styles.counter}
              /* Actions: counter.increment() and counter.reset() */
              onClick={(event) => {event.preventDefault(); counter.increment()}}
              onContextMenu={(event) => {event.preventDefault(); counter.reset()}}>
        {/* Obsersvable: counter.count */}
        {counter.count}
      </Badge>
    )
  }
}

export default CounterView
