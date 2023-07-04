import React from "react";
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

interface iTodosTable {
	todos: todo[];
}

type todo = {
	id: number;
	title: string;
	userId: number;
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

const TodosTable: React.FC<iTodosTable> = ({ todos }) => {
	const table = useReactTable({
		data: todos,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
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
	);
};

export default TodosTable;
