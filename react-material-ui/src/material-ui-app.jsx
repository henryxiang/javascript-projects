import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Snackbar from 'material-ui/Snackbar'
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import './css/styles.css'
import css from './css/styles.mcss'

const iconStyles = {
  marginLeft: 20,
  cursor: 'pointer'
};

class TestApp extends React.Component {

  state = {
    message: '',
    open: false,
    autoHideDuration: 4000
  }

  render() {
    return (
      <div className={css.myBox + ' box'}>
        <div className={css.myBox}>
          <h2>Material UI React Components Demo</h2>
        </div>
        <RaisedButton label="Click Me" onClick={() => this.handleClick("Button")}/>
        <DatePicker hintText="Choose a date" />
        <TimePicker hintText="Pick a time" />
        <TextField hintText="Input Text" />
        <FontIcon className="fa fa-address-book" style={iconStyles}
                  color={blue500}
                  hoverColor={greenA200}
                  onClick={() => this.handleClick("Icon")} />
        <Snackbar open={this.state.open}
                  message={this.state.message}
                  autoHideDuration={this.state.autoHideDuration} />
      </div>
    )
  }

  handleClick = (name) => {
    this.setState({
      message: `You clicked '${name}'`,
      open: true
    })
  }

}

export default TestApp
