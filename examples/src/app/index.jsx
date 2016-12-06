import React from 'react'
import {Link} from 'react-router'
import {links} from '../conf/links'

class Index extends React.Component {

  render() {
    return (
      <div>
        <h3>React Demo Apps</h3>
        <ul role="nav">
          {
            links.map(link => {
              return (
                <li key={link.id}><Link to={link.id}>{link.label}</Link></li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default Index;
