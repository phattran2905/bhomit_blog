"use client";
import { usePathname } from "next/navigation";
import EditPostForm from "../../Form";
import { useTagById } from "@/hooks/useTag";

type Props = {};
export default function EditTag({}: Props) {
	const pathname = usePathname();

	const { data: post, isLoading } = useTagById(pathname.split("/admin/post/edit/")[1]);

	if (isLoading) return "Loading...";

	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Edit post</h1>
			</div>

			<EditPostForm
				_title={post.name}
				submitLabel="update"
				formType="edit"
			/>
		</div>
	);
}
