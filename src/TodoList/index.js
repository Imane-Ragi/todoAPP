import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableStyle } from './style.js';
import Todo from '../Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    const { todos } = this.props.todos
   console.log(this.props.todos);
    return (
      <TableStyle>
        {todos.map((todo) => (
          <Todo
            {...todo}
            key={todo.id}
          
          />
        ))}
        </TableStyle>
    );
  }
}

const mapStateToProps = (store) => ({
  //todo: store.todo,
  todos: store.todos,
});


const connector = connect(mapStateToProps);

export default connector(TodoList);
