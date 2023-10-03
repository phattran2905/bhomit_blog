import { FaBell, FaChevronRight, FaRainbow } from "react-icons/fa";

type Props = {};
function AdminPage({}: Props) {
	return (
		<div className="flex flex-row items-stretch min-h-screen">
			<div className="basis-1/12 bg-sidebar-color">
				<div className="px-8 py-4">
					<a
						href="/"
						className="font-heading text-3xl font-bold text-accent-green"
					>
						Bhomit<span className="text-white">Blog.</span>
					</a>
				</div>
				<hr className="my-3 opacity-50" />
				<div className="py-2">
					<ul className="flex flex-col">
						<li>
							<a
								href="#"
								className="flex flex-row items-center text-white px-8 py-4 hover:bg-dim-black"
							>
								<FaRainbow />
								<span className="ml-3 font-medium text-[20px] font-heading capitalize">
									Dashboard
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex flex-row items-center text-white px-8 py-4 hover:bg-dim-black"
							>
								<FaRainbow />
								<span className="ml-3 font-medium text-[20px] font-heading capitalize">Menu</span>
								<FaChevronRight className="ml-auto opacity-70" />
							</a>

							<ul>
								<li className=" hover:bg-dim-black">
									<a
										href="#"
										className="w-full ml-8 inline-block text-white px-8 py-2"
									>
										Menu1
									</a>
								</li>
								<li className=" hover:bg-dim-black">
									<a
										href="#"
										className="w-full ml-8 inline-block text-white px-8 py-2"
									>
										Menu1
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a
								href="#"
								className="flex flex-row items-center text-white px-8 py-4 hover:bg-dim-black"
							>
								<FaRainbow />
								<span className="ml-3 font-medium text-[20px] font-heading capitalize">
									Dashboard
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex flex-row items-center text-white px-8 py-4 hover:bg-dim-black"
							>
								<FaRainbow />
								<span className="ml-3 font-medium text-[20px] font-heading capitalize">
									Dashboard
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="basis-11/12 bg-white">
				<div className="border-b-2 p-4 border-b-disable-color flex flex-row justify-end items-center">
					<div className="flex flex-row items-center gap-x-3">
						<a href="#">
							<FaBell size={24} />
						</a>
						<a href="#">
							<div className="w-[40px] h-[40px] bg-image-placeholder rounded-full hover:border-primary border-2 transition-colors"></div>
						</a>
					</div>
				</div>
				<main>Admin Page</main>
			</div>
		</div>
	);
}
export default AdminPage;
