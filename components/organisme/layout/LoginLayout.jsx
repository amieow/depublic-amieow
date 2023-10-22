"use client";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import Typography from "@/components/atoms/ui/Typography";
import Image from "next/image";
import UnionGroup from "@/public/union-group.png";
import Divider from "@/components/atoms/ui/divider";
import NavigationSurface from "@/components/atoms/NavigationTopSurface";
import OtherMethodLogin from "../login/OtherMethodLogin";
export default function LoginLayout({
  children,
}) {
  const path = usePathname().split("/");
  const router = useRouter();
  const TitlePage = [
    {
      condition: path.includes("signin"),
      title: "Sign In",
    },
    {
      condition: path.includes("signup"),
      title: "Sign Up",
    },
  ];
  const TitleCurrentPage =
    TitlePage.find((item) => item.condition)?.title || "";
  return (
    <main className="flex relative flex-col max-w-[574px] mx-auto z-10 min-h-screen">
      <NavigationSurface className="justify-between">
        <Typography
          size={"subheading2"}
          thick={"bold"}>
          {TitleCurrentPage}
        </Typography>
        <X
          className="cursor-pointer text-neutral-500"
          onClick={() => router.back()}
        />
      </NavigationSurface>
      <main className="min-h-screen bg-surface-200 -z-10 pt-12 h-full container px-0 relative">
        <Image
          src={UnionGroup}
          alt=""
          placeholder="blur"
          className="absolute -top-10 -z-10  right-0"
        />
        {children}
        <Divider />
        <OtherMethodLogin />
      </main>
    </main>
  );
}
