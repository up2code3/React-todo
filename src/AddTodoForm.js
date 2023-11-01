import React from "react";

function AddTodoForm(props) {
 
  const handleAddTodo = (event) => {
    event.preventDefault();
    
    let todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle)
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Title </label>
      <input type="text" id="todoTitle" name="title"></input>
      <button type="submit"> Add</button>
    </form>
  );
}

export default AddTodoForm;
