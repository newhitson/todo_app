// QUESTION: do we need to have the actions imported too?

import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

 const todoReducer = (sliceOfState = {}, action) => {
  Object.freeze(sliceOfState);

  switch(action.type) {
    case RECEIVE_TODOS:
    const newState = {};
      action.todos.forEach(todo => {newState[todo.id] = todo; });
      return newState;
    case RECEIVE_TODO:
      return merge (
        {},
        {[action.todo.id]: action.todo}, sliceOfState);
    case REMOVE_TODO:
      const removedState = merge ({}, sliceOfState);
      delete removedState[action.todo.id];
      return removedState;
    default:
      return sliceOfState;
  }
};

export default todoReducer;
