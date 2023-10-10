"use client";

import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {};
function AdminLogin({}: Props) {
	const { status } = useSession({
		required: false,
	});

	if (status === "loading") return "Loading...";

	if (status === "authenticated") return redirect("/admin/dashboard");

	return (
		<>
			<main className="min-h-screen h-screen w-full  bg-heroBg ">
				<div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
					<div className="basis-1/2 xl:basis-1/3 bg-white shadow-xl p-10 rounded-lg">
						<h1 className="text-title-color text-[48px] mb-8 font-bold text-center uppercase">
							Login
						</h1>
						<LoginForm />
					</div>
				</div>
			</main>
		</>
	);
}
export default AdminLogin;
