import { Component } from 'react';
import data from '../TodoList';

import AddTodo from './componant.js';

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  handleAddTask = (label) => {
    const newTask = { id: Math.random(), label, completed: false };
    const { addTodoTask } = this.props;

    addTodoTask(newTask);
  };

  handleInputChange = ({ target: { value } }) => {
    // { target: { value } }
    // event.target.value
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    return <AddTodo label={label} handleAddTask={handleAddTask} handleInputChange={handleInputChange} />;
  }
}

export default AddTodoContainer;
