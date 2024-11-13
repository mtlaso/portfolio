import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoGoLang,
	BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { RiNextjsFill, RiDatabase2Line } from "react-icons/ri";
import type { Work, StackItem } from "@/app/lib/definitions";

export const stackItems: StackItem[] = [
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

export const workExperience: Work[] = [
	{
		start: new Date(2024, 0, 0).toISOString(),
		company: "Cogiweb",
		title: "Analyste développeur",
		location: "Québec, QC",
		achievements: [
			"Participé à la transition d'une application monolithique C# vers des technologies web modernes",
			"Maintenu et amélioré une application legacy en C#",
			"Créé des outils internes pour accélérer le développement et la productivité de l'équipe",
			"Résolu des bugs en production, assurant la stabilité et la fiabilité des services",
		],
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
		title: "Tuteur Étudiants Informatique",
		location: "Québec, QC",
		achievements: ["Tuteur pour des étudiants en informatique"],
	},
	{
		start: new Date(2021, 2, 1).toISOString(),
		finish: new Date(2021, 7, 31).toISOString(),
		company: "RAMQ",
		title: "Technicien en gestion de la main-d'œuvre",
		location: "Québec, QC",
		achievements: [
			"Responsable de la préparation et de la récupération des équipements informatiques pour les employés entrants et sortants",
			"Assuré un soutien technique rapide et fiable aux employés",
		],
		technologies: [
			"Support technique",
			"Gestion d'équipements",
			"Service client",
		],
	},
];
