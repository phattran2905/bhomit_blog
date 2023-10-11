"use client";
import { usePathname } from "next/navigation";
import EditCategoryForm from "../../Form";
import { useCategoryById } from "@/hooks/useCategory";

type Props = {};
export default function EditCategory({}: Props) {
	const pathname = usePathname();

	const { data: category, isLoading } = useCategoryById(pathname.split("/admin/category/edit/")[1]);

	if (isLoading) return "Loading...";

	return (
		<div>
			<div className="mb-6">
				<h1 className="font-heading text-[28px] font-bold capitalize">Edit category</h1>
			</div>

			<EditCategoryForm
				_name={category.name}
				_slug={category.slug}
				submitLabel="update"
				formType="edit"
			/>
		</div>
	);
}
