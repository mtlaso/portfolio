import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	// Match only internationalized pathnames
	// matcher: ["/", "/(en|fr)/:path*"],

	matcher: [
		// Match only internationalized pathnames
		"/",
		"/(en|fr)/:path*",

		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		"/((?!api|_next|_vercel|.*\\..*).*)",
		// However, match all pathnames within `/users`, optionally with a locale prefix
		// "/([\\w-]+)?/users/(.+)",
	],
};
