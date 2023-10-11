"use client";
import { usePathname } from "next/navigation";
import EditTagForm from "../../Form";
import { useTagById } from "@/hooks/useTag";

type Props = {};
export default function EditTag({}: Props) {
	const pathname = usePathname();

	const { data: tag, isLoading } = useTagById(pathname.split("/admin/tag/edit/")[1]);

	if (isLoading) return "Loading...";

	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Edit tag</h1>
			</div>

			<EditTagForm
				_name={tag.name}
				submitLabel="update"
				formType="edit"
			/>
		</div>
	);
}
