import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { item, removeTodo } = this.props;
    const { title, body, done } = item;

    return (
      <div key={item.id}>
        <li>{title} {body}</li>
        <button onClick={() => {removeTodo(this.props);}}>
          Delete!</button>
        <button onClick={() => { this.props.done = !this.props.done; } }>
          { (this.props.done) ? "Undo" : "Done" } </button>
      </div>
    );
  }
}
