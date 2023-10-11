"use client";
import { FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useState } from "react";
import useCurrentAccount from "@/hooks/useCurrentAccount";

export default function Header() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const { data: account, isLoading } = useCurrentAccount();

	if (!isLoading && account) {
		return (
			<div className="bg-white border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
				<div className="flex flex-row items-center gap-x-3">
					<a href="#">
						<FaBell size={24} />
					</a>
					<div
						onClick={() => setOpenMenu(!openMenu)}
						className="relative hover:cursor-pointer"
					>
						<div
							className={`w-[40px] h-[40px] bg-image-placeholder rounded-full hover:border-primary border-2 transition-colors ${
								openMenu ? "border-primary" : ""
							}`}
						></div>

						<div
							className={`${
								openMenu ? "absolute" : "hidden"
							}  top-14 -left-16  bg-white rounded-md border shadow-md`}
						>
							<ul className="flex flex-col p-1 gap-y-2">
								<li>
									<p className="text-center text-[14px] font-bold text-primary p-1 border-b border-b-disable-color">
										{account.username}
									</p>
								</li>
								<li>
									<a
										href="#"
										className="w-full flex flex-row items-center py-2 px-4 hover:bg-primary hover:text-white transition-colors text-[14px] align-middle"
									>
										<FaCog
											className="mr-1"
											size={12}
										/>
										Settings
									</a>
								</li>
								<li>
									<button
										onClick={() => signOut({ callbackUrl: "/admin/login" })}
										className="w-full flex flex-row items-center py-2 px-4 hover:bg-primary hover:text-white transition-colors text-[14px] align-middle"
									>
										<FaSignOutAlt
											className="mr-1"
											size={12}
										/>
										Logout
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
