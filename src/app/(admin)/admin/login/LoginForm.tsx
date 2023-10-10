"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";

type Props = {};
export default function LoginForm({}: Props) {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onLogin = async () => {
		const response = await signIn("credentials", {
			username,
			password,
			// callbackUrl: "/admin/dashboard",
			redirect: false,
		});

		console.log(response);
	};

	return (
		<div className="flex flex-col">
			<div className="p-4 flex flex-col gap-y-2">
				<label
					htmlFor="username"
					className="font-bold flex flex-row items-center"
				>
					<FaUserAlt
						size={12}
						className="mr-2"
					/>
					Username
				</label>
				<input
					className="focus:outline-none p-3 text-primary border-2 border-primary-80 rounded-lg"
					type="text"
					name="username"
					id="username"
					placeholder="Enter Username"
					value={username}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
				/>
			</div>
			<div className="p-4 flex flex-col gap-y-2">
				<label
					htmlFor="password"
					className="font-bold flex flex-row items-center"
				>
					<FaLock
						size={12}
						className="mr-2"
					/>
					Password
				</label>
				<input
					className="focus:outline-none p-3 text-primary border-2 border-primary-80 rounded-lg"
					type="password"
					name="password"
					id="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
				/>
			</div>
			<div className="px-4 py-6">
				<button
					onClick={onLogin}
					className="w-full rounded-lg bg-primary font-bold font-heading text-[18px] text-white px-6 py-3 hover:bg-accent-green transition-colors"
				>
					Login
				</button>
			</div>
		</div>
	);
}
