import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'
import CounterView from './counter'

const defaultStyles = {
    counterAddButton: {
      display: 'inline-block',
      width: '30px',
      margin: '8px'
    }
}

@observer class CounterListView extends Component {
  render() {
    /* pass in backing model object via 'counterList' props */
    const {counterList, styles=defaultStyles} = this.props
    return (
      <div>
        <Button bsStyle="primary" bsSize="xs" style={styles.counterAddButton}
                /* Action: counterList.addCounter() */
                onClick={(event) => {counterList.addCounter()}}>
          <i className="fa fa-plus" />
        </Button>

        {
          /* Observable: counterList.counters */
          counterList.counters.map(counter => {
          /* Function that generates values derived from observables */
          // counterList.getSortedCounters("desc").map(counter => {
            return (
              <div key={counter._id}>
                <CounterView counter={counter} />
                <Button bsStyle="danger" bsSize="xs"
                        /* Action: counterList.removeCounter() */
                        onClick={(event) => {counterList.removeCounter(counter)}}>
                  <i className="fa fa-trash" />
                </Button>
              </div>
            )
          })
        }

        <div>
             {/* Computed properties: counterList.numberOfCounters and counterList.totalCount */}
             <b>Counters: {counterList.numberOfCounters}</b>
             {" "}
             <b>Total: {counterList.totalCount}</b>
        </div>
      </div>
    )
  }
}

export default CounterListView
