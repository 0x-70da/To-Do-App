import { useState } from "react"
import shortid from 'shortid'

const ToDoForm = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({id:shortid.generate(), name:text, complete:false});
        setText("");
    }
  return (
    <div className="todo-form">
        <form action="" onSubmit={handleSubmit}>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Add to do..." className="bg-gray-200 py-1 px-2"/>
            <button onClick={handleSubmit} className="py-1 px-2 bg-purple-600 m-2 text-lg text-gray-50 font-semibold border-2 rounded-md hover:bg-purple-900 cursor-pointer">Add</button>
        </form>
    </div>
  )
}

export default ToDoForm