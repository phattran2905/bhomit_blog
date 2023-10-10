import "@/app/globals.css";
import AuthProvider from "@/components/AuthProvider";
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
	title: "BhomitBlog - Login",
	description: "BhomitBlog Administration Login",
};

type Props = {
	children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={`${raleway.className} ${roboto.className}`}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
