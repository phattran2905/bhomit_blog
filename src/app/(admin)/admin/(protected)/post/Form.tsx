"use client";

import { ChangeEvent, useState } from "react";
import { FaCode, FaImage } from "react-icons/fa";
import { FaTarp } from "react-icons/fa6";
import axios from "axios";
import { usePathname } from "next/navigation";

type Props = {
	_title?: string;
	submitLabel: string;
	formType: string;
};

export default function TagForm({ _title, submitLabel, formType }: Props) {
	const [title, setTitle] = useState<string>(_title || "");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const pathname = usePathname();

	const onCreateNewTag = async () => {
		setError(null);
		setSuccess(null);

		if (!title) {
			return setError("Please fill in required fields (*)");
		}

		const formData = new FormData();
		formData.append("title", title);

		try {
			const response = await axios({
				method: "POST",
				url: "/api/tag",
				headers: { "Content-Type": "application/json" },
				data: formData,
			});

			if (response?.data) {
				setError(null);
				return setSuccess("Successfully created");
			} else {
				setSuccess(null);
				return setError("Failed to create");
			}
		} catch (error: any) {
			if (error?.response?.data?.message) {
				setSuccess(null);
				setError(error.response.data.message);
			}
		}
	};

	const onUpdateTag = async () => {
		setError(null);
		setSuccess(null);

		const formData = new FormData();

		if (!title) {
			return setError("Please fill in required fields (*)");
		}
		if (title !== _title) {
			formData.append("title", title);
		}

		// Check if values are edited
		if (formData.get("title") || formData.get("slug")) {
			const response = await axios({
				method: "POST",
				url: `/api/tag/${pathname.split("/admin/tag/edit/")[1]}`,
				headers: { "Content-Type": "application/json" },
				data: formData,
			});

			if (response?.data) {
				setError(null);
				return setSuccess("Successfully updated");
			} else {
				setSuccess(null);
				return setError("Failed to update");
			}
		}
	};

	return (
		<div className="py-12 px-10 bg-white flex flex-row justify-between gap-x-6">
			<div className="w-3/4 flex flex-col gap-y-6">
				{/* Title */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Title
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="text"
						title="title"
						id="title"
						required
						placeholder="Enter Title"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>

				{/* Body */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Body
						<span className="text-accent-red">*</span>
					</label>
					<textarea
						title="title"
						id="title"
						required
						placeholder="Enter Title"
						className="px-6 py-3 border border-disable-color rounded-md"
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value)}
					></textarea>
				</div>

				{/* Errors */}
				{error && (
					<p className="p-3 rounded-md bg-opacity-90 text-white bg-accent-red text-[14px]">
						{error}
					</p>
				)}

				{/* Success */}
				{success && (
					<p className="p-3 rounded-md bg-opacity-90 text-white bg-accent-green text-[14px]">
						{success}
					</p>
				)}
			</div>

			<div className="w-1/4 p-4 border flex flex-col gap-y-5">
				{/* Category */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Category
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="text"
						title="title"
						id="title"
						required
						placeholder="Enter Title"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>
				{/* Tag */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Tag
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="text"
						title="title"
						id="title"
						required
						placeholder="Enter Title"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>
				{/* Feature Image */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaImage size={14} />
						Feature Image
					</label>
					<input
						type="file"
						title="title"
						id="title"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>
				<div className="border-y py-2">
					{/* Created At */}
					<div className="flex flex-row justify-between items-center my-2">
						<span className="font-medium">CreatedAt</span>
						<span className="text-[15px] italic">Oct 23, 2023</span>
					</div>
					{/* Updated At */}
					<div className="flex flex-row justify-between items-center my-2">
						<span className="font-medium">Updated At</span>
						<span className="text-[15px] italic">Oct 23, 2023</span>
					</div>
				</div>
				<div className=" flex flex-row justify-center">
					<button
						onClick={formType === "create" ? onCreateNewTag : onUpdateTag}
						className="w-full px-4 py-2 rounded-md font-medium text-[18px] bg-primary text-white hover:bg-orange transition-colors capitalize"
					>
						{submitLabel}
					</button>
				</div>
			</div>
		</div>
	);
}
