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

  delete = () => {
    const { id, handleDeleteTask } = this.props;

    handleDeleteTask(id);
  };

  complete = () => {
    const { id, handleCompletedTask } = this.props;

    handleCompletedTask(id);

    // completed
    //   ? this.setState({ background: "white", textDecoration: "none",textColor: "black" })
    //   : this.setState({ background: "#5529dc", textDecoration: "line-through" , textColor:"white"});
  };

  render() {
    const { label, completed } = this.props;
    console.log('the list in todolist', completed);
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
            <i className="fa fa-check-square-o add-btn p-3" title="Complete item" onClick={this.complete}></i>
            <i className="fa fa-pencil add-btn p-3" title="Update item"></i>
            <i className="fa fa-trash add-btn p-3" title="Delete item" onClick={this.delete}></i>
          </div>
        </Wrapper>
      </LineStyle>
    );
  }
}

LineStyle.defaultProps = {
  background: '#fff',
};

export default Todo;
