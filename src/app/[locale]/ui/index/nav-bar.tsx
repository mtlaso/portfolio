import {
	LocaleToggleSkeleton,
	ModeToggleSkeleton,
} from "@/app/[locale]/ui/skeletons";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "@/i18n/routing";
import { Suspense } from "react";

export const NavBar = () => {
	return (
		<nav className="mb-12 py-5 flex items-center gap-4">
			<Link href={"/"} className="font-semibold tracking-tight">
				NomSite
			</Link>
			<Suspense fallback={<ModeToggleSkeleton />}>
				<ModeToggle />
			</Suspense>
			<Suspense fallback={<LocaleToggleSkeleton />}>
				<LocaleToggle />
			</Suspense>
		</nav>
	);
};
