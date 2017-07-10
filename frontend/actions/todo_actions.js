export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos

  // return a new state that has gone thought the new state
});

export const receiveTodo = (title, body,done) => ({
  type: RECEIVE_TODO,
  title,
  body,
  done
});
