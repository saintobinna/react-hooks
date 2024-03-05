import React from "react";
import "./TodoContainer.css";
import AddTodoForm from "./AddTodoForm";
import TodoItems from "./TodoItems";

const TodoContainer = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>To-Do List</h1>
        <AddTodoForm />
        <TodoItems />
      </div>
    </div>
  );
};

export default TodoContainer;
