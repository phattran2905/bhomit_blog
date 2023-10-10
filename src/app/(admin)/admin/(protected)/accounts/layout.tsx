import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function AccountsLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return <div>{children}</div>;
}
export default AccountsLayout;
