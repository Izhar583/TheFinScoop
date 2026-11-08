"use client";

import { useState } from "react";
import ToolCard from "@/components/cards/ToolCard";
import type { Tool } from "@/types";

interface CategoryItem {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  iconColor?: string;
  iconBg?: string;
}

interface ToolsDirectoryProps {
  tools: Tool[];
  categories: CategoryItem[];
}

export default function ToolsDirectory({ tools, categories }: ToolsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTools =
    selectedCategory === "all"
      ? tools
      : tools.filter((t) => t.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-2xs ${
            selectedCategory === "all"
              ? "bg-[#D9541E] text-white shadow-sm"
              : "bg-white text-[#111111] hover:bg-[#F3EEE3] border border-[#E5DFD3]"
          }`}
        >
          All Calculators ({tools.length})
        </button>
        {categories.map((cat) => {
          const count = tools.filter((t) => t.category === cat.slug).length;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-2xs ${
                selectedCategory === cat.slug
                  ? "bg-[#D9541E] text-white shadow-sm"
                  : "bg-white text-[#111111] hover:bg-[#F3EEE3] border border-[#E5DFD3]"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
