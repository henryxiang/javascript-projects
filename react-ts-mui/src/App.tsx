import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import "moment";
import NavBar from "./components/NavBar";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

class App extends Component {
  state = {
    selectedDate: new Date()
  };

  onDateChange = (date: Date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            margin="normal"
            label="Date picker"
            value={this.state.selectedDate}
            onChange={this.onDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
