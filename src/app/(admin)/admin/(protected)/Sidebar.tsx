"use client";

import { FaChevronRight, FaNewspaper, FaRainbow, FaTags, FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaTableList } from "react-icons/fa6";
import { useEffect, useState } from "react";

const activeStyle = "text-white bg-dim-black";
const inactiveStyle = "text-in-field-color hover:bg-dim-black";

export default function Sidebar() {
	const pathname = usePathname();
	const [showSidebar, setShowSidebar] = useState<boolean>(true);
	const searchParams = useSearchParams();

	useEffect(() => {
		const showSidebarParam = searchParams.get("showSidebar");
		if (showSidebarParam && showSidebarParam === "true") {
			setShowSidebar(true);
		}
		if (showSidebarParam && showSidebarParam === "false") {
			setShowSidebar(false);
		}
	}, [searchParams]);

	return (
		<>
			{showSidebar && (
				<div className={`min-w-[280px] bg-sidebar-color`}>
					<div className="w-full flex flex-row justify-around items-center my-5">
						<Link
							href="/"
							className="font-heading text-2xl font-bold text-accent-green"
						>
							Bhomit<span className="text-white">Blog</span>
						</Link>
					</div>
					<div className="w-full">
						<ul className="flex flex-col border-y border-y-neutral-500 py-4">
							{/* Dashboard */}
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

							{/* Category */}
							<li>
								<Link
									href="/admin/category"
									className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
										pathname.includes("/admin/category") ? activeStyle : inactiveStyle
									}`}
								>
									<FaTableList size={16} />
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
										className={`${
											pathname === "/admin/category/new" ? activeStyle : inactiveStyle
										}`}
									>
										<Link
											href="/admin/category/new"
											className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
										>
											New Category
										</Link>
									</li>
								</ul>
							</li>

							{/* Tag */}
							<li>
								<Link
									href="/admin/tag"
									className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
										pathname.includes("/admin/tag") ? activeStyle : inactiveStyle
									}`}
								>
									<FaTags size={16} />
									<span className="text-[18px] font-heading capitalize">Tag</span>
									<FaChevronRight
										size={10}
										className="ml-auto"
									/>
								</Link>

								<ul className={`${pathname.includes("/admin/tag") ? "block" : "hidden"}`}>
									<li className={`${pathname === "/admin/tag" ? activeStyle : inactiveStyle}`}>
										<Link
											href="/admin/tag"
											className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
										>
											All Tags
										</Link>
									</li>
									<li className={`${pathname === "/admin/tag/new" ? activeStyle : inactiveStyle}`}>
										<Link
											href="/admin/tag/new"
											className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
										>
											New Tag
										</Link>
									</li>
								</ul>
							</li>

							{/* Post */}
							<li>
								<Link
									href="/admin/post"
									className={`flex flex-row gap-x-4 items-center px-8 py-2 ${
										pathname.includes("/admin/post") ? activeStyle : inactiveStyle
									}`}
								>
									<FaNewspaper size={16} />
									<span className="text-[18px] font-heading capitalize">Post</span>
									<FaChevronRight
										size={10}
										className="ml-auto"
									/>
								</Link>

								<ul className={`${pathname.includes("/admin/post") ? "block" : "hidden"}`}>
									<li className={`${pathname === "/admin/post" ? activeStyle : inactiveStyle}`}>
										<Link
											href="/admin/post"
											className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
										>
											All Posts
										</Link>
									</li>
									<li className={`${pathname === "/admin/post/new" ? activeStyle : inactiveStyle}`}>
										<Link
											href="/admin/post/new"
											className="w-full ml-8 text-[18px] font-heading inline-block px-8 py-1"
										>
											New Post
										</Link>
									</li>
								</ul>
							</li>

							{/* Account */}
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
										className={`${
											pathname === "/admin/accounts/new" ? activeStyle : inactiveStyle
										}`}
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
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
