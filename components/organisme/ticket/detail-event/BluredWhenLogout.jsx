import Image from "next/image";
import IconSearchWithStar from "@/public/icon/search-with-star.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Typography from "@/components/atoms/ui/Typography";
import { Button } from "@/components/atoms/ui/button";
import { useSession } from "next-auth/react";
export const BlurredFully = () => (
	<div className="w-full h-full absolute bg-[#FAFAFA40] backdrop-blur-sm"></div>
);

export const PlaceholderBlurry = ({ className }) => {
	return (
		<main className={cn("container absolute", className)}>
			<section className="bg-surface-100 rounded-[20px] shadow-md py-6 px-[10px] flex flex-col gap-6 items-center">
				<div className="flex gap-4 items-center">
					<Image
						src={IconSearchWithStar}
						alt=""
						width={74.5}
						height={56.5}
						placeholder="blur"
					/>
					<div>
						<Typography thick={"bolder"}>Want to see more details?</Typography>
						<Typography size={"label1"}>
							Login first to enter this page!
						</Typography>
					</div>
				</div>
				<div className="flex gap-[11px] items-center">
					<Button variant={"outline"}>
						<Link href={"/login/signin"}>Sign In</Link>
					</Button>
					<Button>
						<Link href={"/login/signup"}>Sign Up</Link>
					</Button>
				</div>
			</section>
		</main>
	);
};

export default function BluredWhenLogout({ as = "div", children }) {
	const Component = as || "div";
	const { status } = useSession();
	const isLogin = status == "authenticated";
	return (
		<Component className="relative">
			{!isLogin && <BlurredFully />}
			{children}
		</Component>
	);
}
