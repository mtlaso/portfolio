"use client";

import { useCopyEmail } from "@/app/[locale]/lib/hooks/use-copy-email";
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import { FaCopy } from "react-icons/fa6";

export const CopyEmail = () => {
	const { handleCopyEmail } = useCopyEmail();
	const t = useTranslations("Common");

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<li
						className="text-sm  flex justify-between py-1 dark:text-neutral-300 cursor-pointer
          hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-200"
						onClick={handleCopyEmail}
						onKeyDown={handleCopyEmail}
					>
						<p>(2)</p>
						<p>
							{t("email")}
							<span className="text-purple-700">
								&nbsp;
								<FaCopy className="inline" />
							</span>
						</p>
					</li>
				</TooltipTrigger>
			</Tooltip>
		</TooltipProvider>
	);
};
