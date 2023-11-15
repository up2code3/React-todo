import React,{useState} from "react";
import InputWithLabel from "./InputWithLabel";

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
    <form onSubmit={handleAddTodo}>
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
  );
}

export default AddTodoForm;
