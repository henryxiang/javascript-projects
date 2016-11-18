import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import CounterView from './counter'

@observer class CounterListView extends Component {
  render() {
    const {model} = this.props
    return (
      <div>
        <Row>
          <Col md={1}>
            <Button bsStyle="primary"
                    onClick={(event) => {model.addCounter()}}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
          </Col>
        </Row>
        
        {
          model.counters.map(counter => {
            return (
              <Row key={counter.id}>
                <Col md={1}>
                  <CounterView model={counter} />  
                </Col>
                <Col md={1}>
                  <Button bsStyle="danger"
                    onClick={(event) => {model.removeCounter(counter)}}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            )
          })
        } 

        <Row>
             <Col md={1}>Counters: {model.numberOfCounters}</Col>
             <Col md={1}>Total: {model.totalCount}</Col>
           </Row>   
      </div>
    )
  }
}

export default CounterListView
