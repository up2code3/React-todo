import React from "react";


const TodoListItem = (props) => {
return(
    <li> {props.todo.title} {props.complete} </li>
)
};

export default TodoListItem;
