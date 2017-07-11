import React from 'react';
import { connect } from 'react-redux';
import {RECEIVE_TODOS, RECEIVE_TODO,
  receiveTodos, receiveTodo} from '../../actions/todo_actions';
import {allTodos}  from '../../reducers/selectors';
import TodoList from './todo_list';


const mapStateToProps = state => ({
   todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const { receiveTodo } = this.props;
this.props.receiveTodo(todo)
