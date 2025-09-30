import React, { memo } from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, onDelete, onEdit, toggleComplete }) => {
  //todos => filteredTodos

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default memo(ToDoList);
