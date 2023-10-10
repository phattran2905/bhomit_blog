import Dashboard from "./dashboard/page";
import AuthProvider from "@/components/AuthProvider";

type Props = {};
function AdminPage({}: Props) {
	return (
		<AuthProvider>
			<Dashboard />
		</AuthProvider>
	);
}
export default AdminPage;
