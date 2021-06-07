import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/form';
import Header from './components/header';
import Todo from './components/todo';
import data from './data/data';

function App() {
  const [todos, setTodos] = useState(data);

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    const local = localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(local);
  };

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  function removeTodo(index) {
    const newTodos = [...todos];
    const remove = localStorage.removeItem('todos', newTodos);
    // newTodos.splice(index, 1);
    setTodos(remove);
  }

  // const s = localStorage.getItem('todos')
  // console.log(s)

  return (
    <>
      <Header />
      <div className="App">
        <div className="todo-list">
        <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
