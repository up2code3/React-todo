import React from 'react';

const todoList = [
  {
    id:1,
    title: 'start assignment'
  },
  {
    id:2,
    title: 'Work on assignment'
  },
  {
    id:3,
    title: 'Complete assignment'
  },
];

function App() {
  return (
    <div>
    
      <h1>Todo List</h1>
      
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

    </div>
  );
}
console.log()
export default App;
