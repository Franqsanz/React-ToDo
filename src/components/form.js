import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  // const [value, setValue] = useState("");
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={newTodo}
        placeholder="Nueva Tarea"
        onChange={e => setNewTodo(e.target.value)}
      />
      <button type="submit" onClick={addTodo}>Agregar</button>
    </form>
  )
}