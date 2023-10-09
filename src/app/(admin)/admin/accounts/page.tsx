import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};
async function AccountsPage({}: Props) {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<div>
			<h1>AccountsPage</h1>
		</div>
	);
}
export default AccountsPage;
