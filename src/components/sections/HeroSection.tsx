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
    <section className="bg-[#F3EEE3] text-[#111111] py-16 md:py-24 relative overflow-hidden border-b border-[#E5DFD3]/80">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9541E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {badge && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3.5 py-1.5 rounded-full">
                {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12]">
              {title}
            </h1>
            <p className="text-[#4A4A4A] text-base sm:text-lg max-w-xl leading-relaxed">
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

