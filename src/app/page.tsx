"use client";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import {
	FaArrowRight,
	FaChevronRight,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div className="w-full bg-heroBg bg-bottom bg-no-repeat">
				<Header />
				<Hero />
			</div>
			<main className="bg-light-blue">
				<div className="container mx-auto py-20">
					{/* Title */}
					<h1 className="text-title-color font-bold text-[48px] leading-[64px] mb-9">
						Latest Post
					</h1>

					<div className="flex flex-row gap-x-14">
						{/* Post list */}
						<div className="w-9/12">
							<div className="flex flex-col gap-y-6">
								{/* Post 1 */}
								<div className="bg-white p-5 flex flex-row gap-x-9 rounded-lg hover:shadow-sm hover:shadow-primary-60 transition-colors duration-500">
									<div className="basis-1/3 min-w-[296px] min-h-[324px] bg-image-placeholder overflow-hidden rounded-lg">
										<div className=""></div>
									</div>
									<div className="basis-2/3 flex flex-col justify-between items-start gap-y-4 py-1">
										<div>
											<span className="px-7 py-[7px] text-[15px] font-medium uppercase rounded-sm bg-accent-green bg-opacity-25 text-accent-green shadow-sm">
												Travel
											</span>
										</div>
										<h2 className="font-semibold text-[32px] leading-[43px] my-3">
											10 Days in Tokyo
										</h2>
										<div className="flex flex-row gap-x-4 items-center">
											<div className="w-[40px] h-[40px] bg-image-placeholder overflow-hidden rounded-full"></div>
											<span className="text-title-color font-semibold font-heading">
												Joe Iskandar
											</span>
											<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
												<span className="pl-6 text-in-field-color text-[14px]">June 12, 2021</span>
											</div>
										</div>
										<p className="text-body-color leading-[26px] my-2">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, magnam
											sapiente corrupti ab officia unde accusantium pariatur quia doloribus
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi
											hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, mag
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi hic.
										</p>
										<a
											href={`/post/1`}
											className="capitalize text-accent-green hover:text-primary hover:font-bold transition-colors flex flex-row items-center"
										>
											Read more <FaChevronRight className="ml-1" />
										</a>
									</div>
								</div>
								{/* Post 2 */}
								<div className="bg-white p-5 flex flex-row gap-x-9 rounded-lg hover:shadow-sm hover:shadow-primary-60 transition-colors duration-500">
									<div className="basis-1/3 min-w-[296px] min-h-[324px] bg-image-placeholder overflow-hidden rounded-lg">
										<div className=""></div>
									</div>
									<div className="basis-2/3 flex flex-col justify-between items-start gap-y-4 py-1">
										<div>
											<span className="px-7 py-[7px] text-[15px] font-medium uppercase rounded-sm bg-accent-green bg-opacity-25 text-accent-green shadow-sm">
												Travel
											</span>
										</div>
										<h2 className="font-semibold text-[32px] leading-[43px] my-3">
											10 Days in Tokyo
										</h2>
										<div className="flex flex-row gap-x-4 items-center">
											<div className="w-[40px] h-[40px] bg-image-placeholder overflow-hidden rounded-full"></div>
											<span className="text-title-color font-semibold font-heading">
												Joe Iskandar
											</span>
											<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
												<span className="pl-6 text-in-field-color text-[14px]">June 12, 2021</span>
											</div>
										</div>
										<p className="text-body-color leading-[26px] my-2">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, magnam
											sapiente corrupti ab officia unde accusantium pariatur quia doloribus
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi
											hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, mag
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi hic.
										</p>
										<a
											href={`/post/1`}
											className="capitalize text-accent-green hover:text-primary hover:font-bold transition-colors flex flex-row items-center"
										>
											Read more <FaChevronRight className="ml-1" />
										</a>
									</div>
								</div>
								{/* Post 3 */}
								<div className="bg-white p-5 flex flex-row gap-x-9 rounded-lg hover:shadow-sm hover:shadow-primary-60 transition-colors duration-500">
									<div className="basis-1/3 min-w-[296px] min-h-[324px] bg-image-placeholder overflow-hidden rounded-lg">
										<div className=""></div>
									</div>
									<div className="basis-2/3 flex flex-col justify-between items-start gap-y-4 py-1">
										<div>
											<span className="px-7 py-[7px] text-[15px] font-medium uppercase rounded-sm bg-accent-green bg-opacity-25 text-accent-green shadow-sm">
												Travel
											</span>
										</div>
										<h2 className="font-semibold text-[32px] leading-[43px] my-3">
											10 Days in Tokyo
										</h2>
										<div className="flex flex-row gap-x-4 items-center">
											<div className="w-[40px] h-[40px] bg-image-placeholder overflow-hidden rounded-full"></div>
											<span className="text-title-color font-semibold font-heading">
												Joe Iskandar
											</span>
											<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
												<span className="pl-6 text-in-field-color text-[14px]">June 12, 2021</span>
											</div>
										</div>
										<p className="text-body-color leading-[26px] my-2">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, magnam
											sapiente corrupti ab officia unde accusantium pariatur quia doloribus
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi
											hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, mag
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi hic.
										</p>
										<a
											href={`/post/1`}
											className="capitalize text-accent-green hover:text-primary hover:font-bold transition-colors flex flex-row items-center"
										>
											Read more <FaChevronRight className="ml-1" />
										</a>
									</div>
								</div>
								{/* Post 4 */}
								<div className="bg-white p-5 flex flex-row gap-x-9 rounded-lg hover:shadow-sm hover:shadow-primary-60 transition-colors duration-500">
									<div className="basis-1/3 min-w-[296px] min-h-[324px] bg-image-placeholder overflow-hidden rounded-lg">
										<div className=""></div>
									</div>
									<div className="basis-2/3 flex flex-col justify-between items-start gap-y-4 py-1">
										<div>
											<span className="px-7 py-[7px] text-[15px] font-medium uppercase rounded-sm bg-accent-green bg-opacity-25 text-accent-green shadow-sm">
												Travel
											</span>
										</div>
										<h2 className="font-semibold text-[32px] leading-[43px] my-3">
											10 Days in Tokyo
										</h2>
										<div className="flex flex-row gap-x-4 items-center">
											<div className="w-[40px] h-[40px] bg-image-placeholder overflow-hidden rounded-full"></div>
											<span className="text-title-color font-semibold font-heading">
												Joe Iskandar
											</span>
											<div className="relative after:absolute after:content-[''] after:w-[8px] after:h-[8px] after:top-2 after:left-1 after:bg-disable-color after:rounded-full">
												<span className="pl-6 text-in-field-color text-[14px]">June 12, 2021</span>
											</div>
										</div>
										<p className="text-body-color leading-[26px] my-2">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, magnam
											sapiente corrupti ab officia unde accusantium pariatur quia doloribus
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi
											hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, mag
											excepturi in inventore consequuntur minus? Ut officia exercitationem modi hic.
										</p>
										<a
											href={`/post/1`}
											className="capitalize text-accent-green hover:text-primary hover:font-bold transition-colors flex flex-row items-center"
										>
											Read more <FaChevronRight className="ml-1" />
										</a>
									</div>
								</div>
							</div>

							{/* Pagination */}
							<div className="flex justify-center my-14">
								<button className="px-12 py-3 bg-accent-green font-medium shadow-sm text-white rounded-lg hover:bg-primary transition-colors">
									Load more
								</button>
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
