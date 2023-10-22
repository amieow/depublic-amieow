"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconAvatarBorder, IconMail } from "../atoms/ui/icon";

const WhenNotLoginedComponent = () => {
  return (
    <>
      <Button
        asChild
        variant={"outline"}>
        <Link href={"/login/signin"}>Sign In</Link>
      </Button>
      <Button asChild>
        <Link href={"/login/signup"}>Sign Up</Link>
      </Button>
    </>
  );
};
const WhenLoginedComponent = () => {
  return (
    <>
      <Button size={"logo"}>
        <IconMail />
      </Button>
      <Button size={"logo"}>
        <IconAvatarBorder />
      </Button>
    </>
  );
};
export default function RootHeader() {
  const path = usePathname();
  const isLoginedPage = path.includes("/login");
  const isUserLogin = false;
  const LeftComponent = isUserLogin
    ? WhenLoginedComponent
    : WhenNotLoginedComponent;
  return (
    <header className=" bg-[#ffffff]">
      <div className="flex container justify-between h-[100px] items-center">
        <Link href={"/"}>
          <Image
            width={48}
            height={48}
            src={Logo}
            alt=""
            placeholder="blur"
          />
        </Link>
        <div className="flex gap-[11px]">
          {!isLoginedPage && <LeftComponent />}
        </div>
      </div>
    </header>
  );
}
