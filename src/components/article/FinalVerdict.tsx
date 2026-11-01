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
    <div className={`p-6 rounded-xl bg-emerald-50/70 border border-emerald-300 flex items-start gap-3 my-6 shadow-2xs ${className}`}>
      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider">
          {title}
        </h3>
        <div className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
