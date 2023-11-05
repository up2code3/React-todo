import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  // const [newTodo, setNewTodo] = useState("");
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])

  }
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={addTodo}  />
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={todoList} />
    </div>
  );
}


console.log();

export default App;



