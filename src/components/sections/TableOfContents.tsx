"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import type { TOCItem } from "@/types";
import { List } from "lucide-react";

interface TableOfContentsProps {
  items: { id: string; title: string; level?: number }[];
  className?: string;
}

export default function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const activeId = useActiveSection(items.map((i) => i.id));

  return (
    <div className={`p-5 rounded-xl border border-gray-200 bg-gray-50/70 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 pb-2 border-b border-gray-200">
        <List className="w-4 h-4 text-[#1D3A6E]" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-1.5 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className={item.level === 3 ? "ml-3" : ""}>
              <a
                href={`#${item.id}`}
                className={`block py-1 px-2 rounded-md transition-all ${
                  isActive
                    ? "bg-[#1D3A6E] text-white font-semibold"
                    : "text-gray-600 hover:text-[#1D3A6E] hover:bg-white"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
