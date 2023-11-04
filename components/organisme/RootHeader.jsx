"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconAvatarBorder, IconMail } from "../atoms/ui/icon";
import { signIn } from "next-auth/react";
import NullLoading from "../atoms/DefaulLoading";

const LogoutComponent = () => {
	return (
		<>
			<Button
				onClick={() => signIn()}
				variant={"outline"}>
				Sign In
			</Button>
			<Button>Sign Up</Button>
		</>
	);
};
const LoginComponent = () => {
	return (
		<>
			<Button size={"logo"}>
				<IconMail />
			</Button>
			<Button size={"logo"}>
				<IconAvatarBorder />
			</Button>
		</>
	);
};
export default function RootHeader() {
	const path = usePathname();
	const isLoginedPage = path.includes("login");
	return (
		<header className=" bg-[#ffffff]">
			<div className="flex container justify-between h-[100px] items-center">
				<Link href={"/"}>
					<Image
						width={48}
						height={48}
						src={Logo}
						alt=""
						placeholder="blur"
					/>
				</Link>
				<div className="flex gap-[11px]">
					{!isLoginedPage && (
						<NullLoading
							LoginComponent={<LoginComponent />}
							LogoutComponent={<LogoutComponent />}
						/>
					)}
				</div>
			</div>
		</header>
	);
}
