import React from "react";
import { useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import moment from "moment";
import { deleteTodo, updateTodo } from "../../reducer/todos/todos.actions";

const Todo = ({ todo, setCurrentId, setShowForm }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    setShowForm(true);
    setCurrentId(todo._id);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const handleComplete = () => {
    todo.completed = true;
    dispatch(updateTodo(todo, todo._id));
  };

  return (
    <div className="card m-4">
      <div className="card-header space-between">
        <p className="h4">{todo.completed ? "completed" : "in progress..."}</p>
        {todo.completed ? (
          <Icon.XSquare
            size={35}
            className="card-icons remove"
            onClick={handleDelete}
          />
        ) : (
          <div>
            <Icon.CheckSquare
              size={35}
              className="card-icons check"
              onClick={handleComplete}
            />
            <Icon.PencilSquare
              size={35}
              className="card-icons edit"
              onClick={handleEdit}
            />
          </div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{todo.title}</h3>
        <hr />
        <h4 className="card-text">{todo.body}</h4>
        <p>
          <em>{moment(todo.updatedAt).fromNow()}</em>
        </p>
      </div>
    </div>
  );
};

export default Todo;
