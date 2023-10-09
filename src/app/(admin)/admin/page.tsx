import AuthProvider from "@/components/AuthProvider";
import Dashboard from "./dashboard/page";

type Props = {};
function AdminPage({}: Props) {
	return (
		<AuthProvider>
			<div className="flex flex-row items-stretch min-h-screen">
				<Dashboard />
			</div>
		</AuthProvider>
	);
}
export default AdminPage;
