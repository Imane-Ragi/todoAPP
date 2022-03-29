import { configureStore, createSlice } from '@reduxjs/toolkit';
import { remove, map, find } from "ramda";


export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1258, label: 'Formation react', completed: false },
    { id: 333, label: 'Prep for certif', completed: false }
  ],

  reducers: {
    addTodo: (state,action) => {
      // {type: "todos/addTodo",payload : "new Task"}
      const newTodo = action.payload;
      state.push(newTodo)
    },
    updateTodo: (state,action) => {
       // {type: "todos/updateTodo",payload : "{newLabel,id}"}

       const todo = find((task) => task.id === action.payload.id, state);
       state = map(
        (task) =>
          task.id === todo.id ? { ...task, label: action.payload.newLabel } : task,
        state
      );
         return state;
    },
    deleteTodo: (state,action) => {

       // {type: "todos/deleteTodo",payload : "{id}"}

       const index = state.findIndex((item) => item.id === action.payload);
       state = remove(index, 1, state);
       return state 
    },
    toggleCompleted: (state,action) => {
      // {type: "todos/toggleCompleted",payload : "{id}"}
      state = map(
        (task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task,
        state
      );
      return state 
    },
  },
});


export const {addTodo,updateTodo,deleteTodotoggleCompleted } = todosSlice.actions;
export const store = configureStore({
  reducer:{
    todos: todosSlice.reducer
  }
})