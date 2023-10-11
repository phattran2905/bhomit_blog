"use client";

import { FaPlus, FaTimes } from "react-icons/fa";
import Link from "next/link";
import AllPosts from "./all";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

function PostPage() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [id, setId] = useState<string>(searchParams.get("id") || "");
	const [action, setAction] = useState<string>(searchParams.get("action") || "");
	const [showModal, setShowModal] = useState<boolean>(
		Boolean(searchParams.get("showModal")) || false
	);

	useEffect(() => {
		setId(searchParams.get("id") || "");
		setAction(searchParams.get("action") || "");
		setShowModal(Boolean(searchParams.get("showModal")));
	}, [searchParams]);

	const onDelete = async () => {
		setShowModal(false);
		setAction("");

		if (action === "delete") {
			const response = await axios({
				method: "DELETE",
				url: `/api/post/${id}`,
				headers: { "Content-Type": "application/json" },
			});

			if (response?.data) {
				return router.push("/admin/post");
			}
		}
	};

	return (
		<>
			<div className="flex flex-row justify-between items-center mb-4">
				<h1 className="font-heading text-[28px] font-bold capitalize">All Posts</h1>
				<Link
					href="/admin/post/new"
					className="flex flex-row items-center gap-x-2 bg-accent-green font-medium text-[14px] text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
				>
					<span>
						<FaPlus />
					</span>
					New Post
				</Link>
			</div>
			<div className="my-6 bg-white">
				<AllPosts />
			</div>
			{/* Modal */}
			<div
				className={`${
					showModal ? "absolute" : "hidden"
				} z-[10] w-full h-full top-0 left-0 bg-black bg-opacity-30 flex flex-row justify-center items-center`}
			>
				<div className="bg-white w-1/2 rounded-lg shadow-lg">
					<div className="flex flex-row justify-between items-center px-6 py-4 bg-primary-80">
						<span className="text-white font-medium capitalize text-[18px]">Confirm</span>
						<Link
							href={pathname + `?id=${id}`}
							className="text-white hover:text-orange"
						>
							<FaTimes size={18} />
						</Link>
					</div>

					<div>
						<div className="pt-6 pb-4 px-10">
							<p className="text-[18px] font-medium">Do you want to delete it?</p>
						</div>
						<div className="flex flex-row justify-end gap-x-4 my-6 mr-6">
							<button
								onClick={onDelete}
								className="px-4 py-2 bg-primary text-white font-medium hover:bg-accent-green transition-colors"
							>
								Yes
							</button>
							<Link
								href={pathname + `?id=${id}`}
								className="px-4 py-2 bg-in-field-color text-white font-medium hover:bg-accent-green transition-colors"
							>
								Cancel
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default PostPage;
