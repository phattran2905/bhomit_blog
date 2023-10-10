import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CreateAccountForm from "./Form";

export default async function CreateNewAccount() {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new account</h1>
			</div>

			<CreateAccountForm />
		</div>
	);
}
