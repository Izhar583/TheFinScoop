import React from "react";
import { CheckCircle2 } from "lucide-react";

interface FinalVerdictProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FinalVerdict({
  title = "Final verdict",
  children,
  className = "",
}: FinalVerdictProps) {
  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-[#111111] text-[#E5DFD3] border border-[#262626] flex items-start gap-4 my-6 shadow-xl ${className}`}>
      <CheckCircle2 className="w-6 h-6 text-[#D9541E] flex-shrink-0 mt-0.5" />
      <div className="space-y-1.5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          {title}
        </h3>
        <div className="text-xs sm:text-sm text-[#E5DFD3] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

