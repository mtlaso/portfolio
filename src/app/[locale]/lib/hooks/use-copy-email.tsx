"use client";
import { CONTACT } from "@/app/[locale]/lib/placeholder-data";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const useCopyEmail = () => {
	const t = useTranslations("Common");

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(CONTACT.EMAIL);
			toast.success(t("emailCopied"), {
				duration: 2000,
			});
		} catch (err) {
			toast.error("Impossible de copier le courriel dans le presse-papier");
		}
	};

	return { handleCopyEmail };
};
