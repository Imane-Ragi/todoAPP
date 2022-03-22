import { Component } from "react";
import data from "../TodoList";
import {getGUID} from "../helpers";

import AddTodo from "./componant.js";

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };
  }

  handleAddTask = (l) => {
    const newTask = {
      id: getGUID(),
      label: this.state.label,
      completed: false,
    };
    const { addTodoTask } = this.props;
    
    this.setState({ label: "" });
    addTodoTask(newTask);
  };

  handleUpdateTask = (idt) => {
    const updatedTask = {
      label: this.state.label,
    };
    const { updateTask } = this.props;
    
    this.setState({ label: "" });
    updateTask(idt,updatedTask);
  };

  handleInputChange = ({ target: { value } }) => {
    // { target: { value } }
    // event.target.value
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    return (
      <AddTodo
        label={label}
        handleAddTask={this.handleAddTask}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default AddTodoContainer;
