import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import ArticleCard from "@/components/cards/ArticleCard";
import NewsletterStrip from "@/components/sections/NewsletterStrip";
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
    <div className="space-y-24 pb-28 bg-[#F3EEE3]">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section className="border-b border-[#E5DFD3] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-xs font-bold tracking-wider text-[#D9541E] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D9541E]" />
                Fintech Hub &amp; Product Reviews
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12]">
                The technology behind <span className="italic font-serif font-normal text-[#D9541E]">your money.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#4A4A4A] max-w-xl leading-relaxed">
                Explore how modern fintech is reshaping banking, cross-border payments, investing, and security — with clear guides and rigorous benchmarks.
              </p>

              <div className="pt-2 max-w-xl">
                <SearchBar
                  placeholder="Search fintech topics, apps, and guides..."
                  popularTags={POPULAR_FINTECH_TAGS}
                />
              </div>

              {/* Value Propositions Pill Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E5DFD3]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111111]">Better Access</p>
                    <p className="text-xs text-[#737373] mt-0.5">Unbanked &amp; global reach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111111]">Lower Fees</p>
                    <p className="text-xs text-[#737373] mt-0.5">Zero hidden margins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111111]">Bank-Grade</p>
                    <p className="text-xs text-[#737373] mt-0.5">FDIC insured &amp; audited</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#111111] text-white rounded-3xl p-8 shadow-2xl border border-[#262626] max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-6">
                  <span className="text-sm font-bold text-[#F3EEE3]">Digital Banking Review</span>
                  <span className="text-xs font-bold text-[#D9541E] bg-[#D9541E]/15 border border-[#D9541E]/30 px-3 py-1 rounded-full">
                    Audited 2026
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-[#999999] uppercase tracking-wider font-semibold">Total Balance Tracked</span>
                    <p className="text-4xl font-extrabold text-white mt-1.5">$4,280.00</p>
                  </div>
                  <div className="bg-[#181818] rounded-2xl p-5 space-y-3 border border-[#262626]">
                    <div className="flex justify-between text-sm text-[#E5DFD3]">
                      <span>Multi-Currency Wallet</span>
                      <span className="font-bold text-white">USD / EUR / GBP</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#999999]">
                      <span>Instant Transfer Fee</span>
                      <span className="font-bold text-[#D9541E]">$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#999999]">
                      <span>Annual Percentage Yield</span>
                      <span className="font-bold text-white">4.85% APY</span>
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
            Ecosystem Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2 tracking-tight">
            Explore fintech categories
          </h2>
          <p className="text-lg text-[#4A4A4A] mt-2">
            Detailed teardowns of every major category in financial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FINTECH_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/fintech#${cat.slug}`}
              className="group bg-white rounded-3xl border border-[#E5DFD3] p-7 hover:border-[#D9541E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F3EEE3] text-[#111111] flex items-center justify-center mb-5 group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#D9541E] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#D9541E]">
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
              In-Depth Explainers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2 tracking-tight">
              Featured fintech guides
            </h2>
            <p className="text-lg text-[#4A4A4A] mt-2">
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
            Head-to-Head Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-2 tracking-tight">
            Popular app comparisons
          </h2>
          <p className="text-lg text-[#4A4A4A] mt-2">
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
                className="group bg-white rounded-3xl border border-[#E5DFD3] p-8 hover:border-[#D9541E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F3EEE3] text-[#111111] flex items-center justify-center mb-6 group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#D9541E] transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-base text-[#4A4A4A] mt-3 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-[#E5DFD3] flex items-center justify-between text-sm font-bold text-[#111111] group-hover:text-[#D9541E]">
                  <span>{comp.linkText}</span>
                  <span className="w-8 h-8 rounded-full bg-[#F3EEE3] flex items-center justify-center group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-200">
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
        <NewsletterStrip
          title="Stay ahead of digital finance trends."
          subtitle="Bi-weekly product breakdowns, rate shifts, security advisories, and unbiased fintech ratings delivered straight to your inbox."
        />
      </section>
    </div>
  );
}
