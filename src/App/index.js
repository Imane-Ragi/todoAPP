import { Component } from "react";
import { remove, map, find } from "ramda";

import days from "../helpers";
import App from "./componant";
import todosData from "./mocks";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData,
      dayName: days[new Date().getDay()],
      todo: {},
    };
  }

  addTodo = (todoTask) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoTask];

    this.setState({ todos: newTodos });
  };

  showTodoThatWillUpdate = (id) => {
    const { todos } = this.state;
    const todo = find((task) => task.id === id, todos);
    this.setState({ todo });
  };

  updateTodo(newLabel) {
    const { todo, todos } = this.state;
    const newsTodos = map(
      (task) =>
        task.id === todo.id ? { ...task, label: newLabel } : task,
      todos
    );
    console.log(newsTodos);
    this.setState({ todos: newsTodos, todo: {} });
  }

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

  toggleCompleted = (id) => {
    const { todos } = this.state;
    const newTodos = map(
      (task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      todos
    );

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <App
        addTodo={this.addTodo}
        {...this.state}
        deleteTodo={this.deleteTodo}
        toggleCompleted={this.toggleCompleted}
        updateTodo={this.updateTodo}
        showTodo={this.showTodoThatWillUpdate}
        todo={this.state.todo}
  
      />
    );
  }
}

export default AppContainer;
