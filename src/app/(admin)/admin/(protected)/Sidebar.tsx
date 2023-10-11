"use client";

import { FaBuromobelexperte, FaChevronRight, FaRainbow, FaUserFriends } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};
export default function Sidebar({}: Props) {
	const activeStyle = "text-white bg-dim-black";
	const inactiveStyle = "text-in-field-color hover:bg-dim-black";
	const pathname = usePathname();

	return (
		<>
			<div className="basis-1/12 bg-sidebar-color">
				<div className="px-8 py-4 my-4">
					<a
						href="/"
						className="font-heading text-3xl font-bold text-accent-green"
					>
						Bhomit<span className="text-white">Blog.</span>
					</a>
				</div>
				<div className="py-2">
					<ul className="flex flex-col">
						<li>
							<Link
								href="/admin/dashboard"
								className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
									pathname === "/admin/dashboard" ? activeStyle : inactiveStyle
								}`}
							>
								<FaRainbow size={16} />
								<span className="text-[18px] font-heading capitalize">Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								href="/admin/category"
								className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
									pathname.includes("/admin/category") ? activeStyle : inactiveStyle
								}`}
							>
								<FaBuromobelexperte size={16} />
								<span className="text-[18px] font-heading capitalize">Category</span>
								<FaChevronRight
									size={10}
									className="ml-auto"
								/>
							</Link>

							<ul className={`${pathname.includes("/admin/category") ? "block" : "hidden"}`}>
								<li className={`${pathname === "/admin/category" ? activeStyle : inactiveStyle}`}>
									<Link
										href="/admin/category"
										className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
									>
										All Categories
									</Link>
								</li>
								<li
									className={`${pathname === "/admin/category/new" ? activeStyle : inactiveStyle}`}
								>
									<Link
										href="/admin/category/new"
										className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
									>
										New Account
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								href="/admin/accounts"
								className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
									pathname.includes("/admin/accounts") ? activeStyle : inactiveStyle
								}`}
							>
								<FaUserFriends size={16} />
								<span className="text-[18px] font-heading capitalize">Account</span>
								<FaChevronRight
									size={10}
									className="ml-auto"
								/>
							</Link>

							<ul className={`${pathname.includes("/admin/accounts") ? "block" : "hidden"}`}>
								<li className={`${pathname === "/admin/accounts" ? activeStyle : inactiveStyle}`}>
									<Link
										href="/admin/accounts"
										className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
									>
										All Accounts
									</Link>
								</li>
								<li
									className={`${pathname === "/admin/accounts/new" ? activeStyle : inactiveStyle}`}
								>
									<Link
										href="/admin/accounts/new"
										className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
									>
										New Account
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<a
								href="#"
								className="flex flex-row gap-x-4 items-center text-in-field-color px-8 py-2 hover:bg-dim-black"
							>
								<FaRainbow size={16} />
								<span className="text-[18px] font-heading capitalize">Dashboard</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
