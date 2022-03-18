import { Component } from "react";
import {remove} from "ramda";

import days from "../helpers";
import App from "./composant";
import todosData from "./mocks";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todosData,
      dayName: days[new Date().getDay()]
    };
  }

  // addTodoTask = (todoTask) => this.setState({ todos: [...this.state.todos, todoTask] });
  addTodoTask = (todoTask) => {
    const { todos } = this.state;
    const newTodos = [...todos, todoTask];
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  deleteTodo = (ident) => {
   
    const { todos} = this.state;
    const index = todos.findIndex(item => item.id === ident);
   const newTodos =  remove(index,1,todos);
   console.log("the index is")
    this.setState({ todos: newTodos });
  };

  toggleCompleted = (ident) => {
    const { todos} = this.state;
    const taskToUpdate = todos.find(item => item.id === ident);
    taskToUpdate.completed = !taskToUpdate.completed;
     this.setState( {
     todos: todos.map(task => task.id === ident?taskToUpdate:task)
     }); 
     console.log(todos) 
  };

  render() {

    return <App addTodoTask={this.addTodoTask} {...this.state} deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted} />;
  }
}

export default AppContainer;
