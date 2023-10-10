"use client";

import { FaBell } from "react-icons/fa";
import { redirect } from "next/navigation";
import Sidebar from "../Sidebar";
import { useSession } from "next-auth/react";

type Props = {};

export default function Dashboard({}: Props) {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			return redirect("/admin/login");
		},
	});

	if (status === "loading") return "Loading...";

	if (session && status === "authenticated")
		return (
			<>
				<div className="flex flex-row items-stretch min-h-screen bg-image-placeholder">
					<Sidebar />

					<div className="basis-11/12">
						{/* Header */}
						<div className="bg-white border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
							<div className="flex flex-row items-center gap-x-3">
								<a href="#">
									<FaBell size={24} />
								</a>
								<a href="#">
									<div className="w-[40px] h-[40px] bg-image-placeholder rounded-full hover:border-primary border-2 transition-colors"></div>
								</a>
							</div>
						</div>
						{/* Main content */}
						<main className="p-4 ">Dashboard</main>
					</div>
				</div>
			</>
		);
}
