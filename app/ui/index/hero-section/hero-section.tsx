import { BiCodeCurly } from "react-icons/bi";
import { FaLocationDot, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SPACING } from "@/app/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CopyEmail } from "@/app/ui/index/hero-section/copy-email";
import { CONTACT } from "@/app/lib/placeholder-data";

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
					<p className="text-neutral-300 text-sm">Qc, CAN 🍁</p>
				</div>

				<div className="flex gap-4">
					<Link
						target="blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: "outline", size: "icon" })}
						href={`${CONTACT.LINKEDIN}`}
					>
						<FaLinkedinIn />
					</Link>

					<CopyEmail />

					<Link
						target="blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: "outline", size: "icon" })}
						href={`${CONTACT.GITHUB}`}
					>
						<FaGithub />
					</Link>
				</div>
			</div>
		</section>
	);
};
