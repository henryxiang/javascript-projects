import React from 'react';
import TodoInput from './TodoInput';

const Header = ({ title, appContext }) => (
  <div className="header">
    <h1>{title}</h1>
    <TodoInput />
  </div>
)

export default Header;
