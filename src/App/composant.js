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
    const { addTodoTask, todos, dayName , deleteTodo,toggleCompleted,updateTask} = this.props;

    return (
      <Wrapper className="container">
        <Title className="d-flex justify-content-center">My Todo List For {dayName}</Title>
        <div className="row d-flex justify-content-center">
          <div className='col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3'>
            <AddTodo addTodoTask={addTodoTask} updateTask={updateTask}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} updateTask={updateTask}toggleCompleted={toggleCompleted}/>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default App;
