import Typography from "@/components/atoms/ui/Typography";
import { formatUpperFirstcharSplit } from "@/utils/formater";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function TicketLayoutLogin() {
	const path = usePathname();
	let pathLink = "";
	const mapPath = path.slice(1, path.length).split("/");
	mapPath.unshift("home");
	return (
		<div className="flex gap-2 container ">
			{mapPath.map((item, index) => {
				pathLink += item != "home" ? `/${item}` : "";
				const label = formatUpperFirstcharSplit(item.split("-").join(" "));
				const isHaveMore = mapPath.length - 1 > index;
				return (
					<Fragment key={index}>
						<Typography
							className={!isHaveMore ? "text-primary-500" : "text-neutral-300"}
							thick={isHaveMore ? "regular" : "medium"}>
							<Link href={isHaveMore ? pathLink || "/" : ""}>{label}</Link>
						</Typography>
						{isHaveMore && <ChevronRight className="text-neutral-300" />}
					</Fragment>
				);
			})}
		</div>
	);
}
