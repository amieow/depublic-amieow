"use client";
import FilterAllEvent from "@/components/atoms/FilterAllEvent";
import MediumCardEvent from "@/components/atoms/MediumCardEvent";
import Typography from "@/components/atoms/ui/Typography";
import RootFooter from "@/components/organisme/RootFooter";
import TopMenu from "@/components/organisme/ticket/TopMenu";
import { UPCOMING_EVENT_CONTENT_BANNER } from "@/contents/UpcomingEventContent";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
	const params = useSearchParams();
	const queryParmas = params.get("q") || "";
	const data = [
		...UPCOMING_EVENT_CONTENT_BANNER,
		...UPCOMING_EVENT_CONTENT_BANNER,
	];
	return (
		<>
			<main className="container bg-surface-100 pb-20">
				<TopMenu query={queryParmas} />
				<section className="space-y-[30px]">
					<section
						className="flex items-center pb-5 border-b border-neutral-200 justify-between gap-[20px]"
						id="filter">
						<Typography
							thick={"bolder"}
							size={"subheading2"}>
							All Event
						</Typography>
						<FilterAllEvent />
					</section>
					<section
						className="space-y-6"
						id="event-result">
						<Typography
							className={"text-tertiary-500"}
							size={"label1"}>{`${data.length} Event on result`}</Typography>
						<section
							className="flex flex-wrap gap-x-4 gap-y-6 justify-between"
							id="event">
							{data.map((item, index) => (
								<MediumCardEvent
									{...item}
									key={index}
								/>
							))}
						</section>
					</section>
				</section>
			</main>
			<RootFooter />
		</>
	);
}
