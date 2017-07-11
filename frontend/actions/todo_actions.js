export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos

  // return a new state that has gone thought the new state
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
    todo
});

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

// id, title, body, done
// id,
// title,
// body,
// done
