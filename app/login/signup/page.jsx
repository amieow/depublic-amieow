"use client";
import Typography from "@/components/atoms/ui/Typography";
import React, { useState } from "react";
import { UserSchema } from "@/utils/validates/user/default";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/organisme/login/LoginForm";
const LoadingModal = dynamic(() => import("@/components/atoms/LoadingModal"), {
  ssr: false,
});
export default function Page() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const signUpSchema = UserSchema.pick({
    username: true,
    password: true,
    nomer_telephone: true,
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
        <Link href={"/login/signin"}>
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
