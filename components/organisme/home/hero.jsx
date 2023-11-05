import Image from "next/image";
import React from "react";
import UnionGroup from "@/public/union-group-big.png";
import Typography from "@/components/atoms/ui/Typography";
import { Button } from "@/components/atoms/ui/button";
import DashboardMenu from "./dashboardMenu";
import SearchTicketQuery from "@/components/atoms/SearchTicketQuery";
export default function Hero() {
	return (
		<section className="h-[602px] z-10">
			<section className="h-[501px] pt-10 container bg-surface-500 relative z-0">
				<div className="absolute top-0 right-0 -z-10">
					<Image
						className="h-[500px] w-[300px]"
						alt="decoration"
						src={UnionGroup}
					/>
				</div>
				<SearchTicketQuery />
				<div className="max-w-[262px] space-y-6 mt-[58px]">
					<Typography
						thick={"bold"}
						size={"headline2"}>
						Tagline Hero Section
					</Typography>
					<Button>Download Aplikasi</Button>
				</div>
				<DashboardMenu />
			</section>
		</section>
	);
}
