import data from "../TodoList";

import AddTodo from "./componant.js";

const AddTodoContainer = (props) => {
    handleAddTask(props.label)
    handleInputChange(props.label);
  return 
   ( <AddTodo
      handleAddTask={handleAddTask}
      handleInputChange={handleInputChange}
      pre="ima"
    />)
  ;
};

 const handleAddTask = (intext) => {
  var task = { id: Math.random(), name: intext, completed: false };
  data.push(task);
};

 const handleInputChange = (text) => {
    this.setState({label:text});
};
export default AddTodoContainer;
