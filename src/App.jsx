import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoActions from "./components/ToDoActions";

function App() {

  const initialTodos = localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): [];

  let [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const [todoShow, setTodoShow] = useState("all");
  
  const filteredTodos = useMemo(() => {
    if(todoShow === "active"){
      return todos.filter((todo) => !todo.complete);
    }else if(todoShow === "complete"){
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  }, [todos, todoShow]);
  
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
    setTodos((prevTodos) =>{
      const allComplete = prevTodos.every((todo) => todo.complete); 
      return prevTodos.map((todo) => {
      return {...todo, complete: !allComplete};
    })});
  }



  return (
    <>
        <div className="main-container">
          <ToDoForm addTodo={addTodo} />
          {filteredTodos.length ? (
            <ToDoList todos={filteredTodos} onDelete={onDelete} toggleComplete={toggleComplete} />
          ) : (
            <div>No Todos</div>
          )}
          <ToDoActions todos={todos} setTodoShow={setTodoShow} todoShow={todoShow} removeAllComplete={removeAllComplete} toggleAllComplete={toggleAllComplete}/>
        </div>
    </>
  );
}

export default App;