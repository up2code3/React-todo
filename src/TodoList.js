import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 0,
    title: "start assignment",
    complete:"Yes"
  },
  {
    id: 1,
    title: "Work on assignment",
    complete:"Yes"
  },
  {
    id: 2,
    title: "Complete assignment",
    complete:"Yes"
  },
  {
    id:3,
    title: "TodoListItem week 3",
    complete:"No"
  }
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          
            <TodoListItem  key={item.id} todo={item} complete={item.complete}/> 
          
        );
      })}
    </ul>
  );
};

export default TodoList;
