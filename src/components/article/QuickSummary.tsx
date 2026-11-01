import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface QuickSummaryProps {
  title?: string;
  points?: string[];
  children?: React.ReactNode;
  className?: string;
}

export default function QuickSummary({
  title = "Quick summary",
  points,
  children,
  className = "",
}: QuickSummaryProps) {
  return (
    <div className={`p-6 rounded-xl bg-[#E8F0FE]/70 border border-blue-200/80 flex items-start gap-4 my-6 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-[#1D3A6E] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-2xs">
        <Sparkles className="w-4 h-4 text-emerald-400" />
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="text-sm font-bold text-[#1D3A6E] uppercase tracking-wider">
          {title}
        </h3>
        {children && <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{children}</p>}
        {points && points.length > 0 && (
          <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 pt-1">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
