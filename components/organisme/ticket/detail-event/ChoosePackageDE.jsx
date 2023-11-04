import Typography from "@/components/atoms/ui/Typography";
import { cn } from "@/lib/utils";
function CardChoosePackageDE({ dayCode, date, selected = false }) {
	const { numberDate = "30", month = "Aug" } = date;
	return (
		<div
			className={cn("px-2 py-5 space-y-2 border-1 border-neutral-300", {
				"border-secondary-300": selected,
			})}>
			<Typography
				className={"text-neutral-300"}
				size={"label1"}>
				{dayCode}
			</Typography>
			<Typography
				size={"label1"}
				className={cn("text-neutral-300", { "text-secondary-700": selected })}>
				{`${numberDate} ${month}`}
			</Typography>
		</div>
	);
}

export default function ChoosePackageDE({ rootLink = "" }) {
	const isLinkAvailable = rootLink.startsWith("/");
	return (
		<section
			className="container"
			id="package">
			<div className="flex justify-between">
				<Typography
					thick={"bolder"}
					size={"subheading2"}>
					Choose Package
				</Typography>
				<Typography
					className={"text-primary-700"}
					size={"label1"}
					thick={"medium"}>
					{isLinkAvailable ? <Link href={rootLink}>See More</Link> : "see More"}
				</Typography>
			</div>
		</section>
	);
}
