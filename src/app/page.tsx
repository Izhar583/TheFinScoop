import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Search,
  Sparkles
} from "lucide-react";
import ToolCard from "@/components/cards/ToolCard";
import CategoryCard from "@/components/cards/CategoryCard";
import ArticleCard from "@/components/cards/ArticleCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import { TOOLS, TOOL_CATEGORIES, LEARN_CATEGORIES, POPULAR_TOOL_TAGS } from "@/lib/constants";
import { MOCK_ARTICLES } from "@/data/mockData";

export default function HomePage() {
  const popularTools = TOOLS.slice(0, 6);
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      {/* ──────────────── 1. HERO SECTION (EXACT DESIGN MATCH) ──────────────── */}
      <section className="relative bg-gradient-to-r from-white via-slate-50/70 to-blue-50/40 border-b border-gray-100 py-12 lg:py-16 overflow-hidden">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#1D3A6E]">
                FINANCE TOOLS
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D3A6E] tracking-tight leading-[1.18] font-serif">
                Put your numbers into perspective.
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                Use simple calculators and planning tools to understand your finances, explore your options and make confident decisions.
              </p>

              {/* Search Bar matching image */}
              <div className="pt-2">
                <form 
                  action="/search" 
                  method="GET"
                  className="relative flex items-center bg-white border border-gray-200/90 rounded-full shadow-xs hover:border-gray-300 focus-within:border-[#1D3A6E] focus-within:ring-2 focus-within:ring-blue-100 transition-all max-w-xl"
                >
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search for a tool (e.g., loan calculator, budget planner...)"
                    className="w-full pl-11 pr-24 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-transparent rounded-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-4 py-1.5 bg-[#1D3A6E] hover:bg-[#152a50] text-white text-xs font-semibold rounded-full transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Popular tools inline links */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 pt-1">
                <span className="font-semibold text-gray-700">Popular tools:</span>
                <Link href="/tools/compound-interest-calculator" className="hover:text-[#1D3A6E] hover:underline">
                  Compound Interest
                </Link>
                <span>·</span>
                <Link href="/tools/loan-payment-calculator" className="hover:text-[#1D3A6E] hover:underline">
                  Loan Calculator
                </Link>
                <span>·</span>
                <Link href="/tools/savings-goal-calculator" className="hover:text-[#1D3A6E] hover:underline">
                  Savings Goal
                </Link>
                <span>·</span>
                <Link href="/tools/budget-planner" className="hover:text-[#1D3A6E] hover:underline">
                  Budget Planner
                </Link>
              </div>
            </div>

            {/* Right Image (Laptop on Desk with Visual Chart) */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 group">
                <Image
                  src="/hero-laptop.jpg"
                  alt="Financial growth chart on laptop screen with coffee mug and plant"
                  width={640}
                  height={320}
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Subtle soft gradient fade on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3A6E] mt-1">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3A6E] mt-1">
              Popular finance tools
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Start with our most used calculators and planners.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View all tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* ──────────────── 4. FEATURED CALCULATOR PREVIEW ──────────────── */}
      <section className="container-main">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Featured Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3A6E] mt-1">
            Compound Interest Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            See how your savings can grow over time with the power of compounding.
          </p>
        </div>

        <CompoundInterestCalc />
      </section>

      {/* ──────────────── 5. LEARN & GROW HIGHLIGHTS ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Worth Understanding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3A6E] mt-1">
              Editor&apos;s Picks
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              In-depth guides, practical advice, and timeless financial knowledge.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Explore all guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ──────────────── 6. LEARN CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Explore Topics
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3A6E] mt-1">
            Explore what matters to your money.
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Practical guides and clear explainers across all essential money areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARN_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.slug}
              slug={cat.slug}
              name={cat.name}
              description={cat.description}
              icon={cat.icon}
              type="learn"
            />
          ))}
        </div>
      </section>

      {/* ──────────────── 7. CALL TO ACTION BANNER ──────────────── */}
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
              Explore our guides, get practical tips and learn how to build better financial habits that last a lifetime.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1D3A6E] hover:bg-[#152a50] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Browse our guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
