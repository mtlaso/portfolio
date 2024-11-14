import { HeroSection } from "@/app/ui/index/hero-section/hero-section";
import { WorkSection } from "@/app/ui/index/work-section";
import { NavBar } from "@/app/ui/index/nav-bar";
import { LinksSection } from "@/app/ui/index/links-section/links-section";

export default function Home() {
	return (
		<main className="min-h-screen px-4">
			<NavBar />
			<HeroSection />
			<WorkSection />
			<LinksSection />
			<p className="text-red-500 sm:text-purple-500 md:text-red-500">test</p>
		</main>
	);
}
