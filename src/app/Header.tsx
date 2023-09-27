type Props = {};
function Header({}: Props) {
	return (
		<header>
			<div className="container mx-auto">
				<div className="flex flex-row justify-between items-center py-8">
					<div>
						<a
							href="/"
							className="font-heading text-3xl font-bold text-accent-green"
						>
							Bhomit<span className="text-white">Blog.</span>
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
	);
}
export default Header;
