import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React & Material UI Demo
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
