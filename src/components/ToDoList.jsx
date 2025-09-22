import React from 'react'

const ToDoList = ({todos, onDelete, toggleComplete}) => {

  return (
    <div className='todo-list'>
        {todos.map((todo) => (
            <div className='bg-purple-100 flex justify-between items-center px-2 my-2'>
                <p onClick={() => toggleComplete(todo.id)} className={`text-lg font-semibold wrap-anywhere cursor-pointer ${todo.complete? "line-through": ""}`}>{todo.name}</p>
                <button onClick={() => onDelete(todo.id)} className='bg-red-600 py-1 px-2 m-2 text-lg font-semibold border-2 rounded-full hover:bg-red-800 hover:text-white cursor-pointer'>X</button>
            </div>
        ))}
    </div>
  )
}

export default ToDoList