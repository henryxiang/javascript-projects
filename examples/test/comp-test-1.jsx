import React from 'react';

/* Testing Material UI FlatButton */
import FlatButton from 'material-ui/FlatButton'

const conf = {
    name: "Flat Button",
    props: {
      label: "Primary",
      primary: true
    },
    style: {}
}

const handleClick = (proxy) => {
  console.debug("Button Clicked\n", proxy)
}

class TestComponent extends React.Component {

  render() {
    return (
      <div>
        <h3>{conf.name}</h3>
        <FlatButton {...conf.props} style={conf.style}
              onClick={handleClick}/>
      </div>

    );
  }

}

export default TestComponent;
