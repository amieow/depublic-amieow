"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Typography from "./ui/Typography";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { DisplayPlaceAndDateCard } from "./BigCardEvent";
import { formatRupiah } from "@/utils/formater";

export default function MediumCardEvent({
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
				"px-[12.15px] flex flex-col shadow-md items-center bg-white space-y-8 pt-[16.58px] h-fit pb-[12.15px] w-full max-w-[249px]"
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
					className={"gap-[6px]"}
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
					size={"paragraf1"}
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
