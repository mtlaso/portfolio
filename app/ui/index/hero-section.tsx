import { BiCodeCurly } from "react-icons/bi";
import {
	FaLocationDot,
	FaRegEnvelope,
	FaLinkedin,
	FaSquareGithub,
} from "react-icons/fa6";
import { SECTIONS_MARGIN } from "../sections-margin";

export const HeroSection = () => {
	return (
		<section className={`flex flex-col gap-1 ${SECTIONS_MARGIN}`}>
			<div>
				<p className="text-4xl">Danny D.</p>
			</div>

			<div className="flex items-center gap-1">
				<BiCodeCurly />
				<p className="text-sm text-neutral-300">Développeur full stack</p>
			</div>

			<div className="flex items-center gap-1">
				<FaLocationDot />
				<p className="text-neutral-300 text-sm">QC, CAN 🍁</p>
			</div>

			<div className="flex gap-2">
				<FaRegEnvelope />
				<FaLinkedin />
				<FaSquareGithub />
			</div>
		</section>
	);
};
