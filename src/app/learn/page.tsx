import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import ArticleCard from "@/components/cards/ArticleCard";
import ToolCard from "@/components/cards/ToolCard";
import CategoryCard from "@/components/cards/CategoryCard";
import NewsletterStrip from "@/components/sections/NewsletterStrip";
import { LEARN_CATEGORIES, TOOLS, POPULAR_ARTICLE_TAGS } from "@/lib/constants";
import { MOCK_ARTICLES } from "@/data/mockData";
import { ArrowRight, Sparkles, BookOpen, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Finance & Guides — TheFinScoop",
  description:
    "Make smarter money decisions. Practical financial knowledge, useful tools, and clear fintech guides — all in one place.",
};

export default function LearnPage() {
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);
  const latestArticles = MOCK_ARTICLES.slice(3, 7);
  const popularTools = TOOLS.slice(0, 3);

  return (
    <div className="space-y-24 pb-28">
      {/* ──────────────── 1. HERO ──────────────── */}
      <section className="bg-white border-b border-slate-100 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="container-main max-w-4xl text-center mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold tracking-wider text-slate-800 uppercase mx-auto">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Financial Education &amp; Guides
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Make smarter decisions with your money.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Practical financial knowledge, step-by-step frameworks, and unbiased analysis to help you build lasting wealth.
          </p>

          <div className="pt-4 max-w-xl mx-auto">
            <SearchBar
              placeholder="Search guides, investing, retirement, taxes..."
              popularTags={POPULAR_ARTICLE_TAGS}
            />
          </div>
        </div>
      </section>

      {/* ──────────────── 2. WORTH UNDERSTANDING (FEATURED) ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Editor&apos;s Picks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Worth understanding
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Essential deep-dives handpicked by our editorial team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ──────────────── 3. TOPIC CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Core Curricula
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Explore what matters to your money
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Structured resources and actionable strategies across every domain of personal finance.
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

      {/* ──────────────── 4. POPULAR TOOLS BAND ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Interactive Planners
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Companion tools &amp; calculators
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Put the concepts into practice with our free interactive calculators.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span>View all 6 calculators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* ──────────────── 5. LATEST ARTICLES ──────────────── */}
      <section className="container-main">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Fresh Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Latest analysis &amp; guides
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Updated weekly with data-backed breakdowns of financial news and trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ──────────────── 6. NEWSLETTER ──────────────── */}
      <section className="container-main">
        <NewsletterStrip
          title="The weekly scoop on smart money."
          subtitle="Join 250,000+ readers. Concise analysis, calculator updates, and zero spam."
        />
      </section>
    </div>
  );
}
