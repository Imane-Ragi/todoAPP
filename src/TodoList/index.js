import React, { Component } from 'react';

import { TableStyle } from './style.js';
import Todo from '../Todo/component.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <TableStyle>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </TableStyle>
    );
  }
}

export default TodoList;
