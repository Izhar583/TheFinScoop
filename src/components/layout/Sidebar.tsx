import Link from "next/link";
import TableOfContents from "@/components/sections/TableOfContents";
import { TOOLS } from "@/lib/constants";
import { ArrowRight, Calculator, Newspaper, Mail } from "lucide-react";

interface SidebarProps {
  tocItems?: { id: string; title: string; level?: number }[];
  showTools?: boolean;
  showNewsletter?: boolean;
  className?: string;
}

export default function Sidebar({
  tocItems,
  showTools = true,
  showNewsletter = true,
  className = "",
}: SidebarProps) {
  const topTools = TOOLS.slice(0, 3);

  return (
    <aside className={`space-y-6 sticky top-24 ${className}`}>
      {/* Table of contents if provided */}
      {tocItems && tocItems.length > 0 && (
        <TableOfContents items={tocItems} />
      )}

      {/* Featured Tools Widget */}
      {showTools && (
        <div className="p-5 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] mb-3 pb-2 border-b border-[#E5DFD3]">
            <Calculator className="w-4 h-4 text-[#D9541E]" />
            <span>Popular Tools</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {topTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EEE3] border border-transparent hover:border-[#D9541E]/30 transition-all"
              >
                <p className="font-bold text-[#111111]">{tool.name}</p>
                <p className="text-[#737373] text-[11px] mt-0.5 line-clamp-1">{tool.shortDescription}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D9541E] hover:text-[#BF4413] mt-3 transition-colors"
          >
            <span>Explore all tools</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}

      {/* Newsletter Widget */}
      {showNewsletter && (
        <div className="p-5 rounded-2xl border border-[#262626] bg-[#111111] text-[#E5DFD3] shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F3EEE3] mb-2">
            <Mail className="w-4 h-4 text-[#D9541E]" />
            <span>Weekly Newsletter</span>
          </div>
          <p className="text-xs text-[#999999] leading-relaxed mb-3">
            Get practical money tips and new calculators once a week.
          </p>
          <Link
            href="/newsletter"
            className="w-full inline-flex items-center justify-center py-2.5 bg-[#D9541E] hover:bg-[#BF4413] text-white text-xs font-bold rounded-full shadow-sm transition-all active:scale-95"
          >
            Subscribe Free
          </Link>
        </div>
      )}
    </aside>
  );
}

