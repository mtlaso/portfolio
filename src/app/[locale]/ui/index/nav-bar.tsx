import {
	LocaleToggleSkeleton,
	ModeToggleSkeleton,
} from "@/app/[locale]/ui/skeletons";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "@/i18n/routing";
import { Suspense } from "react";
import { TbExternalLink, TbLink } from "react-icons/tb";

export const NavBar = () => {
	return (
		<nav className="mb-12 py-5 flex items-center gap-4">
			<Link href={"/"} className="font-semibold tracking-tight">
				dnncrye
			</Link>
			<Link
				target="_blank"
				href={"https://bocal.dnncrye.dev"}
				className="flex gap-1 items-center font-semibold tracking-tight"
			>
				bocal
				<TbExternalLink />
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
