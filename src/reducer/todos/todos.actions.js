import * as API from "../../api";
import {
  ALL_TODOS,
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "./todos.types";

export const fetchAllTodos = () => async (dispatch) => {
  try {
    const response = await API.fetchAllTodos();
    const { todos } = response.data;

    dispatch({ type: ALL_TODOS, todos });
  } catch (err) {
    console.error("error", err);
  }
};

export const createTodo = (data) => async (dispatch) => {
  try {
    const { data: todo } = await API.createTodo(data);
    dispatch({ type: CREATE_TODO, todo });
  } catch (err) {
    console.error("error", err);
  }
};

export const updateTodo = (data, id) => async (dispatch) => {
  try {
    const { data: todo } = await API.updateTodo(data, id);

    dispatch({ type: UPDATE_TODO, todo });
  } catch (err) {
    console.log("error", err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await API.deleteTodo(id);
    dispatch({ type: REMOVE_TODO, id });
  } catch (err) {
    console.log("error", err);
  }
};
