import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import AllAccounts from "./all";

async function AccountsPage() {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<>
			<div className="flex flex-row justify-between items-center mb-4">
				<h1 className="font-heading text-[28px] font-bold capitalize">All accounts</h1>
				<Link
					href="/admin/accounts/new"
					className="flex flex-row items-center gap-x-2 bg-accent-green font-medium text-[14px] text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
				>
					<span>
						<FaPlus />
					</span>
					New Account
				</Link>
			</div>
			<div className="my-6 bg-white">
				<AllAccounts />
			</div>
		</>
	);
}
export default AccountsPage;
