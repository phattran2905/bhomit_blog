import CreateTagForm from "../Form";

export default function CreateNewTag() {
	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new tag</h1>
			</div>

			<CreateTagForm
				submitLabel="create"
				formType="create"
			/>
		</div>
	);
}
