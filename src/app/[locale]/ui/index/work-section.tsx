import type { Project, StackItem, Work } from "@/app/[locale]/lib/definitions";
import {
	projects,
	stackItems,
	workExperience,
} from "@/app/[locale]/lib/placeholder-data";
import { SPACING } from "@/app/[locale]/ui/spacing";
import { Link } from "@/i18n/routing";
import {
	type DateTimeFormatOptions,
	useFormatter,
	useTranslations,
} from "next-intl";
import { TbExternalLink } from "react-icons/tb";

const INTL_DATE_FORMAT_OPTS = {
	year: "numeric",
	month: "short",
} satisfies DateTimeFormatOptions;

export const WorkSection = (): React.JSX.Element => {
	return (
		<section>
			<TechStackWrapper />
			<WorkExperienceWrapper />
			<PersonalProjectsWrapper />
		</section>
	);
};

const TechStackWrapper = (): React.JSX.Element => {
	const t = useTranslations("HomePage.TechStack");
	return (
		<section className={`${SPACING.SECTIONS_SPACING} ${SPACING.LARGE}`}>
			<div className={`${SPACING.SMALL} `}>
				<h2 className="font-semibold tracking-tight text-3xl">{t("title")}</h2>
				<p className="dark:text-neutral-300 text-sm">{t("subtitle")}</p>
			</div>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
				{stackItems.map((item) => (
					<StackCard item={item} key={item.title} />
				))}
			</ul>
		</section>
	);
};

const StackCard = ({
	item,
}: {
	item: StackItem;
}): React.JSX.Element => {
	const t = useTranslations("HomePage.TechStack.items");
	const tKey = `${item.translationKey}.description`;

	return (
		<li
			className="p-2.5 xl:h-28
		  flex flex-col gap-2 justify-between overflow-clip line-clamp-1
      rounded-xl border dark:border-white/10"
		>
			<p className="flex items-center gap-1">
				{<item.icon size={item.iconSize} color={item.iconColor} />}
				{item.title}
			</p>
			<p className="text-sm dark:text-neutral-300">{t(tKey)}</p>
		</li>
	);
};

const WorkExperienceWrapper = (): React.JSX.Element => {
	const t = useTranslations("HomePage.Work");

	return (
		<section className={`${SPACING.SECTIONS_SPACING} ${SPACING.LARGE}`}>
			<div className={`${SPACING.SMALL}`}>
				<h2 className="font-semibold tracking-tight text-3xl">{t("title")}</h2>
			</div>

			<ul className={`${SPACING.LARGE}`}>
				{workExperience.map((item) => (
					<WorkCard work={item} key={item.start} />
				))}
			</ul>
		</section>
	);
};

const WorkCard = ({ work }: { work: Work }): React.JSX.Element => {
	const t = useTranslations("HomePage.Work");
	const commonT = useTranslations("Common");

	const format = useFormatter();
	const startDate = format.dateTime(
		new Date(work.start),
		INTL_DATE_FORMAT_OPTS,
	);
	const endDate = work.finish
		? format.dateTime(new Date(work.finish), INTL_DATE_FORMAT_OPTS)
		: commonT("present");

	const itemsTKey = `items.${work.translationKey}`;

	return (
		<li className="grid grid-cols-1 sm:grid-cols-4 text-sm gap-2 sm:gap-4">
			<div className="col-span-1">
				<p className="capitalize text-base dark:text-neutral-500">
					{startDate} — {endDate}
				</p>
			</div>

			<div className={`col-span-3 ${SPACING.SMALL}`}>
				<div>
					<p className="text-base dark:text-neutral-100 font-semibold">
						{t(`${itemsTKey}.title`)} — {work.company}
					</p>
				</div>

				<div className={SPACING.SMALL}>
					<ul className="list-disc list-inside">
						{t.raw(`${itemsTKey}.achievements`)?.map((item: string) => (
							<li className="text-sm dark:text-neutral-300" key={item}>
								{item}
							</li>
						))}
					</ul>

					<ul className="flex flex-wrap gap-1">
						{work.technologies?.map(
							(item: string, index: number, arr: string[]) => (
								<li
									className="text-xs text-neutral-500
                hover:text-purple-700 transition-colors duration-200"
									key={item}
								>
									{item}
									{index < arr.length - 1 && <span>&nbsp;•</span>}
								</li>
							),
						)}
					</ul>
				</div>
			</div>
		</li>
	);
};

const PersonalProjectsWrapper = (): React.JSX.Element => {
	const t = useTranslations("HomePage.Projects");
	return (
		<section className={`${SPACING.SECTIONS_SPACING} ${SPACING.LARGE}`}>
			<div className={`${SPACING.SMALL}`}>
				<h2 className="font-semibold tracking-tight text-3xl">{t("title")}</h2>
				<p className="dark:text-neutral-300 text-sm">{t("subtitle")}</p>
			</div>

			<ul className={`${SPACING.LARGE}`}>
				{projects.map((item) => (
					<ProjectCard project={item} key={item.translationKey} />
				))}
			</ul>
		</section>
	);
};

const ProjectCard = ({ project }: { project: Project }): React.JSX.Element => {
	const t = useTranslations("HomePage.Projects");

	const itemsTKey = `items.${project.translationKey}`;

	return (
		<li>
			<div className={SPACING.SMALL}>
				<div>
					<Link
						href={project.link.toString()}
						target="blank"
						rel="noopener noreferrer"
						className="text-base dark:text-neutral-100 font-semibold
						flex gap-1 items-center
              hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-200"
					>
						{t(`${itemsTKey}.title`)}
						<TbExternalLink />
					</Link>
				</div>

				<div className={SPACING.SMALL}>
					<p className="text-sm dark:text-neutral-300">
						{t(`${itemsTKey}.description`)}
					</p>

					<ul className="flex flex-wrap gap-1">
						{project.technologies.map(
							(item: string, index: number, arr: string[]) => (
								<li
									className="text-xs text-neutral-500
                hover:text-purple-700 transition-colors duration-200"
									key={item}
								>
									{item}
									{index < arr.length - 1 && <span>&nbsp;•</span>}
								</li>
							),
						)}
					</ul>
				</div>
			</div>
		</li>
	);
};
