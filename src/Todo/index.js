import React, { Component } from 'react';

import { LineStyle, Wrapper } from './style.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   background: 'white',
    //   textDecoration: 'none',
    //   textColor: 'black',
    // };
  }


  render() {
    const { label, completed ,showTodo ,id, handleCompletedTask, handleDeleteTask} = this.props;
    return (
      <LineStyle
        completed={completed}
        // background={this.state.background}
        // textDecoration={this.state.textDecoration}
        // textColor={this.state.textColor}
      >
        <Wrapper className="col-12">
          <div className="col-4">{label}</div>

          <div className="col-8">
            <i className="fa fa-check-square-o add-btn p-3" title="Complete item" onClick={() => handleCompletedTask(id)}></i>
            <i className="fa fa-pencil add-btn p-3" title="Update item" onClick={() => showTodo(id)}></i>
            <i className="fa fa-trash add-btn p-3" title="Delete item" onClick={() => handleDeleteTask(id)}></i>
          </div>
        </Wrapper>
      </LineStyle>
    );
  }
}

export default Todo;
