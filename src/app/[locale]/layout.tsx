import "@/app/[locale]/ui/globals.css";
import { inter } from "@/app/[locale]/ui/fonts";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

// @ts-ignore
export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: t("title"),
		description: t("description")
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const locale = (await params).locale;

	// biome-ignore lint/suspicious/noExplicitAny: locale exception.
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages();

	// suppressHydrationWarning -> (next-theme)
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
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
		</html>
	);
}
