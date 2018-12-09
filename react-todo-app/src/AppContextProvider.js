import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppContextProvider extends Component {
  // state = {
  //   todoItems: [],
  // }
  render() {
    return (
      <AppContext.Provider appContext={this.props.appContext}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContextProvider;
