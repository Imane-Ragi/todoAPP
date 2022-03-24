import { Component } from "react";
import { getGUID } from "../helpers";

import AddTodo from "./componant.js";

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleActions = this.handleActions.bind(this);
    this.state = {
      label: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    const { todo } = nextProps;
    
    const label = todo.id !== null && todo.id !== undefined?todo.label:'';
       this.setState({ label })
  }

  handleAddTask = () => {
    const newTask = {
      id: getGUID(),
      label: this.state.label,
      completed: false,
    };
    const { addTodo } = this.props;

    this.setState({ label: "" });
    addTodo(newTask);
  };

  handleUpdateTask = () => {
    const { updateTodo } = this.props;
    const { label } = this.state;
    updateTodo(label);
    this.setState({ label: "" });
  };

  handleActions() {
    const { todo } = this.props;
    if ( todo.id !== null && todo.id !== undefined) this.handleUpdateTask();
    else this.handleAddTask();
  }
  handleInputChange = ({ target: { value } }) => {
    // { target: { value } }
    // event.target.value
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    const { todo } = this.props;
    return (
      <AddTodo
        label={label}
        handleInputChange={this.handleInputChange}
        handleActions={this.handleActions}
        isUpdate={todo.id !== null && todo.id !== undefined}
        todo={todo}
      />
    );
  }
}

export default AddTodoContainer;
