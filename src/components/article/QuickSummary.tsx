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
    <div className={`p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-start gap-4 my-6 shadow-sm ${className}`}>
      <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center text-[#D9541E] flex-shrink-0 mt-0.5 shadow-sm">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
          {title}
        </h3>
        {children && <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">{children}</p>}
        {points && points.length > 0 && (
          <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A4A4A] pt-1">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9541E] flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

