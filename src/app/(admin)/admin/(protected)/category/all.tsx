"use client";

import DataTable from "@/components/DataTable";
import { useAccounts } from "@/hooks/useAccount";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 250 },
	{ field: "username", headerName: "Username", width: 160 },
	{ field: "email", headerName: "Email", width: 230 },
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
						href={`/admin/accounts/edit/${params.id}`}
						className="bg-orange text-white p-2 hover:bg-primary"
					>
						Edit
					</Link>
					<Link
						href={`/admin/accounts?id=${params.id}&action=delete&showModal=true`}
						className="bg-body-color text-white p-2 hover:bg-primary"
					>
						Delete
					</Link>
				</div>
			);
		},
	},
];

export default function AllCategories() {
	const { data, isLoading } = useAccounts();

	if (isLoading || !data) return "Loading...";

	return (
		<DataTable
			columns={columns}
			rows={data}
		/>
	);
}
