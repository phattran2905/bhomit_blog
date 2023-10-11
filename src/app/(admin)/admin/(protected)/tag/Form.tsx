"use client";

import { ChangeEvent, useState } from "react";
import { FaCode, FaImage } from "react-icons/fa";
import { FaTarp } from "react-icons/fa6";
import axios from "axios";
import { usePathname } from "next/navigation";

type Props = {
	_name?: string;
	submitLabel: string;
	formType: string;
};

export default function TagForm({ _name, submitLabel, formType }: Props) {
	const [name, setName] = useState<string>(_name || "");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const pathname = usePathname();

	const onCreateNewTag = async () => {
		setError(null);
		setSuccess(null);

		if (!name) {
			return setError("Please fill in required fields (*)");
		}

		const formData = new FormData();
		formData.append("name", name);

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

		if (!name) {
			return setError("Please fill in required fields (*)");
		}
		if (name !== _name) {
			formData.append("name", name);
		}

		// Check if values are edited
		if (formData.get("name") || formData.get("slug")) {
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
		<div className="py-12 px-10 bg-white">
			<div className="w-1/2 flex flex-col mx-auto gap-y-6">
				{/* Name */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="name"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaTarp size={14} />
						Name
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="text"
						name="name"
						id="name"
						required
						placeholder="Enter Name"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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

			<div className="mt-10 flex flex-row justify-center">
				<button
					onClick={formType === "create" ? onCreateNewTag : onUpdateTag}
					className="w-1/2 px-4 py-2 rounded-md font-medium text-[18px] bg-primary text-white hover:bg-orange transition-colors capitalize"
				>
					{submitLabel}
				</button>
			</div>
		</div>
	);
}
