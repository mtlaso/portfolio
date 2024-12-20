import type { IconType } from "react-icons";

export interface StackItem {
	icon: IconType;
	iconColor?: string;
	iconSize?: string;
	title: string;
	translationKey: string;
	desc: string;
}

export interface Work {
	/**
	 * ISO string format.
	 * @example
	 * ```ts
	 * new Date(2024, 0, 0).toISOString()
	 * "2023-12-31T05:00:00.000Z"
	 * ```
	 */
	start: string;
	/**
	 * ISO string format.
	 * @example
	 * ```ts
	 * new Date(2024, 0, 0).toISOString()
	 * "2023-12-31T05:00:00.000Z"
	 * ```
	 */
	finish?: string;
	translationKey: string;
	company: string;
	location: string;
	technologies?: string[];
}

export interface Project {
	/**
	 * ISO string format.
	 * @example
	 * ```ts
	 * new Date(2024, 0, 0).toISOString()
	 * "2023-12-31T05:00:00.000Z"
	 * ```
	 */
	date: string;
	translationKey: string;
	link: URL;
	technologies: string[];
}
