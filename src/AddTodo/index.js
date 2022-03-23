import { Component } from "react";
import data from "../TodoList";
import {getGUID} from "../helpers";

import AddTodo from "./componant.js";

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleActions= this.handleActions.bind(this)
    this.state = {
      label: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { task } = nextProps;
    (task.id!== null && task.id !== undefined )?this.setState({label:task.label}):this.setState({label:""})
    console.log(task);
  }
  
  handleAddTask = () => {
    const newTask = {
      id: getGUID(),
      label: this.state.label,
      completed: false,
    };
    const { addTodoTask } = this.props;
    
    this.setState({ label: "" });
    addTodoTask(newTask);
  };

  handleUpdateTask = () => {
    const { updateTask } = this.props;
    console.log(updateTask)
    updateTask(this.state.label);
    this.setState({ label: "" });
  };

  handleActions() {
    const { task } = this.props;
     if (task.id !==  null)
     
       this.handleUpdateTask();
      else this.handleAddTask();

  }
  handleInputChange = ({ target: { value } }) => {
    // { target: { value } }
    // event.target.value
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    const { isUpdate ,task} = this.props;
    return (
      <AddTodo
        label={label}
        handleInputChange={this.handleInputChange}
        handleActions={this.handleActions}
        isUpdate={isUpdate}
        task={task}
      />
    );
  }
}

export default AddTodoContainer;
