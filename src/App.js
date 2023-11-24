import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";


function App() {
  
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => { 
    
    const sideEffectPromise = new Promise((resolve, reject) => { 
      setTimeout(() => {   
        console.log("sideEffect ran after initial render with 2 sec delay")
        resolve({ data: {
          todoList:JSON.parse(localStorage.getItem("savedTodoList")) || []
          }
        })   
      },2000); 
    }); 
      
    sideEffectPromise.then((todoListResult) => {
      
      console.log("promise results", todoListResult)
      
      const {todoList} = todoListResult.data  //extracts data
      
      setTodoList(todoList)  //sets state to the todoList from todoListResult.data extraction
      
      setIsLoading(false)

    })

  }, []);

  React.useEffect(() => {
    if (!isLoading){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

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
      {isLoading ? 
        (<p>Loading...</p>)
        :
        (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)
      }
    </>
  );
}

console.log();

export default App;
