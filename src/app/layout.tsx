import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-heading",
});
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-body",
});

export const metadata: Metadata = {
	title: "Bhomit Blog",
	description: "Welcome to Bhomit Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${raleway.className} ${roboto.className}`}>{children}</body>
		</html>
	);
}
