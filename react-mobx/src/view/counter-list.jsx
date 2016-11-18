import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'
import CounterView from './counter'

@observer class CounterListView extends Component {
  render() {
    const {model} = this.props
    return (
      <div>
        <Button bsStyle="primary"
                onClick={(event) => {model.addCounter()}}>
          <i className="fa fa-plus" />
        </Button>
        
        {
          model.counters.map(counter => {
            return (
              <div key={counter.id}>
                <CounterView model={counter} />  
                <Button bsStyle="danger"
                        onClick={(event) => {model.removeCounter(counter)}}>
                  <i className="fa fa-trash" />
                </Button>
              </div>
            )
          })
        } 

        <div>
             <b>Counters: {model.numberOfCounters}</b>
             {" "}
             <b>Total: {model.totalCount}</b>
        </div>   
      </div>
    )
  }
}

export default CounterListView
