import { ADD_TODO, DELETE_TODO, UPDATE_TODO,SHOW_TODO,TOGGLE_COMPLETED} from "./actions";
import { remove, map, findIndex, propEq,find } from "ramda";

const intitialState = {
  todos: [
    { id: 1258, label: 'Formation React', completed: false },
    { id: 333, label: 'Prep for certif', completed: false },
  ],
  todoTobeUpdated : {},
  isUpdate : false
};

const todosReducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      const { todos } = state;
      return { ...state, todos: [payload.todo, ...todos] };
    }

    case DELETE_TODO: {
      const { todos } = state;
      const index = findIndex(propEq("id", payload.id))(todos);
      const newTodos = remove(index, 1, todos);
      return { ...state, todos: newTodos };
    }
    case SHOW_TODO: {
      const { todos } = state;
      return { ...state, todoTobeUpdated: find(propEq("id", payload.id))(todos),isUpdate: true };
    }
    case UPDATE_TODO: {
      const { todos , todoTobeUpdated } = state;
      const { updatedTodo} = payload;
      const newTodos = map(
        (task) =>
          task.id === todoTobeUpdated.id ? { ...task, label: updatedTodo.label }  : task,
        todos
      );
      return { ...state, todos: newTodos, todoTobeUpdated:{} , isUpdate: false};
    }
    case TOGGLE_COMPLETED: {
      const { todos } = state;
      const newTodos = map(
        (task) =>
          task.id === payload.id ? { ...task, completed: !task.completed }  : task,
        todos
      );
      return { ...state, todos: newTodos};
    }

    default: {
      return state;
    }
  }

  // if( type === ADD_TODO)
};

export default todosReducer;
