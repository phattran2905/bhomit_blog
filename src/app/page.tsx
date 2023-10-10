import Home from "@/app/(client)/Home";
import Header from "@/app/(client)/Header";
import Hero from "@/app/(client)/Hero";
import Footer from "@/app/(client)/Footer";
import AuthProvider from "@/components/AuthProvider";

export default function App() {
	return (
		<AuthProvider>
			<div className="w-full bg-heroBg bg-bottom bg-no-repeat">
				<Header />
				<Hero />
			</div>
			<Home />
			<Footer />
		</AuthProvider>
	);
}
