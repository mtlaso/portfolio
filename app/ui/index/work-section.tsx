import { SPACING } from "@/app/ui/spacing";
import {
	projects,
	stackItems,
	workExperience,
} from "@/app/lib/placeholder-data";
import type { Project, StackItem, Work } from "@/app/lib/definitions";
import { date } from "@/app/lib/utils/date";
import Link from "next/link";

export const WorkSection = () => {
	return (
		<section>
			<TechStackWrapper />
			<WorkExperienceWrapper />
			<PersonalProjectsWrapper />
		</section>
	);
};

const PersonalProjectsWrapper = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLES_SPACING}`}>
				<h2 className="font-semibold tracking-tight text-3xl">Projets</h2>
				<p className="text-neutral-300 text-sm">Quelques projets personnels.</p>
			</div>

			<ul className={`${SPACING.INSIDE_SECTIONS_SPACING}`}>
				{projects.map((item) => (
					<ProjectCard project={item} key={item.title} />
				))}
			</ul>
		</section>
	);
};

const ProjectCard = ({ project }: { project: Project }) => {
	const projectDate = date.format(project.date, "fr-CA", {
		year: "numeric",
		month: undefined,
		day: undefined,
	});

	return (
		<li>
			<Link
				href={project.link.toString()}
				target="blank"
				rel="noopener noreferrer"
				className="grid grid-cols-1 sm:grid-cols-4 text-sm gap-2 sm:gap-4"
			>
				<div className="col-span-1">
					<p className="capitalize text-sm text-neutral-500">{projectDate} ~</p>
				</div>

				<div className="col-span-3 grid gap-2">
					<div className={`${SPACING.TITLES_SPACING}`}>
						<p className="capitalize text-base text-neutral-100 font-semibold">
							{project.title}
							<span className="text-purple-700">&nbsp;↗</span>
						</p>

						<p className="text-justify text-sm text-neutral-300">
							{project.desc}
						</p>
					</div>

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
			</Link>
		</li>
	);
};

const WorkExperienceWrapper = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLES_SPACING}`}>
				<h2 className="font-semibold tracking-tight text-3xl">Emplois</h2>
			</div>

			<ul className={`${SPACING.INSIDE_SECTIONS_SPACING}`}>
				{workExperience.map((item) => (
					<WorkCard work={item} key={item.start} />
				))}
			</ul>
		</section>
	);
};

const WorkCard = ({ work }: { work: Work }) => {
	const startDate = date.format(work.start);
	const endDate = work.finish ? date.format(work.finish) : "Présent";

	return (
		<li className="grid grid-cols-1 sm:grid-cols-4 text-sm gap-2 sm:gap-4">
			<div className="col-span-1">
				<p className="capitalize text-sm text-neutral-500">
					{startDate} — {endDate}
				</p>
			</div>

			<div className="col-span-3 grid gap-2">
				<div className={`${SPACING.TITLES_SPACING}`}>
					<p className="capitalize text-base text-neutral-100 font-semibold">
						{work.title} — {work.company}
					</p>

					<ul className="list-[katakana] list-inside marker:text-purple-700">
						{work.achievements?.map((item: string) => (
							<li className="text-justify text-sm text-neutral-300" key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>

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
		</li>
	);
};

const TechStackWrapper = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLES_SPACING} `}>
				<h2 className="font-semibold tracking-tight text-3xl">Technologies</h2>
				<p className="text-neutral-300 text-sm">
					Quelques unes des technologies sur les quelles je me spécialise.
				</p>
			</div>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
}) => {
	return (
		<li
			className="p-2.5 
			grid grid-rows-subgrid row-span-2
      rounded-xl border border-transparent bg-neutral-800
      hover:bg-neutral-700 hover:border-neutral-600 transition-colors duration-200"
		>
			<p className="flex items-center gap-1">
				{<item.icon size={item.iconSize} color={item.iconColor} />}
				{item.title}
			</p>
			<p className="text-sm text-neutral-300">{item.desc}</p>
		</li>
	);
};
