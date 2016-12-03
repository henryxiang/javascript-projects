import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Badge from 'react-bootstrap/lib/Badge'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const defalutStyles = {
  counter: {
    display: 'inline-block',
    width: '180px',
    margin: '5px',
    cursor: 'pointer'
  },
  badge: {
    display: 'inline',
    width: '50px',
    margin: '5px',
    float: 'right'
  }
}

@observer class CounterView extends Component {
  render() {
    /* pass in backing model object via 'counter' props */
    const {counter, styles=defalutStyles} = this.props
    return (
      <div style={styles.counter}
           /* Actions: counter.increment() and counter.reset() */
           onClick={(event) => {event.preventDefault(); counter.increment()}}
           onContextMenu={(event) => {event.preventDefault(); counter.reset()}}>
        {counter.name}
        <Badge style={styles.badge}>
          {/* Obsersvable: counter.count */}
          {counter.count}
        </Badge>
      </div>
    )
  }
}

export default CounterView
