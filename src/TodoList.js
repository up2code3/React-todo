import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          
            <TodoListItem
            onRemoveTodo={onRemoveTodo} 
            key={item.id} 
            todo={item} 
            /> 
        );
      })}
    </ul>
  );
};

export default TodoList;
