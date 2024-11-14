"use client";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaEnvelope } from "react-icons/fa6";
import { toast } from "sonner";

export const ShowEmail = () => {
	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText("123@email.com");
			toast("Courriel copié dans le presse-papier!");
		} catch (err) {
			toast.error("Impossible de copier le courriel dans le presse-papier");
		}
	};

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" onClick={handleClick}>
						<FaEnvelope />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Copier courriel</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
