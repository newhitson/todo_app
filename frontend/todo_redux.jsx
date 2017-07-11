import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import Root from './components/root';

// class Root extends React.Component {
//   render() {
//     return (
//       <h1>React is workng and etc!</h1>
//     );
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});
