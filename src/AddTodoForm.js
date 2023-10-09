import React from "react";

function AddTodoForm() {
  return (
    <form>
      <label htmlfor="todoTitle">Title </label>
      <input id="todoTitle"></input>
      <submit> Add</submit>
    </form>
  );
}

export default AddTodoForm;
