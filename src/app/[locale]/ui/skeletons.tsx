import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { Moon, Sun } from "lucide-react";

export const ModeToggleSkeleton = () => {
	return (
		<Button variant="outline" size="icon" className="animate-pulse">
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
};

export const LocaleToggleSkeleton = () => {
	return (
		<Button variant="outline" size="icon">
			<Languages className="h-[1.2rem] w-[1.2rem]" />
		</Button>
	);
};
