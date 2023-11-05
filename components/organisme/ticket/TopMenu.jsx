import FilterAllEvent from "@/components/atoms/FilterAllEvent";
import SearchTicketQuery from "@/components/atoms/SearchTicketQuery";
import Typography from "@/components/atoms/ui/Typography";
import { IconGoldenLocation } from "@/components/atoms/ui/icon";
import { ChevronDown } from "lucide-react";
import React from "react";

const LocationSelect = () => {
	return (
		<div className="flex gap-[10px] px-[11px] py-[15px] bg-surface-500 border border-secondary-100 backdrop-blur-md rounded-[12px]">
			<IconGoldenLocation />
			<Typography
				className={"text-neutral-700"}
				thick={"medium"}>
				Location
			</Typography>
			<ChevronDown className="text-secondary-700" />
		</div>
	);
};

export default function TopMenu({ query = "" }) {
	return (
		<section
			className="flex gap-[10px] pt-10 pb-10"
			id="search">
			<SearchTicketQuery
				defaultValue={query}
				className={"bg-surface-100 w-full"}
			/>
			<LocationSelect />
		</section>
	);
}
