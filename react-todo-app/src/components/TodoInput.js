import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appContext')
@observer 
class TodoInput extends Component {
  onSubmit = (event) => {
    const { appContext } = this.props;
    event.preventDefault();
    console.log(this.input.value);
    appContext.addTodo(this.input.value);
    this.input.value = '';
  }

  render() {
    const { placeholder = 'What to do next?' } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder={placeholder} autoFocus 
          ref={(element) => {this.input = element}} />
      </form>
    )
    
  }
}

export default TodoInput;
