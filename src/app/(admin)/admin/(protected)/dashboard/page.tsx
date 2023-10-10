import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<>
			<div className="flex flex-row justify-between items-center mb-4">
				<h1 className="font-heading text-[28px] font-bold capitalize">Dashboard</h1>
			</div>
			<div className="my-6">Dashboard content</div>
		</>
	);
}
