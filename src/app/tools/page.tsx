import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import ToolCard from "@/components/cards/ToolCard";
import CategoryCard from "@/components/cards/CategoryCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import { TOOLS, TOOL_CATEGORIES, POPULAR_TOOL_TAGS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Tools & Calculators — TheFinScoop",
  description:
    "Explore our collection of free personal finance calculators and planning tools, organized by your financial needs.",
};

export default function ToolsPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* ──────────────── 1. HERO BANNER ──────────────── */}
      <section className="bg-gradient-to-b from-[#13284c] to-[#0e1e38] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                FINANCE TOOLS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Put your numbers into perspective.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Use simple calculators and planning tools to understand your finances, explore your options and make confident decisions.
              </p>

              <div className="pt-2">
                <SearchBar popularTags={POPULAR_TOOL_TAGS} />
              </div>
            </div>

            {/* Right Card Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Live Calculation Preview
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400">Projected Portfolio</span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <p className="text-3xl font-black text-white">$67,547</p>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-md">
                        +37.9%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400">Total Deposits</span>
                      <p className="font-bold text-white mt-0.5">$49,000</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Compound Growth</span>
                      <p className="font-bold text-emerald-400 mt-0.5">+$18,547</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. TOOL CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Tool Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            Find the right tool for your goal.
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore our collection of free calculators and planning tools, organized by your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOL_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.slug}
              slug={cat.slug}
              name={cat.name}
              description={cat.description}
              icon={cat.icon}
              type="tool"
            />
          ))}
        </div>
      </section>

      {/* ──────────────── 3. POPULAR FINANCE TOOLS ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Featured Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Popular finance tools
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Start with our most used calculators and planners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* ──────────────── 4. FEATURED TOOL (COMPOUND INTEREST) ──────────────── */}
      <section className="container-main">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Featured Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            Compound Interest Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            See how your savings can grow over time with the power of compounding.
          </p>
        </div>

        <CompoundInterestCalc />
      </section>

      {/* ──────────────── 5. LEARN CTA ──────────────── */}
      <section className="container-main">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Learn &amp; Grow
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Want to make the most of your money?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore our guides, get practical tips and learn how to build better financial habits.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-navy hover:bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Browse our guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
