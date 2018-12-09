import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

// @inject('appContext')
// @observer 
class App extends Component {
  render() {
    // const { todoItems } = this.props.appContext;
    return (
      <div className="todoapp">
        <Header title="todo" />
        <div className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" onClick={() => console.log('toggle-all')} />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
