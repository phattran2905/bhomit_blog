import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CreateAccountForm from "./Form";
import { getSession } from "next-auth/react";

type Props = {};
export default async function CreateNewAccount({}: Props) {
	const session = await getSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

	return (
		<div>
			<div className="mb-4">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new account</h1>
			</div>

			<CreateAccountForm />
		</div>
	);
}
