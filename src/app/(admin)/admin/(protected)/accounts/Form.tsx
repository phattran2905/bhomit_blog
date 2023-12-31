"use client";

import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { usePathname } from "next/navigation";

type Props = {
	_username?: string;
	_email?: string;
	submitLabel: string;
	formType: string;
};

export default function AccountForm({ _username, _email, submitLabel, formType }: Props) {
	const [username, setUsername] = useState<string>(_username || "");
	const [email, setEmail] = useState<string>(_email || "");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const pathname = usePathname();

	const onCreateNewAccount = async () => {
		setError(null);
		setSuccess(null);

		if (!username || !password || !confirmPassword) {
			return setError("Please fill in required fields (*)");
		}

		const emailValidationRegex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email && email.toLowerCase().match(emailValidationRegex) === null) {
			return setError("Email is not valid");
		}

		if (password != confirmPassword) {
			return setError("Password does not match");
		}

		const formData = new FormData();
		formData.append("username", username);
		if (email) {
			formData.append("email", email);
		}
		formData.append("password", password);
		formData.append("confirm_password", confirmPassword);

		try {
			const response = await axios({
				method: "POST",
				url: "/api/accounts/",
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

	const onUpdateAccount = async () => {
		setError(null);
		setSuccess(null);

		const formData = new FormData();

		if (!username) {
			return setError("Please fill in required fields (*)");
		}
		if (username !== _username) {
			formData.append("username", username);
		}

		if (email !== _email) {
			const emailValidationRegex =
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (email.toLowerCase().match(emailValidationRegex) === null) {
				return setError("Email is not valid");
			}
			formData.append("email", email);
		}

		if (password && confirmPassword) {
			if (password !== confirmPassword) {
				return setError("Password does not match");
			} else {
				formData.append("password", password);
				formData.append("confirm_password", confirmPassword);
			}
		}
		// Check if values are edited
		if (
			formData.get("username") ||
			formData.get("email") ||
			formData.get("password") ||
			formData.get("confirm_password")
		) {
			try {
				const response = await axios({
					method: "POST",
					url: `/api/accounts/${pathname.split("/admin/accounts/edit/")[1]}`,
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
			} catch (error: any) {
				if (error?.response?.data?.message) {
					setSuccess(null);
					setError(error.response.data.message);
				}
			}
		}
	};

	return (
		<div className="py-12 px-10 bg-white">
			<div className="w-1/2 flex flex-col mx-auto gap-y-6">
				{/* Username */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="username"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaUserAlt size={14} />
						Username
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="text"
						name="username"
						id="username"
						required
						placeholder="Enter Username"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={username}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
					/>
				</div>

				{/* Email */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="email"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaEnvelope size={14} />
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Email"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					/>
				</div>

				{/* Password */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="password"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaLock size={14} />
						Password
						{formType === "create" && <span className="text-accent-red">*</span>}
					</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						placeholder="Enter Password"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={password}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					/>
				</div>

				{/* Confirm Password */}
				<div className="flex flex-col gap-y-3">
					<label
						htmlFor="confirm_password"
						className="font-medium flex flex-row items-center gap-x-2"
					>
						<FaLock size={14} />
						Confirm Password
						{formType === "create" && <span className="text-accent-red">*</span>}
					</label>
					<input
						type="password"
						name="confirm_password"
						id="confirm_password"
						required
						placeholder="Re-enter Password"
						className="px-6 py-3 border border-disable-color rounded-md"
						value={confirmPassword}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
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
					onClick={formType === "create" ? onCreateNewAccount : onUpdateAccount}
					className="w-1/2 px-4 py-2 rounded-md font-medium text-[18px] bg-primary text-white hover:bg-orange transition-colors capitalize"
				>
					{submitLabel}
				</button>
			</div>
		</div>
	);
}
