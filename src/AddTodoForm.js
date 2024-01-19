import React,{useState} from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./mainStyle.module.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function AddTodoForm({onAddTodo}) {
  
  const [todoTitle, setTodoTitle] = useState([])
  
  const handleTitleChange = (event) => {
    event.preventDefault();
    
    let newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    
   
    onAddTodo({title:todoTitle,id:Date.now()})

    setTodoTitle('')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={
        <form onSubmit={handleAddTodo} className={style.textColor}>
          <InputWithLabel 
            id="todoTitle" 
            value={todoTitle} 
            onChange={handleTitleChange} 
            type="text"  
          > 
          Title
        </InputWithLabel>
          <button type="submit"> Add</button>
        </form>
        }
        />
        <Route
        path="/new"
        element={
          <>
          <h1>BackBurner</h1>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AddTodoForm;
