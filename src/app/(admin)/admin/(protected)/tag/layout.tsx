import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function TagLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return <div className="w-full">{children}</div>;
}
export default TagLayout;
