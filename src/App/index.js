import { Component } from "react";
import { remove, map, find } from "ramda";

import days from "../helpers";
import App from "./composant";
import todosData from "./mocks";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.updateTask= this.updateTask.bind(this)
    this.state = {
      todos: todosData,
      dayName: days[new Date().getDay()],
      updatedTask: {},
      isUpdate:false
    };
  }

  addTodoTask = (todoTask) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoTask];

    this.setState({ todos: newTodos });
  };

  getTaskId = (id) => {
    const { todos } = this.state;
    const updatedTask = find((task) => task.id === id, todos);
    console.log(updatedTask);
    this.setState({ updatedTask: updatedTask ,isUpdate:true});
  };

  updateTask(taskToUpdate) {
    const { updatedTask, todos } = this.state;
    const newsTodos = map(
      (task) =>
        task.id === updatedTask.id ? { ...task, label: taskToUpdate } : task,
      todos
    );
    console.log(newsTodos);
    this.setState({ todos: newsTodos, updatedTask: {} , isUpdate:false});
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

  toggleCompleted = (ident) => {
    const { todos } = this.state;
    const newTodos = map(
      (task) =>
        task.id === ident ? { ...task, completed: !task.completed } : task,
      todos
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
        updateTask={this.updateTask}
        getTaskId={this.getTaskId}
        task = {this.state.updatedTask}
        isUpdate= { this.state.isUpdate}
      />
    );
  }
}

export default AppContainer;
