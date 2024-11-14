import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Suspense } from "react";

export const NavBar = () => {
	return (
		<nav className="mb-12 py-5 flex items-center gap-4">
			<Link href="/" passHref legacyBehavior>
				<a href="/" className="font-semibold tracking-tight hover:opacity-90">
					NomSite
				</a>
			</Link>
			<ModeToggle />
		</nav>
	);
};
