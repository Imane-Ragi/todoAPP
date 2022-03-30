export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: { todo } });

export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: { id } });

export const updateTodoAction = (updatedTodo) => ({ type: UPDATE_TODO, payload: { updatedTodo } });

export const toggleCompletedAction = (updatedTodo) => ({ type: TOGGLE_COMPLETED, payload: { updatedTodo } });
