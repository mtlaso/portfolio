"use client";

import { useEffect, useRef, useState } from "react";

export function BlobFollowingCursor(): React.JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// wait 500ms before starting the animation
		setTimeout(() => {
			setIsLoaded(true);
		}, 500);

		const onMouseMove = (e: MouseEvent): void => {
			if (ref.current) {
				ref.current.animate(
					{
						left: `${e.clientX}px`,
						top: `${e.clientY}px`,
					},
					{
						duration: 3000,
						fill: "forwards",
					},
				);
			}
		};

		document.addEventListener("mousemove", onMouseMove);

		return (): void => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	if (!isLoaded) {
		return <></>;
	}

	return (
		<>
			<div
				ref={ref}
				className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
          rounded-full h-32 -z-10 bg-blend-multiply
          bg-linear-to-b from-purple-200 to-purple-700 dark:from-purple-700 from-10% dark:to-zinc-900
          animate-blob aspect-square"
			/>
			<div className="fixed inset-0 -z-10 backdrop-blur-md backdrop-hue-rotate-90 dark:hue-rotate-180" />
		</>
	);
}
