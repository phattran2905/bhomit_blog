"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";

export default function LoginForm() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string | null>();
	const router = useRouter();

	const onLogIn = async () => {
		setError(null);

		const response = await signIn("credentials", {
			username,
			password,
			redirect: false,
		});

		if (response?.error) {
			return setError("Username or Password is not valid");
		}

		if (response?.status === 200 && response?.ok) {
			return router.push("/admin/dashboard");
		}
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

			{error && (
				<div className="p-4">
					<p className="bg-accent-red px-4 py-2 rounded-md text-white">{error}</p>
				</div>
			)}
			<div className="px-4 py-6">
				<button
					onClick={onLogIn}
					className="w-full rounded-lg bg-primary font-bold font-heading text-[18px] text-white px-6 py-3 hover:bg-accent-green transition-colors"
				>
					Login
				</button>
			</div>
		</div>
	);
}
