import React, { Component } from "react";
import AddTodo from "../AddTodo/componant.js";
import { Wrapper, Title, Div } from "./style.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import TodoList from "../TodoList/componant.js";
import data from "../TodoList";
export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <Title className="d-flex justify-content-center">
          My Todo List For {this.props.date}
        </Title>
        <div className="row d-flex justify-content-center">
          <div>
          <AddTodo />
          <TodoList />
          </div>
        </div>
      </Wrapper>
    );
  }

  getList() {}
}
export default App;
