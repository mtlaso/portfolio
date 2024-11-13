import type { ReactElement } from "react";
import { SPACING } from "@/app/ui/spacing";
import { stackItems, workExperience } from "@/app/lib/placeholder-data";
import { StackItem, Work } from "@/app/lib/definitions";
import { date } from "@/app/lib/utils/date";

export const WorkSection = () => {
	return (
		<section className={`${SPACING.SECTIONS_SPACING}`}>
			<TechStackWrapper />
			<WorkExperienceWrapper />
		</section>
	);
};

const WorkExperienceWrapper = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLE_SPACING}`}>
				<h2 className="font-semibold tracking-tight text-3xl">Emplois</h2>
			</div>

			<ul>
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
		<li>
			<div>
				<p className="capitalize text-sm text-neutral-300">
					{startDate} — {endDate}
				</p>

				<p className="capitalize text-sm text-neutral-300">
					{work.title} — {work.company}
				</p>
			</div>
		</li>
	);
};

const TechStackWrapper = () => {
	return (
		<section
			className={`${SPACING.SECTIONS_SPACING} ${SPACING.INSIDE_SECTIONS_SPACING}`}
		>
			<div className={`${SPACING.TITLE_SPACING} `}>
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
			className="space-y-1 p-2.5 
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
