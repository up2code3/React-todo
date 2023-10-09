import React from 'react';

const todoList = [
    {
      id:0,
      title: 'start assignment'
    },
    {
      id:1,
      title: 'Work on assignment'
    },
    {
      id:2,
      title: 'Complete assignment'
    },
  ];

const TodoList = () => {
    return(
        <ul>
        {todoList.map(function(item) {
          return (
            <div>
                <li key={item.id}>
                  {item.title}
                </li>
            </div>
          )
        })}
        </ul>
    )
};

export default TodoList;