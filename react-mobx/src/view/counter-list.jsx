import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import CounterView from './counter'

const styles = {
    badge: {
      display: 'inline-block',
      width: '30px',
      marginRight: '5px'
    }
}

@observer class CounterListView extends Component {
  render() {
    // pass in backing model object via 'counterList' props
    const {counterList} = this.props
    return (
      <div>
        <Button bsStyle="primary"
                onClick={(event) => {counterList.addCounter()}}>
          <i className="fa fa-plus" />
        </Button>

        {
          counterList.counters.map(counter => {
          // counterList.getSortedCounters("desc").map(counter => {
            return (
              <div key={counter.id}>
                <Badge style={styles.badge}>{counter.id}</Badge>
                <CounterView counter={counter} />
                <Button bsStyle="danger"
                        onClick={(event) => {counterList.removeCounter(counter)}}>
                  <i className="fa fa-trash" />
                </Button>
              </div>
            )
          })
        }

        <div>
             <b>Counters: {counterList.numberOfCounters}</b>
             {" "}
             <b>Total: {counterList.totalCount}</b>
        </div>
      </div>
    )
  }
}

export default CounterListView
