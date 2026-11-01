import React from "react";
import SearchBar from "@/components/ui/SearchBar";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  searchPlaceholder?: string;
  popularTags?: string[];
  rightElement?: React.ReactNode;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  searchPlaceholder = "Search topics, guides and tools...",
  popularTags = ["Compound Interest", "Loan Calculator", "Savings Goal", "Budget Planner"],
  rightElement,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-[#13284c] to-[#0e1e38] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {badge && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-2">
              <SearchBar placeholder={searchPlaceholder} popularTags={popularTags} />
            </div>
          </div>

          {rightElement && (
            <div className="lg:col-span-5">
              {rightElement}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
