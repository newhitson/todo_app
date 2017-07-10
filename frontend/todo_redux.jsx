import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './clock';

class Root extends React.Component {
  render() {
    return (
      <h1>React is workng and etc!</h1>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
