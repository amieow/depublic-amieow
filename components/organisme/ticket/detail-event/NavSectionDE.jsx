import { Button } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const DATA_SECTION_DETAIL_EVENT = [
	{
		label: "Summary",
		link: "#summary",
		active: true,
	},
	{
		label: "Highlighted",
		link: "#highlighted",
	},
	{
		label: "Package",
		link: "#package",
	},
	{
		label: "Location",
		link: "#location",
	},
	{
		label: "Order",
		link: "#order",
	},
];

export default function NavSectionDetailEvent({
	dataSection = DATA_SECTION_DETAIL_EVENT,
}) {
	return (
		<section className="flex gap-10 pr-0 border-b-2 border-neutral-200 justify-between container mb-6">
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={40}
				grabCursor={true}>
				{dataSection.map((item, index) => (
					<SwiperSlide key={index}>
						<Button
							key={index}
							className={cn(
								"border-0 border-primary-700 rounded-none shadow-none text-neutral-300 font-normal px-0 py-6",
								{
									"border-b text-primary-700 font-bold": item.active,
								},
							)}
							asChild={true}
							variant={"outline"}>
							<Link href={item.link}>{item.label}</Link>
						</Button>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
