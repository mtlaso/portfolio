import "@/app/[locale]/ui/globals.css";
import { inter } from "@/app/[locale]/ui/fonts";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

// @ts-ignore
export async function generateMetadata({
	params,
}: { params: Promise<{ locale: string }> }): Promise<{
	title: string;
	description: string;
}> {
	const locale = (await params).locale;
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: t("title"),
		description: t("description"),
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>): Promise<React.JSX.Element> {
	const locale = (await params).locale;

	// biome-ignore lint/suspicious/noExplicitAny: locale exception.
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages();

	// suppressHydrationWarning -> (next-theme)
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.className} antialiased relative`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
			<Script
				defer
				data-site-id="dnncrye.dev"
				src="https://assets.onedollarstats.com/tracker.js"
			/>
		</html>
	);
}
