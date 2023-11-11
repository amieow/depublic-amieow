"use client";
import Image from "next/image";
import Typography from "@/components/atoms/ui/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
export default function DashboardMenu() {
	const menu = [
		{
			icon: "/icon/ticket.svg",
			title: "Ticket",
			link: "/ticket",
		},
		{
			icon: "/icon/phone.svg",
			title: "Registration",
			link: "/registration",
		},
		{
			icon: "/icon/mouse-clicked.svg",
			title: "Booking",
			link: "",
		},
		{
			icon: "/icon/marketplace.svg",
			title: "Store",
			link: "",
		},
	];
	return (
		<div className=" w-full translate-y-1/2 bg-surface-100 rounded-[20px] py-6 relative h-[167px]">
			<div className="bg-surface-100 rounded-full flex items-center justify-center backdrop-blur-[20px] w-10 h-10 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 ">
				<ChevronLeft className="text-tertiary-200" />
			</div>
			<div className="w-full flex justify-between overflow-hidden px-4">
				{menu.map((item, i) => (
					<Link
						href={item.link}
						className="flex items-center flex-col h-[119px] justify-between"
						key={i}>
						<Image
							className="my-auto"
							width={47}
							height={78}
							src={item.icon}
							alt={item.title}
						/>
						<Typography thick={"medium"}>{item.title}</Typography>
					</Link>
				))}
			</div>
			<div className="bg-surface-100 rounded-full flex items-center justify-center backdrop-blur-[20px] w-10 h-10 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 ">
				<ChevronRight className="text-tertiary-900" />
			</div>
		</div>
	);
}
