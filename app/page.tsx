import { HeroSection } from "./ui/index/hero-section";
import { WorkSection } from "./ui/index/work-section";
import { NavBar } from "./ui/index/nav-bar";

export default function Home() {
	return (
		<main className="min-h-screen px-4">
			<NavBar />
			<HeroSection />
			<WorkSection />
			<p className="text-red-500 sm:text-purple-500 md:text-red-500">test</p>
		</main>
	);
}
