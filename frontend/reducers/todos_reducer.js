import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';
import union from 'lodash/union';

const todoReducer = (state = {}, action) => {
Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      return {todos: action.todos};
    case RECEIVE_TODO:
       return merge ({
         title : action.title,
         body : action.body,
         done : action.done  
      }, state

    default:
      return state;


  }


}
