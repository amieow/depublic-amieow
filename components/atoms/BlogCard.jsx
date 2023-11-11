import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Typography from "./ui/Typography";
import { formatTanggal } from "@/utils/formater";

export default function BlogCard({ image, date, title, description }) {
	return (
		<Card
			className={
				"px-[15px] pt-[18px] pb-[17px] w-[308px] space-y-8 shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
			}>
			<CardHeader>
				<Image
					src={image}
					alt=""
					width={278}
					className="rounded-xl object-cover"
					height={153}
				/>
			</CardHeader>

			<CardContent>
				<Typography
					thick="medium"
					className="text-primary-500 mb-2"
					size="label2">
					{formatTanggal(date)}
				</Typography>
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
