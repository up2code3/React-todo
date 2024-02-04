import React,{useState} from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./mainStyle.module.css";
import PropTypes from "prop-types"


function AddTodoForm({onAddTodo}) {
  
  const [todoTitle, setTodoTitle] = useState('')
  //changed useState from [] to '' in propTypeAssinment
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
        <form onSubmit={handleAddTodo} className={style.textColor}>
          <InputWithLabel 
            id="todoTitle" 
            value={todoTitle} 
            onChange={handleTitleChange} 
            type="text"  
          > 
          Add Item
        </InputWithLabel>
          <button type="submit"> Add</button>
        </form>
          );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,  
};

export default AddTodoForm;
