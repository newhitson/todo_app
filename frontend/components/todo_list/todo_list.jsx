import React from 'react';
import TodoForm from './todo_form';


const TodoList = ({ todos, receiveTodo, removeTodo }) => (
  <div>
    <ul>
      {todos.map(item => (
        <div key={item.id}>
          <li>{item.title} {item.body}</li>
          <button onClick={() => {removeTodo(item);}}>Delete!</button>
          </div>
      ))}
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
