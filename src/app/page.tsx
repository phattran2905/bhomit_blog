import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="w-full bg-heroBg">
				{/* Header */}
				<header className="">
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center">
							<div>
								<img
									src=""
									alt="logo"
								/>
							</div>

							<div>
								<ul className="flex flex-row justify-between items-center gap-x-6">
									<li>
										<a
											href="#"
											className="p-2"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className=""
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className=""
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className=""
										>
											Home
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
			</div>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="">Title</h1>
				<p>Body text</p>
			</main>
		</>
	);
}
