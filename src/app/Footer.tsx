import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Props = {};
function Footer({}: Props) {
	return (
		<footer className="w-full bg-footerBg bg-center">
			<div className="container mx-auto">
				<div className="py-20 flex flex-col divide-y-2 divide-solid gap-y-10">
					<div>
						<a
							href=""
							className="text-accent-green font-bold text-[48px]"
						>
							Bhomit<span className="text-white">Blog.</span>
						</a>
					</div>
					<div className="py-10 flex flex-row justify-between items-center">
						<div>
							<ul className="flex flex-row gap-x-2 text-white">
								<li className="text-[18px] font-medium">2023</li>
								<li>|</li>
								<li>All rights reversed by BhomitBlog.</li>
							</ul>
						</div>
						<ul className="flex flex-row gap-x-6 items-center py-3">
							<li>
								<a
									href="#"
									className="p-3 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
								>
									<FaFacebookF
										size={16}
										className="inline-block"
									/>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="p-3 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
								>
									<FaTwitter
										size={16}
										className="inline-block"
									/>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="p-3 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
								>
									<FaLinkedinIn
										size={16}
										className="inline-block"
									/>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="p-3 text-accent-green border-2 border-accent-green rounded-full hover:bg-accent-green hover:text-white transition-colors"
								>
									<FaInstagram
										size={16}
										className="inline-block"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
