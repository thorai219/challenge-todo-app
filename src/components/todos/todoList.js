import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";
import "./todos.css";

const TodoList = ({ setCurrentId, setShowForm }) => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="todolist">
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo._id}
            setShowForm={setShowForm}
            todo={todo}
            setCurrentId={setCurrentId}
          />
        ))
      ) : (
        <h3>Please create a todo to see a list of them</h3>
      )}
    </div>
  );
};

export default TodoList;
