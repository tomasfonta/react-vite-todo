import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

	const { todos,
		setTodoCompleted,
		addTodo,
		deleteAllCompleted,
		deleteTodo } = useTodos();

	return (
		<main className="py-10 h-screen space-y-5">
			<h1 className="font-bold text-3xl text-center">Your Todos</h1>
			<div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
				<AddTodoForm
					onSubmit={addTodo}
				/>
				<TodoList
					todos={todos}
					onCompletedChange={setTodoCompleted}
					onDelete={deleteTodo}
				/>
				<TodoSummary
					todos={todos}
					deleteAllCompleted={deleteAllCompleted}
				/>
			</div>
		</main>
	)
}

export default App
