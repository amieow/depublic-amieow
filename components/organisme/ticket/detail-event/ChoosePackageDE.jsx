"use client";
import Typography from "@/components/atoms/ui/Typography";
import { CHOOSE_PACKAGE_MENU } from "@/contents/DetailEventPackage";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
function CardChoosePackageDE({ dayCode, date, selected = false }) {
	const { numberDate = "30", month = "Aug" } = date;
	return (
		<div
			className={cn(
				"px-[8px] py-[20px] cursor-pointer flex flex-col items-center gap-2 rounded-md border border-b border-neutral-300",
				{
					"border-secondary-300 bg-surface-100": selected,
				},
			)}>
			<Typography
				className={"text-neutral-300"}
				size={"label1"}>
				{dayCode}
			</Typography>
			<Typography
				size={"label1"}
				className={cn("text-neutral-300", { "text-secondary-700": selected })}>
				{`${numberDate} ${month}`}
			</Typography>
		</div>
	);
}

export default function ChoosePackageDE({ rootLink = "" }) {
	const isLinkAvailable = rootLink.startsWith("/");
	const [selected, setSelected] = useState(0);
	return (
		<section className="py-[40px] space-y-[24px]">
			<div className="flex justify-between container">
				<Typography
					thick={"bolder"}
					size={"subheading2"}>
					Choose Package
				</Typography>
				<Typography
					className={"text-primary-700"}
					size={"label1"}
					thick={"medium"}>
					{isLinkAvailable ? <Link href={rootLink}>See More</Link> : "see More"}
				</Typography>
			</div>
			<div className="container pr-0">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={10}
					grabCursor={true}>
					{CHOOSE_PACKAGE_MENU.map((item, index) => (
						<SwiperSlide
							onClick={() => setSelected(index)}
							key={index}>
							<CardChoosePackageDE
								{...item}
								key={index}
								selected={selected == index}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
