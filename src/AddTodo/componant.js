import React, { Component } from "react";
import { Wrapper } from "./style.js";
export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { label: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const lbl = this.state.label;
    return (
      <Wrapper className="form-group has-feedback d-flex flex-row ">
        <input
          type="text"
          className="form-control p-2"
          placeholder="✍️ Add Task.."
          value={this.props.pre}
          onChange={this.handleChange}
        />
        <button
          className="fa fa-plus add-btn p-3"
          title="Add item"
          onClick={this.props.handleAddTask}
        ></button>
      </Wrapper>
    );
  }
  handleChange(e) {
    this.setState({ label: e.target.value });
  }
}

export default AddTodo;
