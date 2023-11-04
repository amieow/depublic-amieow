import Typography from "@/components/atoms/ui/Typography";
import Google from "@/public/icon/brand/google.png";
import Facebook from "@/public/icon/brand/facebook.png";
import Apple from "@/public/icon/brand/apple.png";
import { Button } from "@/components/atoms/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function OtherMethodLogin() {
	const MethodLogin = [
		{
			brand: Apple,
			method: () => {},
		},
		{
			brand: Google,
			method: async () => {
				await signIn("google");
			},
		},
		{
			brand: Facebook,
			method: () => {},
		},
	];
	return (
		<section className="pt-20 items-center flex flex-col gap-10">
			<Typography
				size={"paragraf1"}
				className="text-neutral-500"
				thick={"medium"}>
				atau daftar dengan
			</Typography>
			<div className="flex gap-[30px]">
				{MethodLogin.map((method, i) => (
					<Button
						size={"small"}
						onClick={() => method.method()}
						className="w-[100px] h-[100px] rounded-[20px] bg-surface-100 px-0 "
						key={i}>
						<Image
							src={method.brand}
							alt=""
							placeholder="blur"
						/>
					</Button>
				))}
			</div>
		</section>
	);
}
