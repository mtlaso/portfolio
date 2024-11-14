export const date = {
	format: (
		date: string,
		local?: Intl.LocalesArgument,
		opts?: Intl.DateTimeFormatOptions,
	): string => {
		return new Intl.DateTimeFormat(
			local ?? "fr-CA",
			opts ?? {
				year: "numeric",
				month: "short",
			},
		).format(new Date(date));
	},
};
