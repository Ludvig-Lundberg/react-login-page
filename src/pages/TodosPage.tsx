import { useQuery } from "react-query";
import axios from "axios";
import { encoded } from "./LoginPage";

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
				<ul>
					{data.data.data.map((todo: { id: number; title: string }) => (
						<li className="todo" key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TodosPage;
