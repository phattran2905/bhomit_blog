import CreateAccountForm from "../Form";

export default function CreateNewAccount() {
	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new account</h1>
			</div>

			<CreateAccountForm
				submitLabel="create"
				formType="create"
			/>
		</div>
	);
}
