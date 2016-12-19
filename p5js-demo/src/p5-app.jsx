import React from 'react'
import P5Wrapper from './p5-wrapper'
// import sketch from './p5-demo'
import sketch from './p5-bouncing-ball'

class P5App extends React.Component {

  render() {
    return (
      <div>
          <h3>P5.js Demo</h3>
          <P5Wrapper sketch={sketch} />
      </div>
    )
  }

}

export default P5App;
