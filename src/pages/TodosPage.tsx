import { useQuery } from "react-query";
import axios from "axios";
import { encoded } from "./LoginPage";
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const fetchTodos = async () => {
	const response: any = await axios.get(baseUrl + "/todos", {
		headers: { Authorization: `basic ${encoded}` },
	});
	return response;
};

type todo = {
	id: number;
	title: string;
};

const columnHelper = createColumnHelper<todo>();
const columns = [
	columnHelper.accessor("id", {
		header: () => "Id",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("title", {
		header: () => "Title",
		cell: (info) => info.getValue(),
	}),
];

const TodosPage = () => {
	const { isLoading, isError, data, isSuccess } = useQuery("todos", fetchTodos);

	const table = useReactTable({
		data: data.data.data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="todos-container">
			{isLoading && <p>Loading ...</p>}
			{isError && <p>There was an error retreving todos</p>}

			{isSuccess && (
				<>
					<h2>table</h2>
					<table>
						<thead>
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.map((row) => (
								<tr key={row.id}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					<h2>ul</h2>
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
