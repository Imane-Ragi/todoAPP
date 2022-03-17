import React, { Component } from 'react';

import { LineStyle } from './style.js';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <LineStyle>
        {name}
        <i className="fa fa-check-square-o add-btn p-3" title="Complete item"></i>
        <i className="fa fa-pencil add-btn p-3" title="Update item"></i>
        <i className="fa fa-trash add-btn p-3" title="Delete item"></i>
      </LineStyle>
    );
  }
}

export default Todo;
