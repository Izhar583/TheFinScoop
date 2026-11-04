import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";
import ToolCard from "@/components/cards/ToolCard";
import CategoryCard from "@/components/cards/CategoryCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import ToolsDirectory from "@/components/tools/ToolsDirectory";
import { TOOLS, TOOL_CATEGORIES, POPULAR_TOOL_TAGS } from "@/lib/constants";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Tools & Calculators — TheFinScoop",
  description:
    "Explore our collection of free personal finance calculators and planning tools, organized by your financial needs.",
};

export default function ToolsPage() {
  return (
    <div className="space-y-24 pb-28">
      {/* ──────────────── 1. HERO BANNER ──────────────── */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold tracking-wider text-slate-800 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Finance Tools &amp; Calculators
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Put your numbers into perspective.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                Use simple, precision calculators and planning tools to understand your finances, explore scenarios, and make confident decisions.
              </p>

              <div className="pt-2 max-w-xl">
                <SearchBar popularTags={POPULAR_TOOL_TAGS} />
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-50 group">
                <Image
                  src="/tools-laptop.jpg"
                  alt="Financial analytics calculator on laptop"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compound Growth Modeled</p>
                    <p className="text-xl font-extrabold text-slate-900">$52,837 <span className="text-xs font-bold text-emerald-600">+6.2%</span></p>
                  </div>
                  <Link
                    href="#compound-calculator"
                    className="px-4 py-2 bg-slate-950 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors"
                  >
                    Try Below
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. TOOL CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Tool Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Find the right tool for your goal.
          </h2>
          <p className="text-lg text-slate-600 mt-3 leading-relaxed">
            Explore our collection of free calculators and planning tools, designed for every stage of your financial journey.
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Interactive Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Popular finance calculators
            </h2>
            <p className="text-lg text-slate-600 mt-3 leading-relaxed">
              Start modeling your numbers with our most popular financial calculators.
            </p>
          </div>
        </div>

        <ToolsDirectory tools={TOOLS} categories={TOOL_CATEGORIES} />
      </section>

      {/* ──────────────── 4. FEATURED TOOL (COMPOUND INTEREST) ──────────────── */}
      <section id="compound-calculator" className="container-main">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Featured Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Compound Interest Calculator
          </h2>
          <p className="text-lg text-slate-600 mt-3 leading-relaxed">
            See how your investments and recurring contributions compound over time.
          </p>
        </div>

        <CompoundInterestCalc />
      </section>

      {/* ──────────────── 5. LEARN CTA ──────────────── */}
      <section className="container-main">
        <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Personal Finance Guides
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Want to make the most of your money?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Explore our comprehensive guides, get practical tips, and learn how to build lasting financial independence.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-slate-950 font-bold text-base rounded-full hover:bg-slate-100 transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <span>Browse our guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
