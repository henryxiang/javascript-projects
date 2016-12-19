import React from 'react'
import p5 from 'p5'

class P5Wrapper extends React.Component {

  render() {
    return (
      <div ref="wrapper" />
    )
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.refs.wrapper)
  }

}

export default P5Wrapper;
