import React from "react";
import Todo from "./Todo";
import "./TodoItems.css";
import { useSelector } from "react-redux";

const TodoItems = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="tasks-container">
      {todos.map((todoItem) => {
        return <Todo key={todoItem.id} description={todoItem.description} />;
      })}
    </div>
  );
};

export default TodoItems;
