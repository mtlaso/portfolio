"use client";

import { Button } from "@/components/ui/button";
import { useCopyEmail } from "@/app/[locale]/lib/hooks/use-copy-email";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaEnvelope } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export const CopyEmail = () => {
	const { handleCopyEmail } = useCopyEmail();
	const t = useTranslations("Common");

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" onClick={handleCopyEmail}>
						<FaEnvelope />
					</Button>
				</TooltipTrigger>
				<TooltipContent>{t("copyEmail")}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
