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
    <div className="bg-white py-10 md:py-16">
      <div className="container-main max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/fintech" className="hover:text-brand-navy">Fintech</Link>
          <span>&rsaquo;</span>
          <span className="capitalize">{category.replace("-", " ")}</span>
          <span>&rsaquo;</span>
          <span className="text-gray-900 font-semibold truncate">Best Digital Banks for 2026</span>
        </nav>

        {/* Title & Metadata */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">
            Digital Banking
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Best Digital Banks for Everyday Banking in 2026
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Compare features, fees and benefits of top digital banks to find the right fit for your money.
          </p>

          <div className="flex items-center gap-3 text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-700">
              SM
            </div>
            <div>
              <span className="font-bold text-gray-900">Sarah Mitchell</span> · Updated Jan 2026 · 8 min read
            </div>
          </div>
        </div>

        {/* Two-Column Content Layout (Image 3 exact structure) */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Stream (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Hero Image Mockup */}
            <div className="w-full h-72 sm:h-96 rounded-2xl bg-gradient-to-tr from-slate-900 to-blue-900 flex items-center justify-center text-white/80 shadow-md">
              <span className="text-6xl">📱</span>
            </div>

            {/* Quick Summary Box (exact from design) */}
            <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-blue-950">Quick summary</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Digital banks often offer lower fees, higher interest rates, and modern mobile app experiences. While they lack physical branches, 24/7 in-app support and extensive ATM networks bridge the gap.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="what-is-digital-bank" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">What is a digital bank?</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                A digital bank is a financial institution that operates primarily online, without physical branch networks. Most digital banks partner with chartered member banks, ensuring your deposits remain insured by the FDIC up to $250,000.
              </p>
            </section>

            {/* Section 2 — Comparison Table (Image 3) */}
            <section id="top-digital-banks" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Top digital banks in 2026</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Here are the leading choices based on fee transparency, interest rates, and user satisfaction:
              </p>
              <ComparisonTable items={DEFAULT_BANK_COMPARISON} />
            </section>

            {/* Section 3 — Key Features Grid */}
            <section id="key-features" className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Key features to compare</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40 space-y-1">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    <span>Fees &amp; Overdraft</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Look for fee-free accounts, no monthly maintenance charges, and zero hidden foreign transaction fees.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40 space-y-1">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>FDIC Insurance</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Always confirm partner banks are FDIC-insured so your funds are government guaranteed.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40 space-y-1">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                    <span>Mobile App Experience</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Check app store ratings for automated budgeting, instant card lock, and mobile check deposit.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/40 space-y-1">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Headphones className="w-4 h-4 text-orange-600" />
                    <span>Customer Support</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Evaluate 24/7 chat support responsiveness and availability of phone assistance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 — Final Verdict Callout Box */}
            <div className="p-6 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <h3 className="text-sm font-bold text-emerald-950">Final verdict</h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                The best digital bank depends on your primary goal. If you want simplicity and zero fees, <strong>Chime</strong> is hard to beat. For multi-currency and frequent travelers, <strong>Wise</strong> or <strong>Revolut</strong> stand out. For high savings yields, consider <strong>SoFi</strong>.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Table of Contents Box */}
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Table of Contents
              </h3>
              <ul className="space-y-2 text-xs">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors block py-0.5"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Tools Widget */}
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Featured Tools
              </h3>
              <div className="space-y-3 text-xs">
                <Link
                  href="/tools/savings-goal-calculator"
                  className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-bold text-gray-900">Savings Goal Calculator</p>
                  <p className="text-gray-500 mt-0.5">Calculate your monthly savings target</p>
                </Link>
                <Link
                  href="/tools/compound-interest-calculator"
                  className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-bold text-gray-900">Compound Interest Calculator</p>
                  <p className="text-gray-500 mt-0.5">See how high yield accounts grow</p>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

