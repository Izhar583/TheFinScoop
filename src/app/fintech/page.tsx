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
  },
  {
    title: "Payment Apps",
    description: "PayPal vs. Apple Pay vs. Google Pay",
    linkText: "Features, fees and limits",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Wallet,
  },
  {
    title: "Money Transfers",
    description: "Wise vs. Western Union vs. Remitly",
    linkText: "Best for international speed",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Globe,
  },
  {
    title: "Investment Apps",
    description: "eToro vs. Robinhood vs. Webull",
    linkText: "Fees, features & pros/cons",
    href: "/fintech/digital-banking/best-digital-banks-for-everyday-banking-2025",
    icon: Sparkles,
  },
];

export default function FintechPage() {
  const fintechArticles = MOCK_ARTICLES.filter(
    (a) => a.category === "fintech" || a.category === "banking-payments"
  ).concat(MOCK_ARTICLES.slice(0, 1));

  return (
    <div className="space-y-24 pb-28">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="bg-white border-b border-slate-100 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold tracking-wider text-slate-800 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Fintech Hub &amp; Product Reviews
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                The technology behind your money.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
                Explore how modern fintech is reshaping banking, cross-border payments, investing, and security — with clear guides and rigorous benchmarks.
              </p>

              <div className="pt-2 max-w-xl">
                <SearchBar
                  placeholder="Search fintech topics, apps, and guides..."
                  popularTags={POPULAR_FINTECH_TAGS}
                />
              </div>

              {/* Value Propositions Pill Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Better Access</p>
                    <p className="text-xs text-slate-500 mt-0.5">Unbanked &amp; global reach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Lower Fees</p>
                    <p className="text-xs text-slate-500 mt-0.5">Zero hidden margins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Bank-Grade</p>
                    <p className="text-xs text-slate-500 mt-0.5">FDIC insured &amp; audited</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card Mockup (Phone Banking Visual) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="text-sm font-bold text-slate-300">Digital Banking Review</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
                    Audited 2026
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Balance Tracked</span>
                    <p className="text-4xl font-extrabold text-white mt-1.5">$4,280.00</p>
                  </div>
                  <div className="bg-slate-900/90 rounded-2xl p-5 space-y-3 border border-slate-800">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Multi-Currency Wallet</span>
                      <span className="font-bold text-white">USD / EUR / GBP</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Instant Transfer Fee</span>
                      <span className="font-bold text-emerald-400">$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Annual Percentage Yield</span>
                      <span className="font-bold text-blue-400">4.85% APY</span>
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
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Ecosystem Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Explore fintech categories
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Detailed teardowns of every major category in financial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FINTECH_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/fintech#${cat.slug}`}
              className="group bg-white rounded-3xl border border-slate-200/90 p-7 hover:border-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-5 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ──────────────── 3. FEATURED FINTECH GUIDES ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              In-Depth Explainers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Featured fintech guides
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Honest benchmarks, speed tests, and fee comparisons to help you choose.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fintechArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ──────────────── 4. COMPARISON MATRIX HERO CARDS ──────────────── */}
      <section className="container-main">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Head-to-Head Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Popular app comparisons
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Side-by-side analysis of features, fees, transfer speeds, and customer ratings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisonCategories.map((comp) => {
            const Icon = comp.icon;
            return (
              <Link
                key={comp.title}
                href={comp.href}
                className="group bg-white rounded-3xl border border-slate-200/90 p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {comp.title}
                  </h3>
                  <p className="text-base text-slate-600 mt-3 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-900">
                  <span>{comp.linkText}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ──────────────── 5. NEWSLETTER STRIP ──────────────── */}
      <section className="container-main">
        <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              The Fintech Dispatch
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Stay ahead of digital finance trends.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Bi-weekly product breakdowns, rate shifts, security advisories, and unbiased fintech ratings delivered straight to your inbox.
            </p>
          </div>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-slate-950 font-bold text-base rounded-full hover:bg-slate-100 transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <span>Subscribe free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
