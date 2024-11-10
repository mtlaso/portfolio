import Image from "next/image";
import Link from "next/link";
import { BiCodeCurly } from "react-icons/bi";
import {
	FaLocationDot,
	FaRegEnvelope,
	FaLinkedin,
	FaSquareGithub,
} from "react-icons/fa6";

export default function Home() {
	return (
		<main className="min-h-screen px-4">
			<NavBar />
			<HeroSection />
			<p className="text-red-500 sm:text-purple-500 md:text-red-500">test</p>
		</main>
	);
}

const NavBar = () => {
	return (
		<nav className="mb-12 py-5">
			<Link href="/" passHref legacyBehavior>
				<a href="/" className="font-semibold tracking-tight hover:opacity-90">
					NomSite
				</a>
			</Link>
		</nav>
	);
};

const HeroSection = () => {
	return (
		<section className="flex flex-col gap-1">
			<div>
				<p className="text-4xl">Danny D.</p>
			</div>

			<div className="flex items-center gap-1">
				<BiCodeCurly className="inline" />
				<p>Développeur full stack</p>
			</div>

			<div className="flex items-center gap-1">
				<FaLocationDot />
				<p>QC, CAN 🍁</p>
			</div>

			<div className="flex gap-2">
				<FaRegEnvelope />
				<FaLinkedin />
				<FaSquareGithub />
			</div>
		</section>
	);
};
