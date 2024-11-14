export const date = {
	format: (date: string): string => {
		return new Intl.DateTimeFormat("fr-CA", {
			year: "numeric",
			month: "short",
		}).format(new Date(date));
	},
};
