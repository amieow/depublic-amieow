"use client";

import Typography from "@/components/atoms/ui/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function ControllerSwipperWithTitle({
	title,
	rootLink,
	activeIndex,
	handleSlideActive,
	isButtonDisabled,
}) {
	const isPrevDisabled = isButtonDisabled("prev");
	const isNextDisabled = isButtonDisabled("next");
	const HandleSlider = (type) => {
		if (type == "next") {
			handleSlideActive(activeIndex + 1);
		} else if (type == "prev") {
			handleSlideActive(activeIndex - 1);
		}
	};
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
						onClick={() => HandleSlider("prev")}
						className="bg-surface-100 w-10 h-[10] flex items-center justify-center rounded-full backdrop-blur-[20px] text-tertiary-700 disabled:text-tertiary-300"
						disabled={isPrevDisabled}>
						<ChevronLeft />
					</button>
					<button
						onClick={() => HandleSlider("next")}
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
