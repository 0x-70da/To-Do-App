import { memo, useState } from "react";
import shortid from "shortid";

const ToDoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: shortid.generate(), name: text, complete: false });
    setText("");
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Add to do..."
          className="bg-gray-200 py-1 px-2"
        />
        <button onClick={handleSubmit} className="add-todo-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default memo(ToDoForm);
