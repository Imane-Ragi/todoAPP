import React, { Component } from "react";
import { TableStyle, LineStyle } from "./style.js";
class Todo extends Component {
  render() {
    return (
            <LineStyle>
              {this.props.name}
              <i
                className="fa fa-check-square-o add-btn p-3"
                title="Complete item"
              ></i>
              <i className="fa fa-pencil add-btn p-3" title="Update item"></i>
              <i className="fa fa-trash add-btn p-3" title="Delete item"></i>
            </LineStyle>
    )
  }
}

export default Todo;
