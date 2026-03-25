import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "destructive"
    | "icon"
    | "iconSm";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-md outline-none cursor-pointer";

  const variants = {
    primary: "px-3 py-1 border border-[#1c39bb] bg-[#1c39bb] text-white",
    secondary:
      "px-3 py-1 border border-[#1c39bb]/5 bg-[#1c39bb]/20 text-[#1c39bb]",
    outline: "px-3 py-1 border border-[#1c39bb] bg-transparent text-[#1c39bb]",
    destructive: "px-3 py-1 border border-red-500 bg-red-500 text-white",
    icon: "h-[33.79px] aspect-square grid place-items-center bg-[#1c39bb] text-white",
    iconSm:
      "h-[28px] aspect-square grid place-items-center bg-[#1c39bb] text-white",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
