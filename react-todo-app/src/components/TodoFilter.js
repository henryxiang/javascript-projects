import React from 'react';

const TodoFilter = (props) => (
  <ul className="filters">
    <li>
      <a className="selected" href="#/">All</a>
    </li>
    <li>
      <a href="#/active">Active</a>
    </li>
    <li>
      <a href="#/completed">Completed</a>
    </li>
  </ul>
);

export default TodoFilter;
