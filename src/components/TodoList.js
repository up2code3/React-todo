import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';


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

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
}

export default TodoList;
