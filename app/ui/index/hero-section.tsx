import { BiCodeCurly } from "react-icons/bi";
import { FaLocationDot, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SPACING } from "@/app/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ShowEmail } from "@/app/ui/index/show-email";

export const HeroSection = () => {
	return (
		<section
			className={`${SPACING.TITLES_SPACING} ${SPACING.SECTIONS_SPACING}`}
		>
			<div>
				<p className="text-4xl">Danny D.</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-1">
					<BiCodeCurly />
					<p className="text-sm text-neutral-300">Développeur full stack</p>
				</div>

				<div className="flex items-center gap-1">
					<FaLocationDot />
					<p className="text-neutral-300 text-sm">QC, CAN 🍁</p>
				</div>

				<div className="flex gap-4">
					<Link
						target="blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: "outline", size: "icon" })}
						href="https://www.linkedin.com/in/ddem/"
					>
						<FaLinkedinIn />
					</Link>

					<ShowEmail />

					<Link
						target="blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: "outline", size: "icon" })}
						href="https://github.com/mtlaso/"
					>
						<FaGithub />
					</Link>
				</div>
			</div>
		</section>
	);
};
