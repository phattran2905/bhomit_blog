"use client";

import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import axios from "axios";

export default function CreateAccountForm() {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const onCreateNewAccount = async () => {
		setError(null);
		setSuccess(null);

		if (!username || !email || !password || !confirmPassword) {
			return setError("Please fill in required fields (*)");
		}

		const emailValidationRegex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email.toLowerCase().match(emailValidationRegex) === null) {
			return setError("Email is not valid");
		}

		if (password != confirmPassword) {
			return setError("Password does not match");
		}

		const formData = new FormData();
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("confirm_password", confirmPassword);

		const response = await axios({
			method: "POST",
			url: "/api/accounts/",
			headers: { "Content-Type": "application/json" },
			data: formData,
		});

		if (response?.data) {
			return setSuccess("Successfully created");
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
						<span className="text-accent-red">*</span>
					</label>
					<input
						type="email"
						name="email"
						id="email"
						required
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
						<span className="text-accent-red">*</span>
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
						<span className="text-accent-red">*</span>
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
					onClick={onCreateNewAccount}
					className="w-1/2 px-4 py-2 rounded-md font-medium text-[18px] bg-primary text-white hover:bg-accent-red transition-colors"
				>
					Create
				</button>
			</div>
		</div>
	);
}
