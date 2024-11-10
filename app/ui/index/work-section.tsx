import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoGoLang,
	BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { RiNextjsFill, RiDatabase2Line } from "react-icons/ri";
import type { IconType } from "react-icons";
import type { ReactElement } from "react";
import { SECTIONS_MARGIN } from "../sections-margin";

interface StackItem {
	icon: IconType;
	iconColor?: string;
	iconSize?: string;
	title: string;
	desc: string;
}

export const WorkSection = () => {
	return (
		<section className={`${SECTIONS_MARGIN}`}>
			<StackWrapper />
		</section>
	);
};

const StackWrapper = () => {
	const stackItems: StackItem[] = [
		{
			icon: BiLogoTypescript,
			iconColor: "#3178c6",
			iconSize: "24",
			title: "TypeScript",
			desc: "JavaScript avec une syntaxe pour les types",
		},
		{
			icon: BiLogoReact,
			iconColor: "#60c7de",
			iconSize: "24",
			title: "React",
			desc: "Librairie JavaScript d'interfaces utilisateur",
		},
		{
			icon: RiNextjsFill,
			iconColor: "white",
			iconSize: "24",
			title: "Next.js",
			desc: "Framework React",
		},
		{
			icon: BiLogoGoLang,
			iconSize: "28",
			title: "Golang",
			desc: "Language de programmation",
		},
		{
			icon: BiLogoNodejs,
			iconColor: "#528a46",
			iconSize: "24",
			title: "Node.js",
			desc: "Environnement d'exécution JavaScript",
		},
		{
			icon: RiDatabase2Line,
			iconColor: "#336791",
			iconSize: "24",
			title: "SQL",
			desc: "Bases de données SQL/NoSQL",
		},
		{
			icon: TbBrandCSharp,
			iconColor: "purple",
			iconSize: "24",
			title: "C#",
			desc: "Language de programmation",
		},
	];
	return (
		<section className="">
			<div className="space-y-4 mb-10">
				<h2 className="font-semibold tracking-tight text-3xl">Technologies</h2>
				<p className="text-neutral-300 text-sm">
					Quelques unes des technologies sur les quelles je me spécialise.
				</p>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{stackItems.map((item) => (
					<StackCard
						key={item.title}
						icon={<item.icon size={item.iconSize} color={item.iconColor} />}
						title={item.title}
						desc={item.desc}
					/>
				))}
			</ul>
		</section>
	);
};

const StackCard = ({
	icon,
	title,
	desc,
}: {
	icon: ReactElement;
	title: string;
	desc: string;
}) => {
	return (
		<li
			className="space-y-1 p-2.5 
			grid grid-rows-subgrid row-span-2
      rounded-xl border border-transparent bg-neutral-800
      hover:bg-neutral-700 hover:border-neutral-600 transition-colors duration-200"
		>
			<p className="flex items-center gap-1">
				{icon}
				{title}
			</p>
			<p className="text-sm text-neutral-300">{desc}</p>
		</li>
	);
};
