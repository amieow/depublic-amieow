import Typography from "@/components/atoms/ui/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ImportantInfo({ link, description, className }) {
	const isLinkAvailable = link.startsWith("/");
	return (
		<section
			className={cn(
				"bg-secondary-50 mb-10 px-5 space-y-[20px] py-[30px]",
				className,
			)}
			id="info-penting">
			<div className="flex justify-between">
				<Typography thick={"bolder"}>Info Penting</Typography>
				<Typography
					size={"label1"}
					thick={"medium"}
					className={"text-secondary-900"}>
					{isLinkAvailable ? <Link href={link}>See More</Link> : "see More"}
				</Typography>
			</div>
			<ul className="list-disc">
				{description.map((teks, i) => (
					<li
						key={i}
						className="ml-6">
						<Typography
							size={"label2"}
							thick={"medium"}
							className={"text-neutral-500"}>
							{teks}
						</Typography>
					</li>
				))}
			</ul>
		</section>
	);
}
