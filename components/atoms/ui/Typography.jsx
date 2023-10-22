import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const typographyVariant = cva("leading-[150%] font-monsterat", {
  variants: {
    size: {
      display: "text-[40px]",
      headline1: "text-[32px]",
      headline2: "text-[30px]",
      subheading1: "text-[24px]",
      subheading2: "text-[20px]",
      paragraf1: "text-[18px]",
      paragraf2: "text-[16px]",
      label1: "text-[14px]",
      label2: "text-[12px]",
    },
    thick: {
      extraBold: "font-extrabold",
      bolder: "font-bold",
      bold: "font-semibold",
      medium: "font-medium",
      regular: "font-normal",
    },
    color: {
      default: "text-neutral-900",
      revert: "text-neutral-100",
    },
    defaultVariant: {
      size: "paragraf2",
      thick: "regular",
      color: "default",
    },
  },
});
const Typography = React.forwardRef((
  {
    as,
    size = "paragraf2",
    thick,
    className,
    color,
    children,
    ...props
  }, ref) => {
  const Component = as || "p";

  return (
    <Component
      ref={ref}
      className={cn(
        typographyVariant({
          thick,
          size,
          color,
        }),
        className,
      )}
      {...props}>
      {children}
    </Component>
  );
},
);

export { typographyVariant };
export default Typography;
