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
      <form onSubmit={handleSubmit} className="relative shadow-sm rounded-full overflow-hidden border border-slate-200/90 bg-white">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white text-slate-900 placeholder-slate-400 pl-14 pr-32 py-4 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
        />
        <Search className="w-5 h-5 text-slate-400 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors"
        >
          Search
        </button>
      </form>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
          <span className={isDark ? "text-slate-400 font-semibold text-xs uppercase tracking-wider" : "text-slate-500 font-semibold text-xs uppercase tracking-wider"}>
            Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
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
