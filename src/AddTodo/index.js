import { Component } from 'react';
import { connect } from 'react-redux';
import { getGUID } from '../helpers';
import { addTodoAction } from '../reducers/todos/actions';

import AddTodo from './componant.js';

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleActions = this.handleActions.bind(this);
    this.state = {
      label: '',
    };
  }

  handleAddTask = () => {
    const newTask = {
      id: getGUID(),
      label: this.state.label,
      completed: false,
    };
    const { addTodoAction: addTodoActionProp } = this.props;

    this.setState({ label: '' });
    addTodoActionProp(newTask);
    // dispatch(addTodoAction(newTask));
  };

  handleActions() {}

  handleInputChange = ({ target: { value } }) => {
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    const { todo } = this.props;

    return (
      <AddTodo
        label={label}
        handleInputChange={this.handleInputChange}
        handleActions={this.handleActions}
        handleAddTask={this.handleAddTask}
    
      />
    );
  }
}

const mapStateToProps = (store) => ({
  //todo: store.todo,
  todos: store.todos,
  todoTobeUpdated : store.todoTobeUpdated
});

const mapDispatch = {
  addTodoAction
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(AddTodoContainer);
