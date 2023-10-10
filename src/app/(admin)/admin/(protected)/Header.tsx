"use client";
import { FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<div className="bg-white border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
			<div className="flex flex-row items-center gap-x-3">
				<a href="#">
					<FaBell size={24} />
				</a>
				<button
					onClick={() => setOpenMenu(!openMenu)}
					className="relative"
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
				</button>
			</div>
		</div>
	);
}
