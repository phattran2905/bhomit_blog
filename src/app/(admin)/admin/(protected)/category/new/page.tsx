import CreateCategoryForm from "../Form";

export default function CreateNewCategory() {
	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new category</h1>
			</div>

			<CreateCategoryForm
				submitLabel="create"
				formType="create"
			/>
		</div>
	);
}
