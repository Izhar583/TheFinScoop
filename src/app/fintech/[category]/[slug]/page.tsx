import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ComparisonTable, { DEFAULT_BANK_COMPARISON } from "@/components/sections/ComparisonTable";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Percent, 
  Smartphone, 
  Headphones, 
  Share2 
} from "lucide-react";

interface FintechArticleProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    {
      category: "digital-banking",
      slug: "best-digital-banks-for-everyday-banking-2025",
    },
  ];
}

export async function generateMetadata({ params }: FintechArticleProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Best Digital Banks for Everyday Banking in 2026 — Comprehensive Review",
    description:
      "Compare features, fees and benefits of top digital banks to find the right fit for your money.",
  };
}

export default async function FintechArticlePage({ params }: FintechArticleProps) {
  const { category, slug } = await params;

  const tableOfContents = [
    { id: "what-is-digital-bank", title: "What is a digital bank?" },
    { id: "top-digital-banks", title: "Top digital banks in 2026" },
    { id: "key-features", title: "Key features to compare" },
    { id: "pros-cons", title: "Pros and cons" },
    { id: "which-is-right", title: "Which digital bank is right for you?" },
  ];

  return (
    <div className="py-10 md:py-16">
      <div className="container-main max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#737373] mb-6">
          <Link href="/" className="hover:text-[#D9541E] transition-colors">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/fintech" className="hover:text-[#D9541E] transition-colors">Fintech</Link>
          <span>&rsaquo;</span>
          <span className="capitalize">{category.replace("-", " ")}</span>
          <span>&rsaquo;</span>
          <span className="text-[#111111] font-bold truncate">Best Digital Banks for 2026</span>
        </nav>

        {/* Title & Metadata */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20 mb-3">
            Digital Banking
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            Best Digital Banks for Everyday Banking in 2026
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-6">
            Compare features, fees and benefits of top digital banks to find the right fit for your money.
          </p>

          <div className="flex items-center gap-3 text-xs text-[#737373] pt-4 border-t border-[#E5DFD3]">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-[#F3EEE3] flex items-center justify-center font-bold text-xs">
              SM
            </div>
            <div>
              <span className="font-bold text-[#111111]">Sarah Mitchell</span> · Updated Jan 2026 · 8 min read
            </div>
          </div>
        </div>

        {/* Two-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Stream (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Hero Image Mockup */}
            <div className="w-full h-72 sm:h-96 rounded-3xl bg-[#111111] border border-[#262626] flex items-center justify-center text-white/80 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D9541E]/20 to-transparent pointer-events-none" />
              <span className="relative z-10 text-6xl">📱</span>
            </div>

            {/* Quick Summary Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-start gap-4 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center text-[#D9541E] flex-shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider">Quick summary</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  Digital banks often offer lower fees, higher interest rates, and modern mobile app experiences. While they lack physical branches, 24/7 in-app support and extensive ATM networks bridge the gap.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="what-is-digital-bank" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">What is a digital bank?</h2>
              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                A digital bank is a financial institution that operates primarily online, without physical branch networks. Most digital banks partner with chartered member banks, ensuring your deposits remain insured by the FDIC up to $250,000.
              </p>
            </section>

            {/* Section 2 — Comparison Table */}
            <section id="top-digital-banks" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">Top digital banks in 2026</h2>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Here are the leading choices based on fee transparency, interest rates, and user satisfaction:
              </p>
              <ComparisonTable items={DEFAULT_BANK_COMPARISON} />
            </section>

            {/* Section 3 — Key Features Grid */}
            <section id="key-features" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">Key features to compare</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-lg transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#111111] group-hover:text-[#D9541E] font-bold text-sm transition-colors">
                    <Percent className="w-4 h-4 text-[#D9541E]" />
                    <span>Fees &amp; Overdraft</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    Look for fee-free accounts, no monthly maintenance charges, and zero hidden foreign transaction fees.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-lg transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#111111] group-hover:text-[#D9541E] font-bold text-sm transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#D9541E]" />
                    <span>FDIC Insurance</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    Always confirm partner banks are FDIC-insured so your funds are government guaranteed.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-lg transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#111111] group-hover:text-[#D9541E] font-bold text-sm transition-colors">
                    <Smartphone className="w-4 h-4 text-[#D9541E]" />
                    <span>Mobile App Experience</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    Check app store ratings for automated budgeting, instant card lock, and mobile check deposit.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-lg transition-all space-y-2 group">
                  <div className="flex items-center gap-2 text-[#111111] group-hover:text-[#D9541E] font-bold text-sm transition-colors">
                    <Headphones className="w-4 h-4 text-[#D9541E]" />
                    <span>Customer Support</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    Evaluate 24/7 chat support responsiveness and availability of phone assistance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 — Final Verdict Callout Box */}
            <div className="p-8 rounded-3xl bg-[#111111] text-[#E5DFD3] border border-[#262626] space-y-3 shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#D9541E]" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Final verdict</h3>
              </div>
              <p className="text-sm text-[#E5DFD3] leading-relaxed">
                The best digital bank depends on your primary goal. If you want simplicity and zero fees, <strong>Chime</strong> is hard to beat. For multi-currency and frequent travelers, <strong>Wise</strong> or <strong>Revolut</strong> stand out. For high savings yields, consider <strong>SoFi</strong>.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Table of Contents Box */}
            <div className="p-6 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">
                Table of Contents
              </h3>
              <ul className="space-y-2 text-xs">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[#4A4A4A] hover:text-[#D9541E] font-medium transition-colors block py-0.5"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Tools Widget */}
            <div className="p-6 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">
                Featured Tools
              </h3>
              <div className="space-y-3 text-xs">
                <Link
                  href="/tools/savings-goal-calculator"
                  className="block p-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EEE3] border border-transparent hover:border-[#D9541E]/30 transition-all"
                >
                  <p className="font-bold text-[#111111]">Savings Goal Calculator</p>
                  <p className="text-[#737373] mt-0.5">Calculate your monthly savings target</p>
                </Link>
                <Link
                  href="/tools/compound-interest-calculator"
                  className="block p-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EEE3] border border-transparent hover:border-[#D9541E]/30 transition-all"
                >
                  <p className="font-bold text-[#111111]">Compound Interest Calculator</p>
                  <p className="text-[#737373] mt-0.5">See how high yield accounts grow</p>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

