import Sidebar from "./Sidebar";
import Header from "./Header";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="min-w-full min-h-full flex flex-row item-stretch">
				<Sidebar />

				<div className="w-full relative bg-image-placeholder">
					{/* Header */}
					<Header />
					{/* Main content */}
					<main className="p-8 w-full">{children}</main>
				</div>
			</div>
		</>
	);
}
