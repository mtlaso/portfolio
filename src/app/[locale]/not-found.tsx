import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
	const t = useTranslations("NotFound");

	return (
		<main className="min-h-screen flex flex-col justify-center items-center gap-4">
			<h2 className="text-xl font-semibold text-center">{t("pageNotFound")}</h2>
			<p className="text-muted-foreground text-center max-w-md px-4">
				{t("description")}
			</p>
			<Button asChild className="mt-2">
				<Link href="/">{t("backHome")}</Link>
			</Button>
		</main>
	);
}
