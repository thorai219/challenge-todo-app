import {
  ALL_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
} from "./todos.types";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ALL_TODOS:
      return [...state, ...action.todos];
    case CREATE_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.todo._id ? action.todo : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo._id !== action.id);
    default:
      return state;
  }
};
