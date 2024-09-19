import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const editTodo = (todo) => {
    setCurrentTodo(todo);
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
    setCurrentTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm 
        addTodo={addTodo} 
        currentTodo={currentTodo} 
        updateTodo={updateTodo} 
      />
      <TodoList 
        todos={todos} 
        editTodo={editTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default App;
