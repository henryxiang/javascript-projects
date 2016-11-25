import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Snackbar from 'material-ui/Snackbar'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'

const iconStyles = {
  marginLeft: -20,
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
      <MuiThemeProvider>
        <div>
          <h3>Material UI React Components Demo</h3>
          <DatePicker hintText="Choose a date" floatingLabelText="Date" />
          <TimePicker hintText="Pick a time" floatingLabelText="Time"/>
          <TextField hintText="What's your name?" floatingLabelText="Client Name"/>
          <FontIcon className="fa fa-address-book" style={iconStyles}
                    color={blue500}
                    hoverColor={greenA200}
                    onClick={() => this.handleClick("User Icon")} />

          <RaisedButton label="Sign Up"
                        onClick={() => this.handleClick("Sign Up Button")}
                        style={{display:'block', width:120}}/>

          <Snackbar open={this.state.open}
                    message={this.state.message}
                    autoHideDuration={this.state.autoHideDuration} />
        </div>
      </MuiThemeProvider>
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
