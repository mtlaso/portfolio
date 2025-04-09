import type { Project, StackItem, Work } from "@/app/[locale]/lib/definitions";
import {
	BiLogoGoLang,
	BiLogoNodejs,
	BiLogoReact,
	BiLogoTypescript,
} from "react-icons/bi";
import {
	RiDatabase2Line,
	RiNextjsFill,
	RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

export const stackItems: StackItem[] = [
	{
		icon: BiLogoTypescript,
		iconColor: "#3178c6",
		iconSize: "24",
		title: "TypeScript",
		translationKey: "typescript",
		desc: "JavaScript avec une syntaxe pour les types",
	},
	{
		icon: BiLogoReact,
		iconColor: "#60c7de",
		iconSize: "24",
		title: "React",
		translationKey: "react",
		desc: "Librairie JavaScript d'interfaces utilisateur",
	},
	{
		icon: RiNextjsFill,
		iconColor: "#d3d3d3",
		iconSize: "24",
		title: "Next.js",
		translationKey: "nextjs",
		desc: "Framework React",
	},

	{
		icon: RiTailwindCssFill,
		iconColor: "#38bdf8",
		iconSize: "24",
		title: "Tailwind CSS",
		translationKey: "tailwindcss",
		desc: "Framework CSS",
	},

	{
		icon: BiLogoGoLang,
		iconSize: "28",
		title: "Golang",
		translationKey: "golang",
		desc: "Language de programmation",
	},
	{
		icon: BiLogoNodejs,
		iconColor: "#528a46",
		iconSize: "24",
		title: "Node.js",
		translationKey: "nodejs",
		desc: "Environnement d'exécution JavaScript",
	},
	{
		icon: RiDatabase2Line,
		iconColor: "#336791",
		iconSize: "24",
		title: "SQL",
		translationKey: "sql",
		desc: "Bases de données SQL/NoSQL",
	},
	{
		icon: TbBrandCSharp,
		iconColor: "purple",
		iconSize: "24",
		title: "C#",
		translationKey: "csharp",
		desc: "Language de programmation",
	},
];

export const workExperience: Work[] = [
	{
		start: new Date(2024, 1, 0).toISOString(),
		finish: new Date(2024, 10, 10).toISOString(),
		company: "Cogiweb",
		translationKey: "cogiweb",
		location: "Québec, QC",
		technologies: [
			"Vue.js",
			"TypeScript",
			"C#",
			".NET Core",
			"ASP .NET",
			"SQL",
		],
	},
	{
		start: new Date(2021, 0, 1).toISOString(),
		finish: new Date(2021, 11, 31).toISOString(),
		company: "Cégep Garneau",
		location: "Québec, QC",
		translationKey: "garneau",
	},
	{
		start: new Date(2021, 2, 1).toISOString(),
		finish: new Date(2021, 7, 31).toISOString(),
		company: "RAMQ",
		location: "Québec, QC",
		translationKey: "ramq",
	},
];

export const projects: Project[] = [
	{
		date: new Date(2025, 1, 0).toISOString(),
		link: new URL("https://bocal.fyi/"),
		translationKey: "bocal",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Auth.js",
			"next-intl",
			"PostgreSQL",
			"Drizzle ORM",
			"RSS/Atom",
		],
	},
	{
		date: new Date(2024, 2, 0).toISOString(),
		link: new URL("https://github.com/mtlaso/go-tcp-server"),
		translationKey: "go-tcp-server",
		technologies: ["Go", "TCP"],
	},
	{
		date: new Date(2024, 2, 0).toISOString(),
		link: new URL("https://github.com/mtlaso/evalupro"),
		translationKey: "evalupro",
		technologies: [
			"TypeScript",
			"Node.js",
			"Express.js",
			"Vue.js",
			"MariaDB",
			"Sequelize",
		],
	},
];

export const CONTACT = {
	EMAIL: "danny@dnncrye.dev",
	LINKEDIN: "https://www.linkedin.com/in/ddem/",
	GITHUB: "https://github.com/mtlaso/",
	SOURCE_CODE: "https://github.com/mtlaso/portfolio",
} as const;
