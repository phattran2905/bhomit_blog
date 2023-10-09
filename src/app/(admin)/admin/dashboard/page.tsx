import { FaBell, FaChevronRight, FaRainbow } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

export default async function Dashboard({}: Props) {
	const session = await getServerSession();

	if (!session || !session.user) {
		return redirect("/admin/login");
	}

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
							<a
								href="#"
								className="flex flex-row gap-x-4 items-center text-in-field-color px-8 py-2 hover:bg-dim-black"
							>
								<FaRainbow size={16} />
								<span className="text-[18px] font-heading capitalize">Dashboard</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex flex-row items-center gap-x-4 text-in-field-color px-8 py-2 hover:bg-dim-black"
							>
								<FaRainbow size={16} />
								<span className="text-[18px] font-heading capitalize">Menu</span>
								<FaChevronRight
									size={10}
									className="ml-auto"
								/>
							</a>

							<ul>
								<li className=" hover:bg-dim-black">
									<a
										href="#"
										className="w-full ml-8 text-[18px] font-heading inline-block text-in-field-color px-8 py-2"
									>
										Menu1
									</a>
								</li>
								<li className=" hover:bg-dim-black">
									<a
										href="#"
										className="w-full ml-8 text-[18px] font-heading inline-block text-in-field-color px-8 py-2"
									>
										Menu1
									</a>
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
						<li>
							<a
								href="#"
								className="flex flex-row gap-x-4 items-center text-in-field-color px-8 py-2 hover:bg-dim-black"
							>
								<FaRainbow size={16} />
								<span className="text-[18px] font-heading capitalize">Dashboard</span>
							</a>
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
						<li>
							<button onClick={() => signOut({ callbackUrl: "/admin/login" })}>Log out</button>
						</li>
					</ul>
				</div>
			</div>

			<div className="basis-11/12">
				{/* Header */}
				<div className="border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
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
				<main>Admin Page</main>
			</div>
		</>
	);
}
