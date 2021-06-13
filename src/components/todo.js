import React from 'react';

export default function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <ul
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : null }} >
      <li> {todo.text} </li>
      <div>
        <button onClick={() => completeTodo(index)} disabled>Complete</button>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </ul>
  );
}