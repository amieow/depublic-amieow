import * as React from "react";
import { cn } from "@/lib/utils";
import { typographyVariant } from "./Typography";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { IconClosedEye } from "./icon";
const InputPasswordIcon = ({ toggle, isOpen }) => {
	return (
		<div
			onClick={toggle}
			className="absolute bottom-1/2 right-0 cursor-pointer translate-y-1/2 ">
			{isOpen ? (
				<EyeIcon
					className="text-neutral-300"
					width={31}
					height={31}
				/>
			) : (
				<IconClosedEye />
			)}
		</div>
	);
};

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				typographyVariant,
				"flex h-[63px] w-full text-2xl rounded-md border bg-transparent border-neutral-300 px-3 py-2 placeholder:text-neutral-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input, InputPasswordIcon };
