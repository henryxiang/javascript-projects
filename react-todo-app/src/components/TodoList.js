import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from './TodoItem';

@inject('appContext')
@observer
class TodoList extends Component {
  render() {
    const { todoItems } = this.props.appContext;
    return (
      <ul className="todo-list">
        {todoItems.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    );
  }
}

export default TodoList;
