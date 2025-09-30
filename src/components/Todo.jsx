import { useEffect, useRef, useState } from "react";

const Todo = ({ todo, onDelete, onEdit, toggleComplete }) => {
  const inputRef = useRef(null);

  // edit value from input field
  let [editValue, setEditValue] = useState("");

  // state of showing the input field of editing
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    if (handleShow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [handleShow]);

  // showing the input field when clicking on E button
  const handleEditButton = () => {
    setEditValue(todo.name);
    setHandleShow(!handleShow);
  };

  // editing todo value when submitting
  const handleSubmit = (e, id) => {
    e.preventDefault();
    onEdit(id, editValue);
    setEditValue("");
    setHandleShow(false);
  };

  return (
    <div className="todo">
      <div>
        {handleShow ? (
          <form onSubmit={(e) => handleSubmit(e, todo.id)}>
            <input
              ref={inputRef}
              className="edit-todo-input"
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </form>
        ) : (
          <p
            onClick={() => toggleComplete(todo.id)}
            className={`todo-name ${todo.complete ? "line-through" : ""}`}
          >
            {todo.name}
          </p>
        )}
      </div>
      <div className="todo-btn-container">
        <button onClick={handleEditButton} className="edit-todo-btn">
          E
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-todo-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
