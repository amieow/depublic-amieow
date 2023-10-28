"use client";
import Typography from "@/components/atoms/ui/Typography";
import {
	formatUpperFirstchar,
	formatUpperFirstcharSplit,
} from "@/utils/formater";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }) {
	const path = usePathname();
	const mapPath = path.slice(1, path.length).split("/");
	mapPath.unshift("home");
	return (
		<main className="container px-0 bg-neutral-100">
			<div className="pt-10 flex gap-2 container">
				{mapPath.map((item, index) => {
					const label = formatUpperFirstcharSplit(item.split("-").join(" "));
					const isHaveMore = mapPath.length - 1 > index;
					return (
						<>
							<Typography
								className={
									!isHaveMore ? "text-primary-500" : "text-neutral-300"
								}
								thick={isHaveMore ? "regular" : "medium"}>
								{label}
							</Typography>
							{isHaveMore && <ChevronRight className="text-neutral-300" />}
						</>
					);
				})}
			</div>
			{children}
		</main>
	);
}
