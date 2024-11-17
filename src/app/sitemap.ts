import type { MetadataRoute } from "next";
import { getPathname, type Locale, routing } from "@/i18n/routing";

const HOST = "https://dnncrye.dev";

export default function sitemap(): MetadataRoute.Sitemap {
	return [getEntry("/")];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
	return {
		url: getUrl(href, routing.defaultLocale),
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((locale) => [locale, getUrl(href, locale)]),
			),
		},
	};
}

function getUrl(href: Href, locale: Locale) {
	const pathname = getPathname({ locale, href });
	return HOST + pathname;
}
