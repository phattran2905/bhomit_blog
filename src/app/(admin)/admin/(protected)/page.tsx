import AuthProvider from "@/components/AuthProvider";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

type Props = {};
function AdminPage({}: Props) {
	return (
		<>
			<div className="flex flex-row justify-between items-center mb-4">
				<h1 className="font-heading text-[28px] font-bold capitalize">Dashboard</h1>
			</div>
			<div className="my-6">Dashboard content</div>
		</>
	);
}
export default AdminPage;
