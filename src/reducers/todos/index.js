import { ADD_TODO, DELETE_TODO } from './actions';

const intitialState = {
  todos: [],
};

const todosReducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      const { todos } = state;

      return { ...state, todos: [payload.todo, ...todos] };
    }

    // case DELETE_TODO: {
    // }

    default: {
      return state;
    }
  }

  // if( type === ADD_TODO)
};

export default todosReducer;
