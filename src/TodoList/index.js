import React, { Component } from 'react';

import { TableStyle } from './style.js';
import Todo from '../Todo';
import {useSelector} from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
 
  }


  render() {
    const { todos,deleteTodo,toggleCompleted,showTodo } = this.props
    console.log(tasks)
    return (
      <TableStyle>
        {tasks.map((todo) => (
          <Todo
            handleDeleteTask={deleteTodo}
            handleCompletedTask={toggleCompleted}
            {...todo}
            key={todo.id}
            showTodo={showTodo}
          />
        ))}
      </TableStyle>
    );
  }
}

export default TodoList;
