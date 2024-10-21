import { Todo } from "../types/todos";

interface TodoSummaryProps {

	todos: Todo[];
	deleteAllCompleted: () => void;
}


export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {


	const pending = todos.filter(todo => !todo.completed).length;
	const completed = todos.filter(todo => todo.completed).length;

	return (

		<div className="flex">
			<div className="text-center text-sm grow text-gray-900">
				{todos.length === 0 && (
					<p className="text-center text-sm text-gray-500"> No todos yet, take me homeee!!</p>
				)}
				{pending > 0 &&
					<p>{completed}/{todos.length} todos Completed.</p>
				}
			</div>
			<div className="">
				<button
					className="w-40 rounded-md bg-slate-600 text-white hover:bg-slate-800"
					onClick={() => deleteAllCompleted()}
				> Delete All completed</button>
			</div>
		</div>
	);

}