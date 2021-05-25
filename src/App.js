import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTodos } from "./reducer/todos/todos.actions";
import Form from "./components/form/form";
import TodoList from "./components/todos/todoList";

import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="app-container">
        <Form
          showForm={showForm}
          setShowForm={setShowForm}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        <TodoList setShowForm={setShowForm} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default App;
