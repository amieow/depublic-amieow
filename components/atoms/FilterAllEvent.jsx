"use client";
import React from "react";
import { IconDate, IconPriceTag, IconSetting } from "./ui/icon";
import Typography from "./ui/Typography";

export default function FilterAllEvent() {
	const FILTER_EVENT = [
		{
			icon: IconSetting,
			label: "Filter",
			onClickFilter: () => {},
		},
		{
			icon: IconDate,
			label: "Date",
			onClickFilter: () => {},
		},
		{
			icon: IconPriceTag,
			label: "Price",
			onClickFilter: () => {},
		},
	];
	return (
		<div className="flex gap-[8px] flex-wrap-reverse w-fit flex-row-reverse">
			{FILTER_EVENT.reverse().map((item, index) => (
				<div
					onClick={item.onClickFilter}
					key={index}
					className="flex gap-[6px] px-5 py-[10px] border border-neutral-100 rounded-[40px] ">
					<item.icon />
					<Typography>{item.label}</Typography>
				</div>
			))}
		</div>
	);
}
