"use client";

import RootFooter from "@/components/organisme/RootFooter";
import BluredWhenLogout, {
	PlaceholderBlurry,
} from "@/components/organisme/ticket/detail-event/BluredWhenLogout";
import ChoosePackageDE from "@/components/organisme/ticket/detail-event/ChoosePackageDE";
import HeroDE from "@/components/organisme/ticket/detail-event/HeroDE";
import HighlightDE from "@/components/organisme/ticket/detail-event/HighlightDE";
import ImportantInfo from "@/components/organisme/ticket/detail-event/ImportantInfo";
import NavSectionDetailEvent from "@/components/organisme/ticket/detail-event/NavSectionDE";
import ProtectedSectionDE from "@/components/organisme/ticket/detail-event/ProtectedSectionDE";
import {
	HIGHTLIGHT_TEXT_DE,
	INFO_PENTING_DE,
	UPCOMING_EVENT_CONTENT,
} from "@/contents/UpcomingEventContent";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
	const searchParmas = useSearchParams();
	const idParams = Number(searchParmas.get("id"));
	const { status } = useSession();
	const data = UPCOMING_EVENT_CONTENT.find((v) => v.id == idParams);
	const isLogin = status == "authenticated";
	if (!data) {
		return redirect("/ticket");
	}
	return (
		<>
			<section
				className="mb-10 container"
				id="banner">
				<Image
					alt=""
					width={515}
					height={297}
					className="object-cover rounded-[20px]"
					src={data.image}
				/>
			</section>
			<NavSectionDetailEvent />
			<main>
				<HeroDE {...data} />
				<BluredWhenLogout>
					{!isLogin && <PlaceholderBlurry className={"-translate-y-1/3"} />}
					<HighlightDE arrayTeks={HIGHTLIGHT_TEXT_DE} />
					<div className="container">
						<ImportantInfo {...INFO_PENTING_DE} />
					</div>
					<ProtectedSectionDE isLogin={isLogin}>
						<ChoosePackageDE />
					</ProtectedSectionDE>
				</BluredWhenLogout>
			</main>
			<RootFooter />
		</>
	);
}
