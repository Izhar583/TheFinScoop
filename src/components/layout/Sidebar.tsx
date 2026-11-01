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
        <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 pb-2 border-b border-gray-100">
            <Calculator className="w-4 h-4 text-[#1D3A6E]" />
            <span>Popular Tools</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {topTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block p-2.5 rounded-lg bg-gray-50 hover:bg-[#E8F0FE] border border-transparent hover:border-blue-100 transition-colors"
              >
                <p className="font-bold text-gray-900">{tool.name}</p>
                <p className="text-gray-500 text-[11px] mt-0.5 line-clamp-1">{tool.shortDescription}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline mt-3"
          >
            <span>Explore all tools</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}

      {/* Newsletter Widget */}
      {showNewsletter && (
        <div className="p-5 rounded-xl border border-blue-200 bg-[#E8F0FE]/60">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D3A6E] mb-2">
            <Mail className="w-4 h-4 text-[#1D3A6E]" />
            <span>Weekly Newsletter</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Get practical money tips and new calculators once a week.
          </p>
          <Link
            href="/newsletter"
            className="w-full inline-flex items-center justify-center py-2 bg-[#1D3A6E] hover:bg-[#152a50] text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
          >
            Subscribe Free
          </Link>
        </div>
      )}
    </aside>
  );
}
