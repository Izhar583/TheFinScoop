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
    <div className={`bg-white rounded-xl border border-gray-200 p-5 space-y-6 shadow-xs ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-1.5 font-bold text-sm text-gray-900">
          <Filter className="w-4 h-4 text-[#1D3A6E]" />
          <span>Filter Results</span>
        </div>
        <button
          onClick={handleClear}
          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Content Type */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
          Content Type
        </h4>
        <div className="space-y-1.5 text-xs text-gray-700">
          {contentTypes.map((t) => (
            <label key={t.id} className="flex items-center justify-between cursor-pointer py-1">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(t.id)}
                  onChange={() => toggleType(t.id)}
                  className="rounded border-gray-300 text-[#1D3A6E] focus:ring-[#1D3A6E]"
                />
                <span>{t.label}</span>
              </span>
              {t.count !== undefined && <span className="text-gray-400 font-medium">({t.count})</span>}
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
          Category
        </h4>
        <div className="space-y-1.5 text-xs text-gray-700">
          {categories.map((c) => (
            <label key={c.id} className="flex items-center justify-between cursor-pointer py-1">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="rounded border-gray-300 text-[#1D3A6E] focus:ring-[#1D3A6E]"
                />
                <span>{c.label}</span>
              </span>
              {c.count !== undefined && <span className="text-gray-400 font-medium">({c.count})</span>}
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
          Date Range
        </h4>
        <div className="space-y-1.5 text-xs text-gray-700">
          {dateRanges.map((d) => (
            <label key={d.id} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="radio"
                name="dateRange"
                checked={selectedDate === d.id}
                onChange={() => setDate(d.id)}
                className="text-[#1D3A6E] focus:ring-[#1D3A6E]"
              />
              <span>{d.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

