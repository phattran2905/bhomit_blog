"use client";

import "react-quill/dist/quill.snow.css";
import { ChangeEvent, useState } from "react";
import { FaCode, FaImage, FaTimes } from "react-icons/fa";
import { FaTableList, FaTarp } from "react-icons/fa6";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useCategories } from "@/hooks/useCategory";
import ReactQuill from "react-quill";

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
	const { data: categories } = useCategories();
	const [selectedCatID, setSelectedCatID] = useState<string>("");
	const [tags, setTags] = useState<string[]>(["T1", "T2", "T3"]);
	const [tagInput, setTagInput] = useState<string>("");
	const [body, setBody] = useState<string>("");

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
						name="title"
						id="title"
						required
						placeholder="Enter Title"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
				</div>

				{/* Body */}
				<div className="flex flex-col gap-y-3 py-2 h-full">
					<label
						htmlFor="body"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Body
						<span className="text-accent-red">*</span>
					</label>
					{/* <textarea
						name="body"
						id="body"
						required
						placeholder="Enter Body"
						className="px-6 py-3 border border-disable-color rounded-md"
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value)}
					></textarea> */}

					<ReactQuill
						theme="snow"
						value={body}
						onChange={setBody}
						className="h-full"
					/>
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
						<FaTableList size={14} />
						Category
						<span className="text-accent-red">*</span>
					</label>
					<select
						name="category"
						id="category"
						className="px-6 py-3 border border-disable-color rounded-md"
					>
						{categories &&
							categories.map((category: any) => (
								<option
									value={category.id}
									selected={category.id === selectedCatID ? true : false}
									onSelect={() => setSelectedCatID(category.id)}
								>
									{category.name}
								</option>
							))}
					</select>
				</div>
				{/* Tag */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="title"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Tag
					</label>
					<div className="flex flex-row justify-between items-stretch">
						<input
							type="text"
							name="tag"
							id="tag"
							required
							placeholder="Enter Title"
							className="w-full px-6 py-3 border border-disable-color rounded-md"
							value={tagInput}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)}
						/>
						<button
							onClick={() => {
								setTagInput("");
								setTags([...tags, tagInput]);
							}}
							className="bg-primary py-2 px-4 font-medium text-white hover:bg-accent-green"
						>
							Add
						</button>
					</div>
					{/* Added tags */}
					{tags.length > 0 && (
						<div className="flex flex-row flex-wrap gap-2 py-2">
							{tags.map((tag: string, index: number) => (
								<div className="flex flex-row items-stretch">
									<span className="text-[14px] bg-disable-color px-4 py-1">{tag}</span>
									<button
										onClick={() => {
											const updatedTags = [...tags];
											updatedTags.splice(index, 1);
											setTags(updatedTags);
										}}
										className="p-2 bg-in-field-color text-white hover:bg-black"
									>
										<FaTimes size={14} />
									</button>
								</div>
							))}
						</div>
					)}
				</div>
				{/* Feature Image */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="feature-img"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaImage size={14} />
						Feature Image
					</label>
					<input
						type="file"
						name="feature-img"
						id="feature-img"
						className="px-6 py-3 border border-disable-color rounded-md"
					/>
				</div>
				{/* Created & Updated */}
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
				{/* Create Button */}
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
