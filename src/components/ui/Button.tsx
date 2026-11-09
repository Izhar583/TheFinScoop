import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary: "bg-[#D9541E] hover:bg-[#BF4413] text-white shadow-sm hover:shadow-md",
    secondary: "bg-[#111111] hover:bg-[#262626] text-[#F3EEE3] shadow-sm",
    outline: "border border-[#E5DFD3] bg-white hover:bg-[#F3EEE3] text-[#111111]",
    accent: "bg-[#D9541E] hover:bg-[#BF4413] text-white shadow-sm hover:shadow-md",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

