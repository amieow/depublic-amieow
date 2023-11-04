"use client";
import Typography from "@/components/atoms/ui/Typography";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { LoginForm } from "@/components/organisme/login/LoginForm";
import { signUpSchema } from "@/utils/validates/login";
import { signIn } from "next-auth/react";
const LoadingModal = dynamic(() => import("@/components/atoms/LoadingModal"), {
	ssr: false,
});
export default function Page() {
	const [open, setOpen] = useState(false);
	const queryParams = useSearchParams();
	const onValid = (data) => {
		setOpen(true);
		Promise.resolve(
			setTimeout(async () => {
				await signIn("credentials", {
					username: data.username,
					password: data.password,
					redirect: true,
					callbackUrl: queryParams.get("callbackUrl") || "/",
				});
			}, 1500),
		);
	};
	return (
		<section className="space-y-10 pb-[60px] container">
			{open && <LoadingModal />}
			<div className="space-y-6">
				<Typography
					size={"subheading2"}
					thick={"medium"}>
					Register for the better experience
				</Typography>
				<LoginForm
					onValid={onValid}
					page="signup"
					ArrayObjectZod={Object.keys(signUpSchema.keyof().Values)}
					zod={signUpSchema}
				/>
			</div>
			<Typography
				className="text-neutral-300 text-center"
				thick={"medium"}>
				Have an Account?{" "}
				<Link
					href={{
						pathname: "/login/signin",
						query: {
							callbackUrl: queryParams.get("callbackUrl") || "/",
						},
					}}>
					<Typography
						className="text-primary-500"
						thick={"bolder"}
						as="span">
						Login
					</Typography>
				</Link>
			</Typography>
		</section>
	);
}
