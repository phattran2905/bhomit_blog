import { FaBell } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

export default async function Dashboard({}: Props) {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<>
			<Sidebar />

			<div className="basis-11/12">
				{/* Header */}
				<div className="border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
					<div className="flex flex-row items-center gap-x-3">
						<a href="#">
							<FaBell size={24} />
						</a>
						<a href="#">
							<div className="w-[40px] h-[40px] bg-image-placeholder rounded-full hover:border-primary border-2 transition-colors"></div>
						</a>
					</div>
				</div>
				{/* Main content */}
				<main>Admin Page</main>
			</div>
		</>
	);
}
