import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary";

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary"
      ? "bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:outline-brand"
      : "border border-brand bg-white text-brand hover:bg-brand/10 focus-visible:outline-brand",
    className
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...props} />
  );
}
