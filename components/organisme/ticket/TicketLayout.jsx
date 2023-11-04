"use client";
import TicketLayoutLogin from "./TicketLayoutLogin";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
export default function TicketLayout({ children }) {
	const { status } = useSession();
	const isLoginedUser = status == "authenticated";
	return (
		<main
			className={cn("container pt-10 space-y-[30px] px-0 bg-neutral-100", {
				"max-h-[911px] overflow-hidden": !isLoginedUser,
			})}>
			{isLoginedUser ? <TicketLayoutLogin /> : null}
			{children}
		</main>
	);
}
