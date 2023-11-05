"use client";
import TicketLayoutLogin from "./TicketLayoutLogin";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
export default function TicketLayout({ children }) {
	const { status } = useSession();
	const path = usePathname();
	const isLoginedUser = status == "authenticated";
	return (
		<main
			className={cn("container pt-10 px-0 bg-surface-200", {
				"max-h-[911px] overflow-hidden": !isLoginedUser,
				"bg-surface-100": path == "/ticket",
			})}>
			{isLoginedUser ? <TicketLayoutLogin /> : null}
			{children}
		</main>
	);
}
