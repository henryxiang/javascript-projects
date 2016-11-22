import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
  marginLeft: -20,
};

const TestApp = () => (
  <div>
    <RaisedButton label="Click Me" onClick={()=>{alert("You clicked me")}}/>
    <DatePicker hintText="Choose a date" />
    <TimePicker hintText="Pick a time" />
    <TextField hintText="Input Text" />
    <FontIcon className="fa fa-address-book" style={iconStyles}
              color={blue500}
              hoverColor={greenA200} />
    {/* <IconButton iconClassName="fa fa-bell-o" color={red500} /> */}
  </div>
)

export default TestApp
