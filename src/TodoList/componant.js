import React, { Component } from "react";
import { TableStyle } from "./style.js";
import data from "./index.js";
import Todo from "../Todo/component.js";
class TodoList extends Component {
  render() {
    return (
         <TableStyle>
        {data.map((dt) => (
          <Todo name={dt.name}  key={dt.id}/>))}
        </TableStyle>
     
    );
  }
}

export default TodoList;
