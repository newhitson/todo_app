import React from 'react';
import {uniqueId} from '../../util/util';
import merge from 'lodash/merge';


class TodoForm extends React.Component {
  constructor(props) {
     super(props);
     this.state = {title: "", body: "", done: false};
     this.handleSubmit = this.handleSubmit.bind(this);
  }
// QUESTION: why not invoke id in the state (constructor)

  update(key) {
    return (e) => (this.setState({ [key]: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = merge({}, {id: uniqueId()}, this.state);
    this.props.receiveTodo(newState);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {

    return (
      <div>
        <form>
          <label>title
          <input type="text"
                  value={this.state.title}
                  onChange={this.update("title")} /></label>
          <label> body
          <input type="text"
                  value={this.state.body}
                  onChange={this.update("body")} /></label>
                <button onClick={this.handleSubmit}
                  type="button">add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
