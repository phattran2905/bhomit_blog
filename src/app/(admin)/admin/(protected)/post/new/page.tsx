"use client";
import CreatePostForm from "../Form";

export default function CreateNewTag() {
	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Create new post</h1>
			</div>

			<CreatePostForm
				submitLabel="create"
				formType="create"
			/>
		</div>
	);
}
