import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { typographyVariant } from "./Typography";

const ButtonTextVariants = {
	large: typographyVariant({
		size: "subheading2",
		thick: "bolder",
	}),
	medium: typographyVariant({
		size: "paragraf2",
		thick: "bolder",
	}),
	small: typographyVariant({
		size: "label1",
		thick: "medium",
	}),
};

const buttonVariants = cva(
	"inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-primary-500 text-neutral-100",
				outline: "border text-primary-700 border-primary-500",
			},
			size: {
				large: `w-[578px] h-[62px] shadow-lg ${ButtonTextVariants.large}`,
				medium: `w-[515px] h-[62px] w-full rounded-xl shadow-lg ${ButtonTextVariants.large}`,
				small: `px-[30px] py-[10px] rounded-xl shadow-md ${ButtonTextVariants.medium}`,
				extraSmall: `px-[14px] py-[6px] shadow-md ${ButtonTextVariants.small}`,
				logo: "w-[52px] h-[52px] rounded-full shadow-md",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "small",
		},
	},
);

const Button = React.forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size }), className)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
