import React, { Component } from 'react';

import { TableStyle } from './style.js';
import Todo from '../Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  handleDeleteTask = (item) => {
    const { deleteTodo } = this.props;

    deleteTodo(item);
  };

  handleCompletedTask = (item) => {
    const { toggleCompleted } = this.props;

    toggleCompleted(item);
  };

  
  handleUpdateTask = (idt,newTask) => {
    const { updateTask } = this.props;

    updateTask(idt,newTask);
  };

  render() {
    const { todos } = this.props;

    return (
      <TableStyle>
        {todos.map((todo) => (
          <Todo
            handleDeleteTask={this.handleDeleteTask}
            handleCompletedTask={this.handleCompletedTask}
            handleUpdateTask={this.handleUpdateTask}
            {...todo}
            key={todo.id}
          />
        ))}
      </TableStyle>
    );
  }
}

export default TodoList;
