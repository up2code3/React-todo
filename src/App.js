import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// did this text make it to the pull request
function App() {
  const [todoList, setTodoList] = useState([]);

  // const [newTodo, setNewTodo] = useState("");
  
  const addTodo = (newTodo) => {
    setTodoList([newTodo], [...todoList])

  }
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={todoList} />
    </div>
  );
}
console.log();

export default App;



