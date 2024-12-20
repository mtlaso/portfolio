import { HeroSection } from "@/app/[locale]/ui/index/hero-section/hero-section";
import { LinksSection } from "@/app/[locale]/ui/index/links-section/links-section";
import { NavBar } from "@/app/[locale]/ui/index/nav-bar";
import { WorkSection } from "@/app/[locale]/ui/index/work-section";

export default function Home() {
	return (
		<main className="min-h-screen max-w-2xl mx-auto px-4">
			<NavBar />
			<HeroSection />
			<WorkSection />
			<LinksSection />
		</main>
	);
}
