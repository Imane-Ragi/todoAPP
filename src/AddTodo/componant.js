import React, { Component } from 'react';

import { Wrapper } from './style.js';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, handleActions, handleInputChange: handleChange ,isUpdate} = this.props;

    return (
      <Wrapper className="form-group has-feedback d-flex flex-row ">
        <input
          type="text"
          className="form-control p-2"
          placeholder="✍️ Add Task.."
          value={label}
          onChange={handleChange}
        />
        <button className={isUpdate?'fa fa-pencil add-btn p-3':'fa fa-plus add-btn p-3'} title="Add item" onClick={handleActions}></button>
      </Wrapper>
    );
  }
}

export default AddTodo;
