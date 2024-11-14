"use client";

import { FaCopy } from "react-icons/fa6";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyEmail } from "@/components/ui/copy-email";

export const CopyEmail = () => {
	const { handleCopyEmail } = useCopyEmail();

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<li
						className="text-sm text-neutral-300 cursor-pointer
          hover:text-purple-700	transition-colors duration-200"
						onClick={handleCopyEmail}
						onKeyDown={handleCopyEmail}
					>
						<p>
							Courriel
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
