import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

  const useSemiPersistentState = () => {

    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem("savedTodoList")) || []
    );
  
    React.useEffect(() => {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

    return [todoList, setTodoList]
}

function App() {
  
  
  const [todoList, setTodoList] = useSemiPersistentState();


  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }
  
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  
  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

console.log();

export default App;
