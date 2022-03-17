import React, { Component } from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTodo from '../AddTodo';
import { Wrapper, Title } from './style.js';
import TodoList from '../TodoList';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addTodoTask, todos, dayName } = this.props;

    return (
      <Wrapper>
        <Title className="d-flex justify-content-center">My Todo List For {dayName}</Title>
        <div className="row d-flex justify-content-center">
          <div>
            <AddTodo addTodoTask={addTodoTask} />
            <TodoList todos={todos} />
          </div>
        </div>
      </Wrapper>
    );
  }

  getList() {}
}
export default App;
