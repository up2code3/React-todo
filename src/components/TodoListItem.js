import React from "react";

import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li >
      {todo.title}
      <button onClick={() => onRemoveTodo(todo.id)}> Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
