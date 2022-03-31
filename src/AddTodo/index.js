import { Component } from 'react';
import { connect } from 'react-redux';
import { eqProps } from 'ramda';


import { getGUID } from '../helpers';
import { addTodoAction ,updateTodoAction} from '../reducers/todos/actions';

import AddTodo from './componant.js';

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleActions = this.handleActions.bind(this);
    this.state = {
      label: '',
    };
  }

   componentWillReceiveProps(nextProps) {
     const { todoTobeUpdated } = nextProps.todos;
     console.log( nextProps)
     const label = todoTobeUpdated.id !== null && todoTobeUpdated.id !== undefined?todoTobeUpdated.label:'';
        this.setState({ label })
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

  handleUpdateTask = () => {
    const { updateTodoAction } = this.props;
    const updatedTask = {
      label: this.state.label
    };
    updateTodoAction(updatedTask)
    this.setState({ label: '' });
  };

  handleActions() {
    const { todoTobeUpdated } = this.props.todos;
    console.log(todoTobeUpdated)
    if(todoTobeUpdated?.id != null )  this.handleUpdateTask(); else this.handleAddTask();
    
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ label: value });
  };

  render() {
    const { label } = this.state;
    const { isUpdate } = this.props;

    return (
      <AddTodo
        label={label}
        handleInputChange={this.handleInputChange}
        handleActions={this.handleActions}
        isUpdate = {isUpdate}
    
      />
    );
  }
}

const mapStateToProps = (store) => ({
  //todo: store.todo,
  todos: store.todos,
  isUpdate : store.todos.isUpdate
});

const mapDispatch = {
  addTodoAction,
  updateTodoAction
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(AddTodoContainer);
