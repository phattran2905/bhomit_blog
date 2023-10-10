"use client";

import DataTable from "@/components/DataTable";
import useAccounts from "@/hooks/useAccount";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 300 },
	{ field: "username", headerName: "Username", width: 160 },
	{ field: "email", headerName: "Email", width: 300 },
	{
		field: "createdAt",
		headerName: "Created At",
		width: 300,
		valueFormatter(params) {
			if (params.value) {
				return new Date(params.value).toDateString();
			}
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
