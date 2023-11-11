"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Typography from "./ui/Typography";
import { formatRupiah, formatTanggal } from "@/utils/formater";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function DisplayPlaceAndDateCard({ place, date, className }) {
	return (
		<div
			className={cn(
				"flex items-center flex-shrink-0 gap-2 mb-2 h-[20px]",
				className,
			)}>
			<div className="flex gap-[2px] items-center">
				<Image
					src={"/icon/location.svg"}
					alt=""
					width={20}
					height={20}
				/>
				<Typography
					className="text-neutral-500 overflow-clip"
					size={"label2"}>
					{place}
				</Typography>
			</div>
			<Separator
				className=""
				orientation="vertical"
			/>
			<Typography
				size={"label2"}
				className="text-primary-500 shrink-0 overflow-clip"
				thick={"medium"}>
				{formatTanggal(date)}
			</Typography>
		</div>
	);
}

function BigCardEvent({
	image,
	date,
	price,
	title,
	place,
	description,
	id,
	...props
}) {
	const router = useRouter();
	const onClickCard = () => {
		router.push(`/ticket/detail-event?id=${id}`);
	};
	return (
		<Card
			className={
				"px-[15px] bg-white space-y-8 pt-[14.5px] h-fit pb-[13.5px] w-full max-w-[308px]"
			}
			{...props}>
			<CardHeader>
				<Image
					className="rounded-xl object-cover"
					width={282}
					height={150}
					src={image}
					alt=""
				/>
			</CardHeader>
			<CardContent className={""}>
				<DisplayPlaceAndDateCard
					place={place}
					date={date}
				/>
				<Typography
					className="mb-1 text-primary-900 "
					thick={"bolder"}
					size={"paragraf1"}>
					{title}
				</Typography>
				<Typography
					size={"label1"}
					className={"text-tertiary-300 mb-4 line-clamp-3"}>
					{description}
				</Typography>
				<Typography
					thick="bold"
					className="text-primary-500 mb-4">
					{formatRupiah(price)}{" "}
					<Typography
						as="span"
						thick="medium"
						size={"paragraf2"}
						className="text-tertiary-500 -translate-x-1">
						{`/ 1 Person`}
					</Typography>
				</Typography>
				<Button
					onClick={onClickCard}
					size="extraSmall"
					className="bg-success-50 rounded-xl w-full px-5 text-success-900 font-medium">
					Tersedia
				</Button>
			</CardContent>
		</Card>
	);
}

export default BigCardEvent;
