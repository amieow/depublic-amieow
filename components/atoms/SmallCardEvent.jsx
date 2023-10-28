import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Typography from "./ui/Typography";

export default function SmallCardEvent({ image, date, title, description }) {
	const { day = "DAY", Month = "MON TANGGAL" } = date || {};
	return (
		<Card className="px-[15px] pt-[18px] pb-[17px] w-[308px] space-y-8 ">
			<CardHeader>
				<Image
					className="rounded-xl object-cover"
					width={282}
					height={150}
					src={image}
					alt=""
				/>
			</CardHeader>
			<CardContent>
				<Typography
					thick="medium"
					className="text-primary-500 mb-2"
					size="label2">{`${day}, ${Month}`}</Typography>
				<div className="space-y-1">
					<Typography
						className="mb-1 text-primary-900 "
						thick={"bolder"}
						size={"paragraf1"}>
						{title}
					</Typography>
					<Typography
						size="label1"
						className="text-tertiary-300 text-justify">
						{description}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
}
