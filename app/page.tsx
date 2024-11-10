import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<p className="text-red-500 sm:text-purple-500">test</p>
		</main>
	);
}

const HeroSection = () => {
	return (
		<section className="">
			<p>Danny D.</p>
			<p>
				Bonjour 👋. Je suis un développeur web full-stack spécialisé dans le
				développement d'applications web modernes.
			</p>
		</section>
	);
};
