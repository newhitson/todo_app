import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';


class App extends React.Component {
  constuctor() {
    // super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the App component rendered!</h1>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
