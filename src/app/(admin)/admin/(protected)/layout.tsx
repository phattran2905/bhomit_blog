import { FaBell } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex flex-row items-stretch min-h-screen bg-image-placeholder">
				<Sidebar />

				<div className="basis-11/12 relative">
					{/* Header */}
					<div className="bg-white border-b p-4 border-b-disable-color flex flex-row justify-end items-center">
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
					<main className="p-8">{children}</main>
				</div>
			</div>
		</>
	);
}
