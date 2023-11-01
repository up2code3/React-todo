import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'

function App() {

  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <hr/>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>
        {newTodo}
      </p>
      <TodoList />
  
    </div>
  );
}
console.log()

export default App;
