import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div className="w-full bg-heroBg bg-bottom bg-no-repeat">
				{/* Header */}
				<header>
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center py-8">
							<div>
								<a
									href="/"
									className="font-heading text-3xl font-bold text-accent-green"
								>
									Bhomit Blog
								</a>
							</div>

							<div className="px-8">
								<ul className="flex flex-row justify-between items-center gap-x-14">
									<li>
										<a
											href="#"
											className="text-accent-green text-[22px] leading-[22px] font-heading font-bold"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
										>
											Category
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white text-[22px] leading-[22px] font-heading font-bold hover:text-accent-green transition-colors duration-500"
										>
											Home
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>

				{/* Hero */}
				<section>
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center py-24">
							<div className="py-10 w-1/2">
								{/* Title */}
								<div className="mb-40">
									<h1 className="max-w-[462px] text-white text-[72px] font-bold leading-[5.9rem] mb-10">
										Welcome to Bhomit Blog
									</h1>
									<div className="my-10">
										<ul className="flex flex-row items-center divide-solid divide-x-2">
											<li className="pr-4 text-white font-heading font-bold text-[24px]">Travel</li>
											<li className="px-4 text-white font-heading font-bold text-[24px]">
												Productivity
											</li>
											<li className="px-4 text-white font-heading font-bold text-[24px]">
												Motivation
											</li>
											<li className="px-4 text-white font-heading font-bold text-[24px]">
												Relationship
											</li>
										</ul>
									</div>
								</div>

								{/* Social links */}
								<div className="mt-auto">
									<ul className="flex flex-row gap-x-6 items-center py-3">
										<li>
											<a
												href="#"
												className="p-5 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
											>
												<FaFacebookF
													size={24}
													className="inline-block"
												/>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="p-5 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
											>
												<FaTwitter
													size={24}
													className="inline-block"
												/>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="p-5 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
											>
												<FaLinkedinIn
													size={24}
													className="inline-block"
												/>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="p-5 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
											>
												<FaInstagram
													size={24}
													className="inline-block"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* Image Boxes */}
							<div className="w-1/2 relative">
								{/* Middle */}
								<div className="bg-white w-[400px] h-[480px] shadow-lg rounded-lg px-5 pt-4 pb-20 mx-auto">
									<div className="w-full h-full rounded-lg bg-image-placeholder mx-auto">
										<div className="w-full h-full"></div>
									</div>
								</div>

								{/* Bottom-Left */}
								<div className="absolute -bottom-16 left-20 shadow-2xl">
									<div className="bg-white w-[226px] h-[272px] rounded-lg px-3 pt-3 pb-10">
										<div className="w-full h-full rounded-lg bg-image-placeholder mx-auto">
											<div className="w-full h-full"></div>
										</div>
									</div>
								</div>

								{/* Top-Right */}
								<div className="absolute top-8 right-10 shadow-2xl">
									<div className="bg-white w-[226px] h-[272px] rounded-lg px-3 pt-3 pb-10">
										<div className="w-full h-full rounded-lg bg-image-placeholder mx-auto">
											<div className="w-full h-full"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="">Title</h1>
				<p>Body text</p>
			</main>
		</>
	);
}
