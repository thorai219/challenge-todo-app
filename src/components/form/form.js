import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Icon from "react-bootstrap-icons";
import { Modal, ModalBody } from "react-bootstrap";
import { createTodo, updateTodo } from "../../reducer/todos/todos.actions";
import "./form.css";

const initialFormData = {
  title: "",
  body: "",
  completed: false,
};

const Form = ({ currentId, setCurrentId, showForm, setShowForm }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const todo = useSelector((state) =>
    currentId ? state.todos.find((todo) => todo._id === currentId) : null
  );

  useEffect(() => {
    if (todo) setFormData(todo);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (currentId) {
      dispatch(updateTodo(formData, currentId));
    } else {
      dispatch(createTodo(formData));
    }
    setCurrentId(null);
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handleModalOpen = () => setShowForm(true);
  const handleModalClose = () => {
    setCurrentId(null);
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <>
      <Icon.PlusCircle onClick={handleModalOpen} size={50} className="m-4" />
      <Modal show={showForm} onHide={handleModalClose}>
        <ModalBody>
          <h3>Please enter todo info</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="body" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Form;
