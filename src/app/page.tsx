import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<div className="w-full bg-heroBg bg-bottom bg-no-repeat">
				<Header />

				<Hero />
			</div>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="">Title</h1>
				<p>Body text</p>
			</main>

			<Footer />
		</>
	);
}
