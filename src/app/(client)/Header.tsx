"use client";

import { FaChevronDown } from "react-icons/fa";

type Props = {};
function Header({}: Props) {
	return (
		<header>
			<div className="container mx-auto">
				<div className="flex flex-row justify-between items-center">
					<div>
						<a
							href="/"
							className="font-heading text-3xl font-bold text-accent-green"
						>
							Bhomit<span className="text-white">Blog.</span>
						</a>
					</div>

					<div className="px-8">
						<ul className="flex flex-row justify-between items-center gap-x-12">
							<li>
								<a
									href="#"
									className="py-8 text-accent-green text-[22px] leading-[22px] font-heading font-bold"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="py-8 text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
								>
									About
								</a>
							</li>
							<li>
								<div className="relative group">
									<button className="py-8 flex flex-row justify-center items-center transition-colors duration-500">
										<span className="text-white text-[22px] leading-[22px] font-heading font-bold group-hover:text-accent-green ">
											Categories
										</span>
										<span className="inline-block text-white group-hover:text-accent-green ">
											<FaChevronDown
												className="ml-2"
												size={14}
											/>
										</span>
									</button>

									<div className="group/container transition-all duration-500 absolute top-20 left-0 bg-primary-80 shadow-md rounded-md z-[50]">
										<ul className="group-hover:flex hover:flex hidden px-8 py-4 flex-col gap-y-4">
											<li>
												<a
													href="#"
													className="inline-block p-2 text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
												>
													Category1
												</a>
											</li>
											<li>
												<a
													href="#"
													className="inline-block p-2 text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
												>
													Category2
												</a>
											</li>
											<li>
												<a
													href="#"
													className="inline-block p-2 text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
												>
													Category3
												</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<a
									href="#"
									className="py-8 text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;
