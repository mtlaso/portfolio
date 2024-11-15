import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "@/i18n/routing";

export const NavBar = () => {
	return (
		<nav className="mb-12 py-5 flex items-center gap-4">
			<Link href={"/"} className="font-semibold tracking-tight">
				NomSite
			</Link>
			<ModeToggle />
		</nav>
	);
};
