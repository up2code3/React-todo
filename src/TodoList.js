import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map(function (item) {
        return (
          
            <TodoListItem  key={item.id} todo={item} complete={item.complete}/> 
          
        );
      })}
    </ul>
  );
};

export default TodoList;
