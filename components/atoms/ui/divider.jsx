import { cn } from "@/lib/utils";

export default function Divider({ className }) {
	return (
		<div
			className={cn(
				"bg-neutral-100 w-full h-[11px] container",
				className,
			)}></div>
	);
}
