import React from 'react'
import {Link} from 'react-router'

class Index extends React.Component {

  render() {
    return (
      <div>
        <h3>React Demo Apps</h3>
        <ul role="nav">
          <li><Link to="/material-ui">Material UI</Link></li>
          <li><Link to="/counter">Counter App</Link></li>
          <li><Link to="/calendar">Calendar App</Link></li>
        </ul>
      </div>
    )
  }

}

export default Index;
