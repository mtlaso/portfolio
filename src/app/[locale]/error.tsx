"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// biome-ignore lint/suspicious/noShadowRestrictedNames: error.tsx
export default function Error({
	_error,
	reset,
}: {
	_error: Error & { digest?: string };
	reset: () => void;
}) {
	const t = useTranslations("Error");
	// TODO: report errs
	// useEffect(() => {
	// 	// console.error(error);
	// }, [error]);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-4">
			<h1 className="text-lg font-bold">{t("somethingWentWrong")}</h1>
			<Button onClick={() => reset()}>{t("retry")}</Button>
		</div>
	);
}
