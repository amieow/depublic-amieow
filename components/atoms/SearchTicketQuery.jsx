"use client";
import { cn } from "@/lib/utils";
import { searcyQuerySchema } from "@/utils/validates/validate";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";

export default function SearchTicketQuery({
	onValid,
	className,
	defaultValue,
}) {
	const router = useRouter();
	const [query, setQuery] = useState(defaultValue || "");
	const defaultSubmitHandler = (e) => {
		e.preventDefault();
		const validateQuery = searcyQuerySchema.safeParse(query);
		if (validateQuery.success) {
			if (onValid) {
				onValid();
			} else {
				router.push(`/ticket?q=${validateQuery.data}`);
			}
		}
	};
	return (
		<form
			onSubmit={defaultSubmitHandler}
			className={cn(
				"bg-white/50 flex rounded-[12px] gap-4 border border-neutral-200 items-center backdrop-blur-lg py-[11px] px-6",
				className,
			)}>
			<SearchIcon className="text-neutral-300" />
			<Input
				className="py-0 w-full h-fit border-0"
				placeholder="Search Activities"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
}
