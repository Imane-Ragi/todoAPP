import { Component } from 'react';

import days from '../helpers';
import App from './composant';
import todosData from './mocks';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todosData,
      dayName: days[new Date().getDay()],
    };
  }

  // addTodoTask = (todoTask) => this.setState({ todos: [...this.state.todos, todoTask] });
  addTodoTask = (todoTask) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoTask];

    this.setState({ todos: newTodos });
  };

  render() {
    return <App addTodoTask={addTodoTask} {...this.state} />;
  }
}

export default AppContainer;
