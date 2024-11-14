"use client";

import { Button } from "@/components/ui/button";
import { useCopyEmail } from "@/components/ui/copy-email";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaEnvelope } from "react-icons/fa6";

export const CopyEmail = () => {
	const { handleCopyEmail } = useCopyEmail();

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" onClick={handleCopyEmail}>
						<FaEnvelope />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Copier courriel</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
