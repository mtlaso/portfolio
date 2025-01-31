import { CONTACT } from "@/app/[locale]/lib/placeholder-data";
import { CopyEmail } from "@/app/[locale]/ui/index/links-section/copy-email";
import { SPACING } from "@/app/[locale]/ui/spacing";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export const LinksSection = (): React.JSX.Element => {
	const t = useTranslations("Common");
	return (
		<section className={SPACING.LARGE}>
			<div className={`${SPACING.SMALL}`}>
				<h2 className="font-semibold tracking-tight text-3xl">{t("links")}</h2>
			</div>

			<ul className="divide-y">
				<li
					className="text-sm  dark:text-neutral-300
          hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.LINKEDIN}`}
						className="flex justify-between py-1"
					>
						<p>(1)</p>
						<p className="flex gap-1 items-center">
							LinkedIn
							<TbExternalLink />
						</p>
					</Link>
				</li>

				<CopyEmail />

				<li
					className="text-sm  dark:text-neutral-300
          hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.GITHUB}`}
						className="flex justify-between py-1"
					>
						<p>(3)</p>
						<p className="flex gap-1 items-center">
							GitHub
							<TbExternalLink />
						</p>
					</Link>
				</li>

				<li
					className="text-sm  dark:text-neutral-300
          hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-200"
				>
					<Link
						target="blank"
						rel="noopener noreferrer"
						href={`${CONTACT.SOURCE_CODE}`}
						className="flex justify-between py-1"
					>
						<p>(4)</p>
						<p className="flex gap-1 items-center">
							{t("sourceCode")}
							<TbExternalLink />
						</p>
					</Link>
				</li>
			</ul>
		</section>
	);
};
