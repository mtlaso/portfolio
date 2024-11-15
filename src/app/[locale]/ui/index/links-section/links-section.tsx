import { CONTACT } from "@/app/[locale]/lib/placeholder-data";
import { CopyEmail } from "@/app/[locale]/ui/index/links-section/copy-email";
import { SPACING } from "@/app/[locale]/ui/spacing";
import Link from "next/link";

export const LinksSection = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLES_SPACING} `}>
				<h2 className="font-semibold tracking-tight text-3xl">Liens</h2>
			</div>

			<ul className={`divide-y ${SPACING.TITLES_SPACING}`}>
				<li
					className="text-sm dark:text-neutral-300
          hover:text-purple-700	transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.LINKEDIN}`}
					>
						<p>
							LinkedIn
							<span className="text-purple-700">&nbsp;↗</span>
						</p>
					</Link>
				</li>

				<CopyEmail />

				<li
					className="text-sm dark:text-neutral-300
          hover:text-purple-700	transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.GITHUB}`}
					>
						<p>
							GitHub
							<span className="text-purple-700">&nbsp;↗</span>
						</p>
					</Link>
				</li>

				<li
					className="text-sm dark:text-neutral-300
          hover:text-purple-700	transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.SOURCE_CODE}`}
					>
						<p>
							Code source
							<span className="text-purple-700">&nbsp;↗</span>
						</p>
					</Link>
				</li>
			</ul>
		</section>
	);
};
