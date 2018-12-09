import React, { Component } from 'react';

class TodoItem extends Component {
  state = {
    id: null,
    name: null,
    completed: false,
    mode: 'view',
  }

  constructor(props) {
    super(props);
    const { id, name, completed } = this.props.todo;
    this.state = { id, name, completed };
  }

  render() {
    const { name, completed, mode } = this.props.todo;
    const liClassName = completed ? "completed" : "";
    let content = (
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{name}</label>
        <button className="destroy"></button>
      </div>
    );
    if (mode === 'edit') {
      content = <input className="edit" value={name} />
    }

    return <li className={liClassName}>{content}</li>;
  }
}

export default TodoItem;
