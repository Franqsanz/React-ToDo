import React, { useEffect, useState } from 'react';
// import TodoForm from './components/form';
import Header from './components/header';
import Todo from './components/todo';
import './styles/App.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	function saveData(newTodos) {
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	useEffect(() => {
		if (localStorage.getItem("todos")) {
			setTodos(JSON.parse(localStorage.getItem("todos")));
		}
	}, []);

	function addTodo() {
		if (newTodo.toLocaleUpperCase()) {
			let newTodos = [...todos,
			{
				id: Date.now(),
				text: newTodo.toLocaleUpperCase(),
				isCompleted: false
			}
			];

			setTodos(newTodos);
			setNewTodo("");
			saveData(newTodos);
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
	};

	function completeTodo(index) {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
		saveData(newTodos);
	};

	function deleteTodo(id) {
		let newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);

		saveData(newTodos);
	};

	return (
		<>
			<Header />
			<div className="App">
				<div className="todo-list">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="input"
							placeholder="Nombre de la Tarea"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
						/>
						<button onClick={addTodo}>Agregar Tarea</button>
					</form>
					{/* <TodoForm addTodo={addTodo} /> */}
					{todos.map((todo, index) => (
						<Todo
							key={index}
							index={index}
							todo={todo}
							completeTodo={completeTodo}
							deleteTodo={deleteTodo}
						/>
					)).reverse()}
				</div>
			</div>
		</>
	)
}
export default App;