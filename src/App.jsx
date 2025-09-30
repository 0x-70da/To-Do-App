import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoActions from "./components/ToDoActions";

function App() {
  //local storage
  const initialTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  //global state
  let [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // all - active - complete state
  const [todoShow, setTodoShow] = useState("all");

  // saving filterd todos in variable instead of manipulating the global todos state directly
  const filteredTodos = useMemo(() => {
    if (todoShow === "active") {
      return todos.filter((todo) => !todo.complete);
    } else if (todoShow === "complete") {
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  }, [todos, todoShow]);

  // edit todo function
  const editTodo = (id, val) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: val };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  // add new todo function
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  // delete todo function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // toggle single todo complete function
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  // remove all completed todos function
  const removeAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  // toggle all todos complete function
  const toggleAllComplete = () => {
    setTodos((prevTodos) => {
      const allComplete = prevTodos.every((todo) => todo.complete);
      return prevTodos.map((todo) => {
        return { ...todo, complete: !allComplete };
      });
    });
  };

  return (
    <>
      <div className="main-container">
        <ToDoForm addTodo={addTodo} />
        {filteredTodos.length ? (
          <ToDoList
            todos={filteredTodos}
            onDelete={deleteTodo}
            onEdit={editTodo}
            toggleComplete={toggleComplete}
          />
        ) : (
          <div>No Todos</div>
        )}
        <ToDoActions
          todos={todos}
          setTodoShow={setTodoShow}
          todoShow={todoShow}
          removeAllComplete={removeAllComplete}
          toggleAllComplete={toggleAllComplete}
        />
      </div>
    </>
  );
}
export default App;
