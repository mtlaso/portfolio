import { CONTACT } from "@/app/[locale]/lib/placeholder-data";
import { CopyEmail } from "@/app/[locale]/ui/index/hero-section/copy-email";
import { SPACING } from "@/app/[locale]/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BiCodeCurly } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";

export const HeroSection = () => {
	const t = useTranslations("HomePage.Hero");

	return (
		<section className={`${SPACING.SMALL} ${SPACING.SECTIONS_SPACING}`}>
			<div>
				<p className="text-4xl font-semibold">Danny D. 👋</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-1">
					<BiCodeCurly />
					<p className="text-sm dark:text-neutral-300">{t("role")}</p>
				</div>

				<div className="flex items-center gap-1">
					<FaLocationDot />
					<p className="dark:text-neutral-300 text-sm">{t("location")}</p>
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
