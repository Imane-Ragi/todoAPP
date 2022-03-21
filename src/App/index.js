import { Component } from 'react';
import { remove } from 'ramda';

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

  addTodoTask = (todoTask) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoTask];

    this.setState({ todos: newTodos });
  };

  deleteTodo = (ident) => {
    const { todos } = this.state;
    const index = todos.findIndex((item) => item.id === ident);
    const newTodos = remove(index, 1, todos);

    this.setState({ todos: newTodos });
  };

  // toggleCompleted = (ident) => {
  //   const { todos } = this.state;
  //   const taskToUpdate = todos.find((item) => item.id === ident);

  //   taskToUpdate.completed = !taskToUpdate.completed;
  //   this.setState({
  //     todos: todos.map((task) => (task.id === ident ? taskToUpdate : task)),
  //   });
  //   console.log(todos);
  // };

  toggleCompleted = (ident) => {
    const { todos } = this.state;
    const newTodos = map(
      (task) => (task.id === ident ? { ...task, completed: !task.completed } : task),
      todos,
    );

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <App
        addTodoTask={this.addTodoTask}
        {...this.state}
        deleteTodo={this.deleteTodo}
        toggleCompleted={this.toggleCompleted}
      />
    );
  }
}

export default AppContainer;
