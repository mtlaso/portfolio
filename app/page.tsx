import Image from "next/image";
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
			<HeroSection />
			<p className="text-red-500 sm:text-purple-500 md:text-red-500">test</p>
		</main>
	);
}

const HeroSection = () => {
	return (
		<section className="">
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

			<div className="flex items-center gap-2">
				<FaRegEnvelope />
				<FaLinkedin />
				<FaSquareGithub />
			</div>
		</section>
	);
};
