"use client";
import Image from "next/image";
import React from "react";
import logoFillWhite from "@/public/logo-with-text.png";
import Typography from "../atoms/ui/Typography";
import { Button } from "../atoms/ui/button";
import { SocialMediaLinks } from "@/contents/SosmedCompany";
import { FooterNavigationLinks } from "@/contents/NavigationFooter";
import Link from "next/link";
const TopLeftContent = () => (
	<div className="">
		<Image
			className="mb-[25px]"
			src={logoFillWhite}
		/>
		<Typography
			className={"text-primary-100 mb-[30px]"}
			size={"label2"}>
			“Tagline company”
		</Typography>
		<div className="flex gap-[6px]">
			{SocialMediaLinks.map((item, i) => (
				<Button
					key={i}
					size={"logo"}
					className={"bg-primary-700 w-fit h-fit p-3"}>
					<Image
						src={item.logo}
						alt=""
						width={24}
						height={24}
					/>
				</Button>
			))}
		</div>
	</div>
);

const FooterNavigation = () => (
	<div className="flex gap-10 text-neutral-100">
		{FooterNavigationLinks.map((nav, i) => (
			<div
				className=" space-y-6"
				key={i}>
				<Typography
					thick={"bold"}
					size={"label2"}>
					{nav.title}
				</Typography>
				<div className="space-y-4">
					{nav.menu.map((menu, i) => {
						if (menu.link.startsWith("/")) {
							return (
								<Link
									key={i}
									href={menu.link}>
									<Typography size={"label2"}>{menu.title}</Typography>
								</Link>
							);
						}
						return (
							<Typography
								key={i}
								size={"label2"}>
								{menu.title}
							</Typography>
						);
					})}
				</div>
			</div>
		))}
	</div>
);
const TopContentFooter = () => {
	return (
		<div className="flex justify-between pb-[77px]">
			<TopLeftContent />
			<FooterNavigation />
		</div>
	);
};

export default function RootFooter() {
	return (
		<footer className="bg-primary-900 pt-[66px] container">
			<TopContentFooter />
		</footer>
	);
}
