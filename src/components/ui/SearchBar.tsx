"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
  popularTags?: string[];
  className?: string;
  initialQuery?: string;
}

export default function SearchBar({
  placeholder = "Search topics, guides and tools...",
  popularTags = ["Compound Interest", "Loan Calculator", "Savings Goal", "Budget Planner"],
  className = "",
  initialQuery = "",
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

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit} className="relative shadow-sm rounded-xl overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white text-gray-800 placeholder-gray-400 pl-12 pr-28 py-3.5 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-navy hover:bg-blue-900 text-white font-medium text-xs md:text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Search
        </button>
      </form>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
          <span className="text-gray-300 font-medium">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-md transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

