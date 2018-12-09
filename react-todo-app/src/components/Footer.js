import React from 'react';
import TodoCounter from './TodoCounter';
import TodoFilter from './TodoFilter';

const Footer = (props) => (
  <div className="footer">
    <TodoCounter count={0} />
    <TodoFilter />
    <button className="clear-completed">Clear completed</button>
  </div>
);

export default Footer;
