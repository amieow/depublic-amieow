"use client";
import Typography from "@/components/atoms/ui/Typography";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { UserSchema } from "@/utils/validates/user/default";
import { LoginForm } from "@/components/organisme/login/LoginForm";
const LoadingModal = dynamic(() => import("@/components/atoms/LoadingModal"), {
  ssr: false,
});
export default function Page() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const signInSchema = UserSchema.pick({
    username: true,
    password: true,
  });
  const onValid = () => {
    setOpen(true);
    Promise.resolve(
      setTimeout(() => {
        router.push("/");
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
          Welcome back!
        </Typography>
        <LoginForm
          onValid={onValid}
          page="signin"
          ArrayObjectZod={Object.keys(signInSchema.keyof().Values)}
          zod={signInSchema}
        />
      </div>
      <Typography
        className="text-neutral-300 text-center"
        thick={"medium"}>
        Don’t have an Account?{" "}
        <Link href={"/login/signup"}>
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
