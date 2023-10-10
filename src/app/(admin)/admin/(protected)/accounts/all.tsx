"use client";

import DataTable from "@/components/DataTable";
import useAccounts from "@/hooks/useAccount";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 300 },
	{ field: "username", headerName: "Username", width: 160 },
	{ field: "email", headerName: "Email", width: 300 },
	{
		field: "createdAt",
		headerName: "Created At",
		width: 300,
	},
	{
		field: "action",
		headerName: "Action",
		sortable: false,
		editable: false,
		filterable: false,
		hideable: false,
		disableColumnMenu: true,
		width: 300,
		renderCell(params: GridRenderCellParams) {
			return (
				<div className="flex flex-row justify-center items-center gap-x-2">
					<Link
						href={`/admin/accounts/edit/${params.id}`}
						className="bg-orange text-white p-2"
					>
						Edit
					</Link>
					<Link
						href={`/admin/accounts/edit/${params.id}`}
						className="bg-body-color text-white p-2"
					>
						Delete
					</Link>
				</div>
			);
		},
	},
];

export default function AllAccounts() {
	const { data, isLoading } = useAccounts();

	if (isLoading || !data) return "Loading...";

	return (
		<DataTable
			columns={columns}
			rows={data}
		/>
	);
}
