import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
