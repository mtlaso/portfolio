import Link from "next/link";

export const NavBar = () => {
	return (
		<nav className="mb-12 py-5">
			<Link href="/" passHref legacyBehavior>
				<a href="/" className="font-semibold tracking-tight hover:opacity-90">
					NomSite
				</a>
			</Link>
		</nav>
	);
};
