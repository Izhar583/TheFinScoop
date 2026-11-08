"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
  popularTags?: string[];
  className?: string;
  initialQuery?: string;
  variant?: "light" | "dark";
}

export default function SearchBar({
  placeholder = "Search topics, guides and tools...",
  popularTags = ["Compound Interest", "Loan Calculator", "Savings Goal", "Budget Planner"],
  className = "",
  initialQuery = "",
  variant = "light",
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    router.push(`/search?q=${encodeURIComponent(tag)}`);
  };

  const isDark = variant === "dark";

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit} className="relative shadow-sm rounded-full overflow-hidden border border-[#E5DFD3] bg-white focus-within:border-[#D9541E] focus-within:ring-4 focus-within:ring-[#D9541E]/15 transition-all">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white text-[#111111] placeholder-[#737373] pl-14 pr-32 py-4 text-base rounded-full focus:outline-none transition-all"
        />
        <Search className="w-5 h-5 text-[#737373] absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors active:scale-95 shadow-xs"
        >
          Search
        </button>
      </form>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
          <span className={isDark ? "text-[#999999] font-semibold text-xs uppercase tracking-wider" : "text-[#737373] font-semibold text-xs uppercase tracking-wider"}>
            Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white px-3.5 py-1 rounded-full text-xs font-semibold transition-colors"
                  : "bg-white hover:bg-[#F3EEE3] text-[#111111] hover:text-[#D9541E] border border-[#E5DFD3] px-3.5 py-1 rounded-full text-xs font-semibold transition-colors shadow-2xs"
              }
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
