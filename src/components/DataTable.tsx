"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function DataTable({ columns, rows }: { columns: GridColDef[]; rows: any }) {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
			/>
		</div>
	);
}
