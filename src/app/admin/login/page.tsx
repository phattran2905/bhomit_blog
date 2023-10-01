import { FaLock, FaUserAlt } from "react-icons/fa";

type Props = {};
function AdminLogin({}: Props) {
	return (
		<main className="min-h-screen h-screen w-full  bg-heroBg ">
			<div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm">
				<div className="basis-1/4 bg-white shadow-xl p-10 rounded-lg">
					<h1 className="text-title-color text-[48px] mb-8 font-bold text-center uppercase">
						Login
					</h1>
					<div className="flex flex-col">
						<div className="p-4 flex flex-col gap-y-2">
							<label
								htmlFor="username"
								className="font-bold flex flex-row items-center"
							>
								<FaUserAlt
									size={12}
									className="mr-2"
								/>
								Username
							</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Enter Username"
								className="focus:outline-none p-3 text-primary border-2 border-primary-80 rounded-lg"
							/>
						</div>
						<div className="p-4 flex flex-col gap-y-2">
							<label
								htmlFor="password"
								className="font-bold flex flex-row items-center"
							>
								<FaLock
									size={12}
									className="mr-2"
								/>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter Password"
								className="focus:outline-none p-3 text-primary border-2 border-primary-80 rounded-lg"
							/>
						</div>
						<div className="px-4 py-6">
							<button className="w-full rounded-lg bg-primary font-bold font-heading text-[18px] text-white px-6 py-3 hover:bg-accent-green transition-colors">
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
export default AdminLogin;
