import { DisplayPlaceAndDateCard } from "@/components/atoms/BigCardEvent";
import Typography from "@/components/atoms/ui/Typography";
import { formatRupiah } from "@/utils/formater";
import React from "react";
import BluredWhenLogout from "./BluredWhenLogout";

export default function HeroDE({ place, date, title, price, description }) {
	const { day = "DAY", month = "MON TANGGAL" } = date || {};
	return (
		<section
			className="space-y-[20px] mb-8 container"
			id="hero">
			<div className="space-y-[10px]">
				<DisplayPlaceAndDateCard
					className={"m-0"}
					place={place}
					day={day}
					month={month}
				/>
				<Typography
					thick={"bold"}
					size={"headline2"}>
					{title}
				</Typography>
			</div>
			<BluredWhenLogout>
				<div className="flex gap-10 justify-between">
					<Typography
						className={"max-w-[294px] text-justify text-tertiary-500"}>
						{description}
					</Typography>
					<div className="space-y-[6px] text-right">
						<Typography
							thick={"medium"}
							size={"label1"}>
							Starting From
						</Typography>
						<Typography
							className={"text-primary-500"}
							size={"subheading2"}
							thick={"bolder"}>
							{formatRupiah(price)}
						</Typography>
					</div>
				</div>
			</BluredWhenLogout>
		</section>
	);
}
