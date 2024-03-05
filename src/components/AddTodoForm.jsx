import React from "react";
import { Formik, Form, Field } from "formik";
import "./AddTodoForm.css";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../slices/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const data = {
      id: uuida(),
      ...values,
    };
    console.log(data);
    dispatch(addTodoItem);
  };
};

const AddTodoForm = () => {
  return (
    <Formik initialValues={{ description: "" }} onsubmit={submitHandler}>
      <form className="form-container">
        <div className="input-task">
          <label htmlFor="inputTask">Enter Task</label>
          <Field name="description" type="text" />
        </div>
        <button className="add-btn">Add Task</button>
      </form>
    </Formik>
  );
};

export default AddTodoForm;
