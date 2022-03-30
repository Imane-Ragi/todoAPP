import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./actions";
import { remove, map, findIndex, propEq } from "ramda";

const intitialState = {
  todos: [
    { id: 1258, label: 'Formation React', completed: false },
    { id: 333, label: 'Prep for certif', completed: false },
  ],
  todoTobeUpdated :{}
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
    case UPDATE_TODO: {
      const { todos,todoTobeUpdated } = state;
      map(
        (task) =>
          task.id === payload.updatedTodo.id ? {todoTobeUpdated: payload.updatedTodo}  : undefined,
        todos
      )
      const newTodos = map(
        (task) =>
          task.id === payload.id ? payload : task,
        todos
      );
      return { ...state, todos: newTodos };
    }

    default: {
      return state;
    }
  }

  // if( type === ADD_TODO)
};

export default todosReducer;
