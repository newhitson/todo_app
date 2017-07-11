import React from 'react';

const TodoList = ({ todos, receiveTodo }) => (
  <ul>
    {todos.map((item, idx) => <li id={idx} item={item}>{item.title}</li>)}
  </ul>
);

export default TodoList;
