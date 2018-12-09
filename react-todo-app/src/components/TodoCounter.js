import React from 'react';

const TodoCounter = ({ count = 0 }) => <span className="todo-count"><strong>{count}s</strong> item left</span>

export default TodoCounter;
