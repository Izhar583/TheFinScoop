import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import ArticleCard from "@/components/cards/ArticleCard";
import { FINTECH_CATEGORIES, POPULAR_FINTECH_TAGS } from "@/lib/constants";
import { MOCK_ARTICLES } from "@/data/mockData";
import { 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Building2, 
  Wallet, 
  Globe, 
  Sparkles 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fintech Hub — The Technology Behind Your Money | TheFinScoop",
  description:
    "Explore how fintech is changing the way we bank, pay, borrow and invest — with clear guides, honest reviews and practical advice.",
};

const comparisonCategories = [
  {
    title: "Digital Banks",
    description: "Chase vs. Revolut vs. Wise vs. Chime",
    linkText: "Which is right for you?",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Building2,
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    title: "Payment Apps",
    description: "PayPal vs. Apple Pay vs. Google Pay",
    linkText: "Features, fees and limits",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Wallet,
    badgeColor: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Money Transfers",
    description: "Wise vs. Western Union vs. Remitly",
    linkText: "Best for international speed",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Globe,
    badgeColor: "bg-orange-50 text-orange-700",
  },
  {
    title: "Investment Apps",
    description: "eToro vs. Robinhood vs. Webull",
    linkText: "Fees, features & pros/cons",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Sparkles,
    badgeColor: "bg-purple-50 text-purple-700",
  },
];

export default function FintechPage() {
  const fintechArticles = MOCK_ARTICLES.filter(
    (a) => a.category === "fintech" || a.category === "banking-payments"
  ).concat(MOCK_ARTICLES.slice(0, 1));

  return (
    <div className="space-y-16 pb-20">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="bg-gradient-to-b from-[#102444] to-[#0a182e] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
                FINTECH HUB
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                The technology behind your money.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Explore how fintech is changing the way we bank, pay, borrow and invest — with clear guides, honest reviews and practical advice.
              </p>

              {/* SearchBar */}
              <div className="pt-2">
                <SearchBar
                  placeholder="Search fintech topics, apps and guides..."
                  popularTags={POPULAR_FINTECH_TAGS}
                />
              </div>

              {/* Value Propositions Pill Grid */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Better access</p>
                    <p className="text-[11px] text-gray-400">To financial services</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Lower fees</p>
                    <p className="text-[11px] text-gray-400">And faster transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">More control</p>
                    <p className="text-[11px] text-gray-400">Over your money</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card Mockup (Phone Banking Visual) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md max-w-sm mx-auto">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <span className="text-xs font-bold text-gray-300">Digital Banking 2026</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] text-gray-400">Total Balance</span>
                    <p className="text-3xl font-black text-white mt-1">$4,280.00</p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-3.5 space-y-2 border border-slate-700/60">
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Multi-Currency Wallet</span>
                      <span className="font-bold text-white">USD / EUR / GBP</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Instant Transfer Fee</span>
                      <span className="font-bold text-emerald-400">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. FINTECH CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FINTECH_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/fintech#${cat.slug}`}
              className="group bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-md hover:border-cyan-100 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 mb-3 group-hover:scale-105 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center gap-1 text-xs font-semibold text-cyan-700">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ──────────────── 3. FEATURED FINTECH GUIDES ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              In-Depth Explainers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Featured Fintech Guides
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Honest reviews and comparisons to help you choose with confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fintechArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ──────────────── 4. IN-DEPTH COMPARISONS ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Side-by-Side Breakdowns
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              In-Depth Comparisons
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Compare features, fees and benefits across leading apps and services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisonCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-brand-navy transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy mb-4 group-hover:scale-105 group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-600 mt-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {item.linkText}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-50 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                  <span>Compare now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ──────────────── 5. NEWSLETTER STRIP ──────────────── */}
      <section className="container-main">
        <div className="bg-gradient-to-r from-slate-900 to-[#102444] text-white rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Fintech Weekly
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Stay informed with our fintech newsletter
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Get the latest guides, product updates, and expert insights straight to your inbox once a week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:bg-white/20 focus:border-cyan-400 transition-all"
              />
              <button
                type="button"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
