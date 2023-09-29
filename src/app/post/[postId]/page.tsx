import Footer from "@/app/Footer";
import Header from "@/app/Header";
import {
	FaArrowRight,
	FaChevronLeft,
	FaChevronRight,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

type Props = {};
function Post({}: Props) {
	return (
		<>
			<div className="w-full bg-heroBg bg-bottom bg-no-repeat">
				<Header />
			</div>

			<main className="bg-light-blue">
				{/* Post */}
				<div className="container mx-auto">
					<div className=" py-20">
						{/* Title */}
						<h1 className="text-title-color font-bold text-[48px] leading-[64px] mb-4">
							New Year Resolution
						</h1>
						{/* Author */}
						<div className="flex flex-row gap-x-4 items-center mb-5">
							<div className="w-[40px] h-[40px] bg-image-placeholder overflow-hidden rounded-full"></div>
							<span className="text-title-color font-semibold font-heading">Joe Iskandar</span>
							<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
								<span className="pl-6 text-in-field-color text-[14px]">June 12, 2021</span>
							</div>
							<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
								<span className="pl-6 text-in-field-color text-[14px]">12 min</span>
							</div>
						</div>

						{/* Image */}
						<div className="bg-white w-full px-4 pt-4 pb-16 rounded-lg">
							<div className="bg-image-placeholder relative w-full min-h-[390px] rounded-lg">
								<div className="w-full h-full"></div>
								<span className="text-white bg-accent-green rounded-md uppercase py-2 px-3 inline-block absolute top-4 right-4">
									Productivity
								</span>
							</div>
						</div>
					</div>

					{/* Post */}
					<div className="flex flex-row gap-x-14">
						{/* Post Content */}
						<div className="w-9/12">
							<p className="my-6 leading-[36px] text-body-color">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas
								nostrum quibusdam magnam doloribus nam quam dolor est? Placeat tempore quaerat totam
								corporis ex perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur
								voluptatibus repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus
								laudantium nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut
								odit cum pariatur accusamus, laborum doloremque blanditiis nihil provident velit
								libero ut earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde!
								Aliquid voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit,
								aut magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam
								magnam doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex
								perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur voluptatibus
								repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus laudantium
								nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut odit cum
								pariatur accusamus, laborum doloremque blanditiis nihil provident velit libero ut
								earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde! Aliquid
								voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit, aut
								magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam magnam
								doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex perspiciatis
								facere, suscipit officia harum? Vel aut, et consequuntur voluptatibus repellendus
								ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus laudantium nam rerum
								est. Aliquam quasi corrupti facere cupiditate iste ipsum aut odit cum pariatur
								accusamus, laborum doloremque blanditiis nihil provident velit libero ut earum
								voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde! Aliquid
								voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit, aut
								magnam quisquam animi, totam officia id similique eaque?
							</p>
							<p className="my-6 leading-[36px] text-body-color">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas
								nostrum quibusdam magnam doloribus nam quam dolor est? Placeat tempore quaerat totam
								corporis ex perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur
								voluptatibus repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus
								laudantium nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut
								odit cum pariatur accusamus, laborum doloremque blanditiis nihil provident velit
								libero ut earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde!
								Aliquid voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit,
								aut magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam
								magnam doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex
								perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur voluptatibus
								repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus laudantium
								nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut odit cum
								pariatur accusamus, laborum doloremque blanditiis nihil provident velit libero ut
								earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde! Aliquid
								voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit, aut
								magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam magnam
								doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex perspiciatis
								facere, suscipit officia harum? Vel aut, et consequuntur voluptatibus repellendus
								ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus laudantium nam rerum
								est. Aliquam quasi corrupti facere cupiditate iste ipsum aut odit cum pariatur
								accusamus, laborum doloremque blanditiis nihil provident velit libero ut earum
								voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde! Aliquid
								voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit, aut
								magnam quisquam animi, totam officia id similique eaque?
							</p>

							<h2 className="text-bold font-bold text-[32px] my-10">
								Motivation Letter for My Self
							</h2>
							<p className="my-6 leading-[36px] text-body-color">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas
								nostrum quibusdam magnam doloribus nam quam dolor est? Placeat tempore quaerat totam
								corporis ex perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur
								voluptatibus repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus
								laudantium nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut
								odit cum pariatur accusamus, laborum doloremque blanditiis nihil provident velit
								libero ut earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde!
								Aliquid voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit,
								aut magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam
								magnam doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex
							</p>

							<div className="my-12">
								<div className="min-h-[320px] bg-image-placeholder rounded-md"></div>
								<p className="text-[#777777] text-center mb-6 mt-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit
								</p>
							</div>

							<h2 className="text-bold font-bold text-[32px] my-10">
								Preparing for New Year Work Life Balance
							</h2>
							<p className="my-6 leading-[36px] text-body-color">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas
								nostrum quibusdam magnam doloribus nam quam dolor est? Placeat tempore quaerat totam
								corporis ex perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur
								voluptatibus repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus
								laudantium nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut
								odit cum pariatur accusamus, laborum doloremque blanditiis nihil provident velit
								libero ut earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde!
								Aliquid voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit,
								aut magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam
								magnam doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex
							</p>

							<div className="my-12">
								<div className="flex flex-row gap-x-5">
									<div className="w-1/2 min-h-[296px] bg-image-placeholder rounded-md"></div>
									<div className="w-1/2 min-h-[296px] bg-image-placeholder rounded-md"></div>
								</div>
								<p className="text-[#777777] text-center mb-6 mt-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit
								</p>
							</div>
							<p className="my-6 leading-[36px] text-body-color">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas
								nostrum quibusdam magnam doloribus nam quam dolor est? Placeat tempore quaerat totam
								corporis ex perspiciatis facere, suscipit officia harum? Vel aut, et consequuntur
								voluptatibus repellendus ipsa, ipsam, ipsum adipisci explicabo corporis quidem minus
								laudantium nam rerum est. Aliquam quasi corrupti facere cupiditate iste ipsum aut
								odit cum pariatur accusamus, laborum doloremque blanditiis nihil provident velit
								libero ut earum voluptatibus, sit at, quos tenetur natus. Iure neque numquam unde!
								Aliquid voluptatem possimus ipsum error consequatur culpa quia necessitatibus velit,
								aut magnam quisquam animi, totam officia id similique eaque? Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Aliquam ipsum non aut! Quas nostrum quibusdam
								magnam doloribus nam quam dolor est? Placeat tempore quaerat totam corporis ex
							</p>

							{/* Tags */}
							<div className="my-14">
								<h3 className="text-title-color font-bold text-[32px] leading-[43px] mb-6">Tags</h3>
								<ul className="flex flex-row items-center my-6 gap-x-4">
									<li>
										<a
											href="#"
											className="px-8 py-2 uppercase text-white bg-accent-green rounded-md text-[14px]"
										>
											New Year
										</a>
									</li>
									<li>
										<a
											href="#"
											className="px-8 py-2 uppercase text-white bg-accent-green rounded-md text-[14px]"
										>
											Resolution
										</a>
									</li>
									<li>
										<a
											href="#"
											className="px-8 py-2 uppercase text-white bg-accent-green rounded-md text-[14px]"
										>
											Motivation
										</a>
									</li>
									<li>
										<a
											href="#"
											className="px-8 py-2 uppercase text-white bg-accent-green rounded-md text-[14px]"
										>
											Dream
										</a>
									</li>
								</ul>
							</div>

							{/* Author */}
							<div className="w-full my-12 bg-white rounded-lg p-4 shadow-md">
								<div className="flex flex-row items-center gap-x-10">
									<div className="basis-1/2 min-h-[320px] rounded-lg bg-image-placeholder"></div>
									<div className="basis-1/2 flex flex-col justify-center">
										<h4 className="font-bold text-[24px] capitalize">About Joe</h4>

										<p className="text-body-color my-3 leading-[26px]">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus totam non
											ullam fuga maxime sunt sit, autem, delectus porro dolores possimus repellendus
											a doloremque, aut magni laboriosam adipisci? Delectus, nihil!
										</p>

										<ul className="flex flex-row items-center gap-x-4 my-8">
											<li>
												<a
													href="#"
													className="border border-accent-green rounded-full py-2 px-3 text-accent-green hover:border-primary hover:text-primary transition-colors"
												>
													<FaFacebookF
														size={12}
														className="inline-block"
													/>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="border border-accent-green rounded-full py-2 px-3 text-accent-green hover:border-primary hover:text-primary transition-colors"
												>
													<FaTwitter
														size={12}
														className="inline-block"
													/>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="border border-accent-green rounded-full py-2 px-3 text-accent-green hover:border-primary hover:text-primary transition-colors"
												>
													<FaLinkedinIn
														size={12}
														className="inline-block"
													/>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="border border-accent-green rounded-full py-2 px-3 text-accent-green hover:border-primary hover:text-primary transition-colors"
												>
													<FaInstagram
														size={12}
														className="inline-block"
													/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Previous - Next */}
							<div className="flex flex-row items-stretch gap-x-4 mb-20">
								{/* Previous */}
								<a
									href="#"
									className="basis-1/2 bg-white rounded-lg p-4 shadow-md hover:shadow-primary"
								>
									<div className="flex flex-col gap-y-5">
										<div className="flex flex-start">
											<button className="flex items-center font-medium hover:text-accent-green transition-colors ">
												<FaChevronLeft
													size={13}
													className="inline-block mr-3"
												/>
												Previous
											</button>
										</div>
										<div className="min-h-[320px] rounded-lg bg-image-placeholder"></div>
										<p className="text-center font-semibold text-[24px] text-title-color break-words capitalize">
											Top 5 Destination in Japan
										</p>
									</div>
								</a>
								{/* Next */}
								<a
									href="#"
									className="basis-1/2  bg-white rounded-lg p-4 shadow-md hover:shadow-primary"
								>
									<div className="flex flex-col gap-y-5">
										<div className="flex justify-end">
											<button className="flex items-center font-medium hover:text-accent-green transition-colors ">
												Next
												<FaChevronRight
													size={13}
													className="inline-block ml-3"
												/>
											</button>
										</div>
										<div className="min-h-[320px] rounded-lg bg-image-placeholder"></div>
										<p className="text-center font-semibold text-[24px] text-title-color break-words capitalize">
											Tips for Work-Life Balance Work From Home
										</p>
									</div>
								</a>
							</div>
						</div>

						{/* Sidebar */}
						<aside className="w-3/12 flex flex-col gap-y-6">
							{/* Search */}
							<div className="bg-white rounded-md p-5">
								<h4 className="font-heading text-title-color text-[24px] font-semibold mb-3">
									Search
								</h4>
								<div className="relative">
									<input
										type="text"
										name="search"
										id="search"
										placeholder="Enter keywords"
										className="w-full border-2 border-in-field-color p-3 focus:outline-none rounded-md"
									/>
									<button className="absolute top-[10px] right-2 p-2 bg-accent-green rounded-md text-white hover:bg-primary transition-colors">
										<FaArrowRight size={14} />
									</button>
								</div>
							</div>
							{/* Popular posts */}
							<div className="bg-white rounded-lg p-5">
								<h4 className="font-heading text-title-color text-[24px] font-semibold mb-6">
									Popular Posts
								</h4>
								<div className="flex flex-col gap-y-6">
									{/* Post 1 */}
									<div className="flex flex-row gap-x-5 items-center">
										<div className="bg-image-placeholder rounded-lg basis-1/5">
											<div className="min-w-[64px] min-h-[64px]"></div>
										</div>
										<div>
											<h5 className="text-title-color font-semibold mb-1">
												Top 5 Destination in Japan
											</h5>
											<span className="text-[14px]">Sept 10, 2020</span>
										</div>
									</div>
									{/* Post 2 */}
									<div className="flex flex-row gap-x-5 items-center">
										<div className="bg-image-placeholder rounded-lg basis-1/5">
											<div className="min-w-[64px] min-h-[64px]"></div>
										</div>
										<div>
											<h5 className="text-title-color font-semibold mb-1">
												Top 5 Destination in Japan
											</h5>
											<span className="text-[14px]">Sept 10, 2020</span>
										</div>
									</div>
									{/* Post 3 */}
									<div className="flex flex-row gap-x-5 items-center">
										<div className="bg-image-placeholder rounded-lg basis-1/5">
											<div className="min-w-[64px] min-h-[64px]"></div>
										</div>
										<div>
											<h5 className="text-title-color font-semibold mb-1">
												Top 5 Destination in Japan
											</h5>
											<span className="text-[14px]">Sept 10, 2020</span>
										</div>
									</div>
								</div>
							</div>
							{/* Categories */}
							<div className="bg-white rounded-lg p-5">
								<h4 className="font-heading text-title-color text-[24px] font-semibold mb-6">
									Categories
								</h4>
								<div className="grid grid-cols-2 gap-4">
									{/* Category 1 */}
									<div className="min-h-[100px]">
										<a
											href="#"
											className="w-full h-full bg-image-placeholder rounded-md relative flex flex-row justify-center items-end shadow-sm transition-all hover:shadow-md hover:shadow-body-color group"
										>
											<span className="inline-block text-title-color font-medium p-2 group-hover:text-primary">
												Travel
											</span>
											<span className="inline-block bg-primary p-2 absolute -top-1 right-0 rounded-br-lg rounded-bl-lg text-white text-[12px] group-hover:bg-accent-green">
												9
											</span>
										</a>
									</div>
									{/* Category 1 */}
									<div className="min-h-[100px]">
										<a
											href="#"
											className="w-full h-full bg-image-placeholder rounded-md relative flex flex-row justify-center items-end shadow-sm transition-all hover:shadow-md hover:shadow-body-color group"
										>
											<span className="inline-block text-title-color font-medium p-2 group-hover:text-primary">
												Travel
											</span>
											<span className="inline-block bg-primary p-2 absolute -top-1 right-0 rounded-br-lg rounded-bl-lg text-white text-[12px] group-hover:bg-accent-green">
												9
											</span>
										</a>
									</div>
									{/* Category 1 */}
									<div className="min-h-[100px]">
										<a
											href="#"
											className="w-full h-full bg-image-placeholder rounded-md relative flex flex-row justify-center items-end shadow-sm transition-all hover:shadow-md hover:shadow-body-color group"
										>
											<span className="inline-block text-title-color font-medium p-2 group-hover:text-primary">
												Travel
											</span>
											<span className="inline-block bg-primary p-2 absolute -top-1 right-0 rounded-br-lg rounded-bl-lg text-white text-[12px] group-hover:bg-accent-green">
												9
											</span>
										</a>
									</div>
								</div>
							</div>
							{/* Author */}
							<div className="bg-primary-60 rounded-lg p-6">
								<div className="min-h-[212px] bg-image-placeholder rounded-md">{/* image */}</div>

								<div className="flex flex-col items-center p-4 gap-y-3 my-2">
									<h4 className="text-white font-heading font-semibold text-[24px]">
										Bhomit Kapoor
									</h4>
									<p className="text-white my-3 text-center leading-[26px]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis illo
										unde eligendi nihil, consectetur magni minus dignissimos eaque facere.
									</p>
								</div>

								<ul className="flex flex-row justify-center items-center gap-x-4 my-4">
									<li>
										<a
											href="#"
											className="border border-white rounded-full py-2 px-3 text-white hover:border-accent-green hover:text-accent-green transition-colors"
										>
											<FaFacebookF
												size={12}
												className="inline-block"
											/>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="border border-white rounded-full py-2 px-3 text-white hover:border-accent-green hover:text-accent-green transition-colors"
										>
											<FaTwitter
												size={12}
												className="inline-block"
											/>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="border border-white rounded-full py-2 px-3 text-white hover:border-accent-green hover:text-accent-green transition-colors"
										>
											<FaLinkedinIn
												size={12}
												className="inline-block"
											/>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="border border-white rounded-full py-2 px-3 text-white hover:border-accent-green hover:text-accent-green transition-colors"
										>
											<FaInstagram
												size={12}
												className="inline-block"
											/>
										</a>
									</li>
								</ul>
							</div>
							{/* CTA - Subscribe */}
							<div className="bg-primary-80 rounded-lg p-6">
								<h4 className="text-center text-white font-semibold text-[24px] mb-4">
									Subscribe BhomitBlog
								</h4>
								<div className="relative">
									<input
										type="text"
										name="subscribe-email"
										id="subscribe-email"
										placeholder="Enter email here"
										className="p-3 focus:outline-none rounded-md w-full"
									/>
									<button className="absolute top-2 right-2 p-2 bg-accent-green rounded-md text-white hover:bg-primary transition-colors">
										<FaArrowRight size={14} />
									</button>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
export default Post;
