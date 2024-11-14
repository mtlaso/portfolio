"use client";
import { toast } from "sonner";
import { CONTACT } from "@/app/lib/placeholder-data";

export const useCopyEmail = () => {
	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(CONTACT.EMAIL);
			toast.success("Courriel copié dans le presse-papier!", {
				duration: 2000,
			});
		} catch (err) {
			toast.error("Impossible de copier le courriel dans le presse-papier");
		}
	};

	return { handleCopyEmail };
};
