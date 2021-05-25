import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1/" });

export const fetchAllTodos = () => API.get("/todos");
export const createTodo = (data) => API.post("/todos", data);
export const updateTodo = (data, id) => API.put(`/todos/${id}`, data);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
