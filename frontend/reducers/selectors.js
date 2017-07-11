// QUESTION: where will this get called? is state passed in?

export const allTodos = (state) => {
  return Object.keys(state.todos).map((todo_id) => state.todos[todo_id]);
};

window.allTodos = allTodos;
