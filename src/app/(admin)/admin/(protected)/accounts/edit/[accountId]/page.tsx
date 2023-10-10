"use client";
import { usePathname } from "next/navigation";
import EditAccountForm from "../../Form";
import { useAccountById } from "@/hooks/useAccount";

type Props = {};
export default function EditAccount({}: Props) {
	const pathname = usePathname();

	const { data: account, isLoading } = useAccountById(pathname.split("/admin/accounts/edit/")[1]);

	if (isLoading) return "Loading...";

	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new account</h1>
			</div>

			<EditAccountForm
				_username={account.username}
				_email={account.email}
				submitLabel="update"
				formType="edit"
			/>
		</div>
	);
}
