import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoActions from "./components/ToDoActions";

function App() {
  let [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [todoShow, setTodoShow] = useState("all");

  if(todoShow === "active"){
    todos = todos.filter((todo) => !todo.complete);
  }else if(todoShow === "complete"){
    todos = todos.filter((todo) => todo.complete);
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if(todo.id === id){
        return {...todo, complete: !todo.complete};
      }else{
        return todo;
      }
    }));
  }

  const removeAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  const toggleAllComplete = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      return {...todo, complete: !todo.complete};
    }));
  }


  return (
    <>
        <div className="main-container">
          <ToDoForm addTodo={addTodo} />
          {todos.length ? (
            <ToDoList todos={todos} onDelete={onDelete} toggleComplete={toggleComplete} />
          ) : (
            <div>No Todos</div>
          )}
          <ToDoActions todos={todos} setTodoShow={setTodoShow} todoShow={todoShow} removeAllComplete={removeAllComplete} toggleAllComplete={toggleAllComplete}/>
        </div>
    </>
  );
}

export default App;
