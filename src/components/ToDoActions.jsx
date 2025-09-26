import React, { memo } from "react";

const ToDoActions = ({ todos ,setTodoShow, todoShow, removeAllComplete, toggleAllComplete }) => {
    let isAllComplete = todos.every((todo) => todo.complete);
  return (
    <>
      <div className="todo-actions-container">
        <button
          onClick={() => setTodoShow("all")}
          className={`todo-actions-btn bg-purple-600 ${
            todoShow === "all" ? "bg-purple-800" : " "
          }`}
        >
          All
        </button>
        <button
          onClick={() => setTodoShow("active")}
          className={`todo-actions-btn bg-purple-600 ${
            todoShow === "active" ? "bg-purple-800" : " "
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setTodoShow("complete")}
          className={`todo-actions-btn bg-purple-600 ${
            todoShow === "complete" ? "bg-purple-800" : " "
          }`}
        >
          Complete
        </button>
      </div>
      <div className="todo-actions-container">
        <button onClick={() => toggleAllComplete()} className={`todo-actions-btn ${isAllComplete && todos.length? "bg-purple-800": " "}`}>Toggle all complete</button>
        <button onClick={removeAllComplete} className="todo-actions-btn">Remove all complete tasks</button>
      </div>
      </>
  );
};

export default memo(ToDoActions);
