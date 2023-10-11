"use client";

import DataTable from "@/components/DataTable";
import { usePosts } from "@/hooks/usePost";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 250 },
	{ field: "title", headerName: "Title", width: 250 },
	{
		field: "account",
		headerName: "Author",
		width: 160,
		valueFormatter(params) {
			if (params.value?.username) {
				return new Date(params.value).toDateString();
			}
		},
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 160,
		valueFormatter(params) {
			if (params.value) {
				return new Date(params.value).toDateString();
			}
		},
	},
	{
		field: "action",
		headerName: "Action",
		sortable: false,
		editable: false,
		filterable: false,
		hideable: false,
		disableColumnMenu: true,
		width: 160,
		renderCell(params: GridRenderCellParams) {
			return (
				<div className="flex flex-row justify-center items-center gap-x-2">
					<Link
						href={`/admin/tag/edit/${params.id}`}
						className="bg-orange text-white p-2 hover:bg-primary"
					>
						Edit
					</Link>
					<Link
						href={`/admin/tag?id=${params.id}&action=delete&showModal=true`}
						className="bg-body-color text-white p-2 hover:bg-primary"
					>
						Delete
					</Link>
				</div>
			);
		},
	},
];

export default function AllPosts() {
	const { data, isLoading } = usePosts();

	if (isLoading || !data) return "Loading...";

	return (
		<DataTable
			columns={columns}
			rows={data}
		/>
	);
}
