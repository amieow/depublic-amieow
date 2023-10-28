"use client";

import Typography from "@/components/atoms/ui/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ControllerSwipperWithTitle({ title, rootLink }) {
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	return (
		<div className="flex justify-between container">
			<Typography
				thick="bold"
				size="subheading2">
				{title}
			</Typography>
			<div className="flex gap-4 items-center">
				<div className="flex gap-5">
					<button
						className="bg-surface-100 w-10 h-[10] flex items-center justify-center rounded-full backdrop-blur-[20px] text-tertiary-700 disabled:text-tertiary-300"
						disabled={isPrevDisabled}>
						<ChevronLeft />
					</button>
					<button
						className="bg-surface-100 w-10 h-[10] flex items-center justify-center rounded-full backdrop-blur-[20px] text-tertiary-700 disabled:text-tertiary-300"
						disabled={isNextDisabled}>
						<ChevronRight />
					</button>
				</div>

				<Link href={rootLink}>
					<Typography
						size="label1"
						thick="medium">
						See All
					</Typography>
				</Link>
			</div>
		</div>
	);
}

export { ControllerSwipperWithTitle };
