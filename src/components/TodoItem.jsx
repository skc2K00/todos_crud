import React from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
