import { HeroSection } from "@/app/[locale]/ui/index/hero-section/hero-section";
import { LinksSection } from "@/app/[locale]/ui/index/links-section/links-section";
import { NavBar } from "@/app/[locale]/ui/index/nav-bar";
import { WorkSection } from "@/app/[locale]/ui/index/work-section";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home(): React.JSX.Element {
	const elements: {
		el: () => React.JSX.Element;
		index: number;
	}[] = [
		{
			el: NavBar,
			index: 0,
		},
		{
			el: HeroSection,
			index: 1,
		},
		{
			el: WorkSection,
			index: 2,
		},
		{
			el: LinksSection,
			index: 3,
		},
	];

	return (
		<>
			<main className="min-h-screen max-w-3xl mx-auto px-4">
				{elements.map((el) => (
					<BlurFade key={el.index} delay={0.25 + el.index * 0.05}>
						{el.el()}
					</BlurFade>
				))}
			</main>
		</>
	);
}
