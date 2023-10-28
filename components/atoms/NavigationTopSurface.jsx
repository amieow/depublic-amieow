import { cn } from "@/lib/utils";
export default function NavigationTopSurface({ children, className }) {
	return (
		<div
			className={cn(
				"flex bg-surface-900 z-10 top-0 sticky items-center  py-5 container",
				className,
			)}>
			{children}
		</div>
	);
}
