import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoGoLang,
	BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import {
	RiNextjsFill,
	RiDatabase2Line,
	RiTailwindCssFill,
} from "react-icons/ri";
import type { Work, StackItem, Project } from "@/app/lib/definitions";

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
		iconColor: "#d3d3d3",
		iconSize: "24",
		title: "Next.js",
		desc: "Framework React",
	},

	{
		icon: RiTailwindCssFill,
		iconColor: "#38bdf8",
		iconSize: "24",
		title: "tailwindcss",
		desc: "Framework CSS",
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
	},
];

export const projects: Project[] = [
	{
		date: new Date(2024, 2, 0).toISOString(),
		title: "Serveur TCP en Go",
		desc: "Serveur de chat concurrent en Go permettant la communication en temps réel entre plusieurs clients, avec système de file d'attente et mini-jeu de devinettes intégré.",
		link: new URL("https://github.com/mtlaso/go-tcp-server"),
		technologies: ["Go", "TCP", "Concurrence"],
	},
	{
		date: new Date(2024, 2, 0).toISOString(),
		title: "EvaluPro",
		desc: "Application web d'évaluation de produits avec système de notation multicritères. Les utilisateurs peuvent rechercher, comparer et évaluer des produits selon différents rôles (visiteur, utilisateur, testeur, admin).",
		link: new URL("https://github.com/mtlaso/evalupro"),
		technologies: [
			"TypeScript",
			"Node.js",
			"Express.js",
			"Vue.js",
			"MariaDB",
			"Sequelize",
		],
	},
	{
		date: new Date(2023, 2, 0).toISOString(),
		title: "Clone de Trello",
		desc: "Application de gestion de tâches style Kanban. Fonctionnalités de tableaux, listes et cartes avec filtrage par date limite et drag-and-drop.",
		link: new URL("https://github.com/mtlaso/tp3-dev-web"),
		technologies: [
			"Vue.js",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB",
			"Pinia",
		],
	},
	{
		date: new Date(2022, 2, 0).toISOString(),
		title: "Clone de Google Calendar",
		desc: "Calendrier avec synchronisation en temps réel entre appareils via WebSocket. Permet la création, modification et suppression d'événements avec persistance PostgreSQL.",
		link: new URL("https://github.com/mtlaso/calendrier-nextjs"),
		technologies: [
			"Next.js",
			"TypeScript",
			"WebSocket",
			"PostgreSQL",
			"Recoil.js",
		],
	},
];

export const CONTACT = {
	EMAIL: "votre@email.com",
	LINKEDIN: "https://www.linkedin.com/in/ddem/",
	GITHUB: "https://github.com/mtlaso/",
	SOURCE_CODE: "https://github.com/mtlaso/portfolio",
} as const;
