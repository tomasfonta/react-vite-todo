import { useState, useEffect } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todos";

export default function useTodos() {

	const [todos, setTodos] = useState(() => {
		const savedTodos: Todo[] = JSON.parse(
			localStorage.getItem("todos") || "[]"
		);
		return savedTodos.length > 0 ? savedTodos : dummyData;
	});


	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos]);


	function addTodo(title: string) {
		setTodos((prevTodos) => [{
			id: Date.now(),
			title,
			completed: false
		}, ...prevTodos]);
	}

	function setTodoCompleted(id: number, completed: boolean) {
		setTodos((prevTodos) =>
			prevTodos.map(todo => (todo.id === id ? { ...todo, completed } : todo))
		);
	}

	function deleteTodo(id: number) {
		setTodos((prevTodos) =>
			prevTodos.filter(todo => (todo.id !== id))
		);
	}

	function deleteAllCompleted() {
		setTodos((prevTodos) =>
			prevTodos.filter(todo => (todo.completed === false))
		);
	}

	return {
		todos,
		setTodoCompleted,
		addTodo,
		deleteAllCompleted,
		deleteTodo
	}





}