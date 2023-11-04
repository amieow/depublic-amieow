import Typography from "@/components/atoms/ui/Typography";
import React from "react";

export default function HighlightDE({ arrayTeks }) {
	return (
		<section
			className="space-y-[16px] mb-[30px] container"
			id="highlight">
			<Typography
				size={"subheading2"}
				thick={"bolder"}>
				Highlight
			</Typography>
			<ul className="list-disc text-neutral-500">
				{arrayTeks.map((text, index) => (
					<li
						className="ml-6"
						key={index}>
						<Typography
							className={"text-neutral-500 "}
							key={index}>
							{text}
						</Typography>
					</li>
				))}
			</ul>
		</section>
	);
}
