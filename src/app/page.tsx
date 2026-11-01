import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Target, 
  Wallet, 
  CreditCard, 
  Home, 
  PiggyBank, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  Smartphone
} from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import ToolCard from "@/components/cards/ToolCard";
import CategoryCard from "@/components/cards/CategoryCard";
import ArticleCard from "@/components/cards/ArticleCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import { TOOLS, TOOL_CATEGORIES, LEARN_CATEGORIES, POPULAR_TOOL_TAGS } from "@/lib/constants";
import { MOCK_ARTICLES } from "@/data/mockData";

export default function HomePage() {
  const popularTools = TOOLS.slice(0, 6);
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);
  const latestArticles = MOCK_ARTICLES.slice(0, 4);

  return (
    <div className="space-y-16 pb-20">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="bg-gradient-to-b from-[#13284c] to-[#0e1e38] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                FINANCE TOOLS &amp; INSIGHTS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Put your numbers into perspective.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Use simple calculators and planning tools to understand your finances, explore your options, and make confident decisions.
              </p>

              {/* SearchBar */}
              <div className="pt-2">
                <SearchBar popularTags={POPULAR_TOOL_TAGS} />
              </div>
            </div>

            {/* Right Card Mockup (Laptop with Chart Simulation) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative group hover:border-slate-600 transition-all">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Growth Projection 2026
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400">Your Future Value</span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <p className="text-3xl font-black text-white">$52,837</p>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-md">
                        +8.2%
                      </span>
                    </div>
                  </div>

                  {/* Simulated Chart Bars */}
                  <div className="h-28 flex items-end gap-2 pt-4">
                    {[35, 45, 55, 60, 75, 82, 95, 110, 130, 145].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-emerald-400 rounded-t-sm hover:brightness-125 transition-all"
                        style={{ height: `${(val / 145) * 100}%` }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400">Total Contributions</span>
                      <p className="font-bold text-white mt-0.5">$24,000</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Total Growth</span>
                      <p className="font-bold text-emerald-400 mt-0.5">+$28,837</p>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-navy hover:bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
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
