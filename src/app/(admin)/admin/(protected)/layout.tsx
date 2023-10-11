import Sidebar from "./Sidebar";
import Header from "./Header";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex flex-row items-stretch min-h-screen bg-image-placeholder">
				<Sidebar />

				<div className="basis-11/12 relative">
					{/* Header */}
					<Header />
					{/* Main content */}
					<main className="p-8 w-full h-full">{children}</main>
				</div>
			</div>
		</>
	);
}
