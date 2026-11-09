"use client";

import { useState } from "react";
import { Filter, RotateCcw } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterPanelProps {
  contentTypes?: FilterOption[];
  categories?: FilterOption[];
  dateRanges?: FilterOption[];
  onFilterChange?: (filters: any) => void;
  className?: string;
}

export default function FilterPanel({
  contentTypes = [
    { id: "articles", label: "Articles", count: 12 },
    { id: "tools", label: "Tools & Calculators", count: 6 },
    { id: "fintech", label: "Fintech Guides", count: 4 },
  ],
  categories = [
    { id: "personal-finance", label: "Personal Finance", count: 8 },
    { id: "saving-budgeting", label: "Saving & Budgeting", count: 5 },
    { id: "credit-debt", label: "Credit & Debt", count: 3 },
    { id: "investing", label: "Investing Basics", count: 4 },
  ],
  dateRanges = [
    { id: "any", label: "Any time" },
    { id: "last30", label: "Last 30 days" },
    { id: "last3months", label: "Last 3 months" },
    { id: "lastyear", label: "Last year" },
  ],
  onFilterChange,
  className = "",
}: FilterPanelProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["articles", "tools", "fintech"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("any");

  const toggleType = (id: string) => {
    const updated = selectedTypes.includes(id)
      ? selectedTypes.filter((t) => t !== id)
      : [...selectedTypes, id];
    setSelectedTypes(updated);
    onFilterChange?.({ types: updated, categories: selectedCategories, date: selectedDate });
  };

  const toggleCategory = (id: string) => {
    const updated = selectedCategories.includes(id)
      ? selectedCategories.filter((c) => c !== id)
      : [...selectedCategories, id];
    setSelectedCategories(updated);
    onFilterChange?.({ types: selectedTypes, categories: updated, date: selectedDate });
  };

  const setDate = (id: string) => {
    setSelectedDate(id);
    onFilterChange?.({ types: selectedTypes, categories: selectedCategories, date: id });
  };

  const handleClear = () => {
    setSelectedTypes(["articles", "tools", "fintech"]);
    setSelectedCategories([]);
    setSelectedDate("any");
    onFilterChange?.({ types: ["articles", "tools", "fintech"], categories: [], date: "any" });
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#E5DFD3] p-6 space-y-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD3]">
        <div className="flex items-center gap-1.5 font-bold text-sm text-[#111111]">
          <Filter className="w-4 h-4 text-[#D9541E]" />
          <span>Filter Results</span>
        </div>
        <button
          onClick={handleClear}
          className="inline-flex items-center gap-1 text-xs text-[#D9541E] hover:text-[#BF4413] font-semibold transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Content Type */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-2.5">
          Content Type
        </h4>
        <div className="space-y-1.5 text-xs text-[#4A4A4A]">
          {contentTypes.map((t) => (
            <label key={t.id} className="flex items-center justify-between cursor-pointer py-1 hover:text-[#111111] transition-colors">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(t.id)}
                  onChange={() => toggleType(t.id)}
                  className="rounded border-[#E5DFD3] text-[#D9541E] focus:ring-[#D9541E] accent-[#D9541E]"
                />
                <span>{t.label}</span>
              </span>
              {t.count !== undefined && <span className="text-[#737373] font-medium">({t.count})</span>}
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-2.5">
          Category
        </h4>
        <div className="space-y-1.5 text-xs text-[#4A4A4A]">
          {categories.map((c) => (
            <label key={c.id} className="flex items-center justify-between cursor-pointer py-1 hover:text-[#111111] transition-colors">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="rounded border-[#E5DFD3] text-[#D9541E] focus:ring-[#D9541E] accent-[#D9541E]"
                />
                <span>{c.label}</span>
              </span>
              {c.count !== undefined && <span className="text-[#737373] font-medium">({c.count})</span>}
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-2.5">
          Date Range
        </h4>
        <div className="space-y-1.5 text-xs text-[#4A4A4A]">
          {dateRanges.map((d) => (
            <label key={d.id} className="flex items-center gap-2 cursor-pointer py-1 hover:text-[#111111] transition-colors">
              <input
                type="radio"
                name="dateRange"
                checked={selectedDate === d.id}
                onChange={() => setDate(d.id)}
                className="text-[#D9541E] focus:ring-[#D9541E] accent-[#D9541E]"
              />
              <span>{d.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

