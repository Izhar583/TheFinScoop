import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "orange" | "purple" | "cyan" | "gray";
  className?: string;
}

export default function Badge({
  children,
  variant = "blue",
  className,
}: BadgeProps) {
  const variantClasses = {
    green: "bg-emerald-50 text-emerald-800 border-emerald-200",
    blue: "bg-[#D9541E]/10 text-[#D9541E] border-[#D9541E]/20",
    orange: "bg-[#D9541E]/15 text-[#D9541E] border-[#D9541E]/30",
    purple: "bg-[#111111]/5 text-[#111111] border-[#E5DFD3]",
    cyan: "bg-[#FAF7F2] text-[#111111] border-[#E5DFD3]",
    gray: "bg-[#F3EEE3] text-[#4A4A4A] border-[#E5DFD3]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

