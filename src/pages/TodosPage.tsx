import { useQuery } from "react-query";
import axios from "axios";
import { encoded } from "./LoginPage";
import TodosTable from "../components/TodosTable";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const fetchTodos = async () => {
	const response: any = await axios.get(baseUrl + "/todos", {
		headers: { Authorization: `basic ${encoded}` },
	});
	return response;
};

const TodosPage = () => {
	const { isLoading, isError, data, isSuccess } = useQuery("todos", fetchTodos);

	return (
		<div className="todos-container">
			{isLoading && <p>Loading ...</p>}
			{isError && <p>There was an error retreving todos</p>}

			{isSuccess && (
				<>
					{data.data.data ? (
						<>
							<h2>Table</h2>
							<TodosTable todos={data.data.data} />
						</>
					) : (
						<>
							<h2>Table</h2>
							<div>Could not load table</div>
						</>
					)}
					<h2>List</h2>
					<ul>
						{data.data.data.map((todo: { id: number; title: string }) => (
							<li className="todo" key={todo.id}>
								{todo.title}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default TodosPage;
