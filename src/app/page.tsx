"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ArrowRight, 
  PiggyBank, 
  Building2, 
  Wallet, 
  BarChart3, 
  TrendingUp, 
  Target, 
  CreditCard, 
  Home,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Calculator,
  Users
} from "lucide-react";
import { calculateCompoundInterest } from "@/lib/calculators";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HomePage() {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [regularContribution, setRegularContribution] = useState<number>(200);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(7);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(20);
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");
  const [compoundFrequency, setCompoundFrequency] = useState<"daily" | "monthly" | "quarterly" | "yearly">("monthly");

  const result = calculateCompoundInterest({
    initialInvestment,
    regularContribution,
    contributionFrequency: "monthly",
    annualInterestRate,
    investmentPeriod,
    compoundFrequency,
  });

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 bg-[#F3EEE3] selection:bg-[#D9541E] selection:text-white overflow-hidden pb-16">
      {/* ──────────────── 1. HERO SECTION (EDITORIAL LUXURY) ──────────────── */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden border-b border-[#E5DFD3]/80">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column (High-impact typography & Search) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-[#D9541E] text-[11px] sm:text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#D9541E] animate-pulse" />
                <span>Financial Tools &amp; Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12] sm:leading-[1.08]">
                Put your numbers into <span className="italic font-serif font-normal text-[#D9541E]">clear perspective.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A4A4A] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Use intelligent calculators and transparent planning tools to understand your personal finances, model future growth, and make confident wealth decisions.
              </p>

              {/* Modern Search Pill - Fully Responsive */}
              <div className="pt-2 max-w-xl mx-auto lg:mx-0">
                <form 
                  action="/search" 
                  method="GET"
                  className="relative flex items-center bg-white border border-[#E5DFD3] rounded-full shadow-sm hover:border-[#D9541E]/50 focus-within:border-[#D9541E] focus-within:ring-4 focus-within:ring-[#D9541E]/15 transition-all p-1 sm:p-1.5"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#737373] ml-3 sm:ml-4 flex-shrink-0 pointer-events-none" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search calculators (e.g. loan, mortgage, savings)..."
                    className="w-full pl-2.5 sm:pl-3 pr-20 sm:pr-28 py-2.5 sm:py-3 text-xs sm:text-base text-[#111111] placeholder-[#737373] bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#D9541E] hover:bg-[#BF4413] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column (Hero Visual Mockup with Warm Editorial Duotone & Ambient Glow) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Ambient Warm Burnt Orange Glow */}
              <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-[#D9541E]/20 via-[#D9541E]/10 to-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Main Visual Card Container with Warm Duotone Filter */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(217,84,30,0.12),0_10px_25px_rgba(0,0,0,0.08)] border border-[#E5DFD3] bg-[#111111] group">
                <Image
                  src="/tools-laptop.jpg"
                  alt="Financial analytics dashboard on laptop screen"
                  width={840}
                  height={640}
                  priority
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover grayscale contrast-[1.12] brightness-[0.95] sepia-[12%] transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Warm Editorial Duotone Tone Wash */}
                <div className="absolute inset-0 bg-[#F3EEE3]/15 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-[#111111]/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Pill */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-[calc(100%-24px)] bg-white/95 backdrop-blur-xl border border-white/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 sm:w-13 sm:h-11 rounded-lg sm:rounded-xl bg-[#D9541E] text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-[0_4px_12px_rgba(217,84,30,0.35)] flex-shrink-0">
                  +38%
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-[#111111] truncate">Projected Growth</p>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#737373] truncate">Compound interest in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. METRICS & TRUST STATS (FLOATING LUXURY ISLAND) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#111111] text-[#E5DFD3] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-[#262626]">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D9541E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D9541E]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Micro-Grid Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-[#262626]">
            {/* Stat 1: Calculators */}
            <div className="space-y-3 lg:px-8 first:pl-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E]">
                  <Calculator className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#737373]">
                  Interactive
                </span>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">6+</p>
                <p className="text-sm sm:text-base font-bold text-[#F3EEE3] mt-1">Free Calculators</p>
                <p className="text-xs sm:text-sm text-[#888888] mt-0.5">Zero signup, zero paywalls</p>
              </div>
            </div>

            {/* Stat 2: Active Readers */}
            <div className="space-y-3 lg:px-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E]">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#737373]">
                  Community
                </span>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">2K+</p>
                <p className="text-sm sm:text-base font-bold text-[#F3EEE3] mt-1">Active Readers</p>
                <p className="text-xs sm:text-sm text-[#888888] mt-0.5">Trust our weekly insights</p>
              </div>
            </div>

            {/* Stat 3: Editorial Independence */}
            <div className="space-y-3 lg:px-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#D9541E]/15 border border-[#D9541E]/30 flex items-center justify-center text-[#D9541E]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D9541E]">
                  Verified
                </span>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9541E] tracking-tight">100%</p>
                <p className="text-sm sm:text-base font-bold text-[#F3EEE3] mt-1">Editorial Independence</p>
                <p className="text-xs sm:text-sm text-[#888888] mt-0.5">Zero sponsored bias</p>
              </div>
            </div>

            {/* Stat 4: Savings Modeled */}
            <div className="space-y-3 lg:px-8 last:pr-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#737373]">
                  Impact
                </span>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">$10M+</p>
                <p className="text-sm sm:text-base font-bold text-[#F3EEE3] mt-1">Savings Modeled</p>
                <p className="text-xs sm:text-sm text-[#888888] mt-0.5">By our user community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. TOOL CATEGORIES ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
            Tool Categories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Find the right tool for your financial goal.
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Explore our curated suite of mathematical planners, organized around everyday money needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1 */}
          <Link
            href="/tools?category=savings-growth"
            className="group card-premium p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D9541E] transition-colors shadow-sm">
                <PiggyBank className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                Savings &amp; Growth
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Model compound interest, set high-yield savings targets, and project future wealth.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
              <span>View calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/tools?category=loans-borrowing"
            className="group card-premium p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D9541E] transition-colors shadow-sm">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                Loans &amp; Mortgages
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Calculate amortized monthly payments, compare loan APRs, and minimize total interest.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
              <span>View calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/tools?category=budgeting-debt"
            className="group card-premium p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D9541E] transition-colors shadow-sm">
                <Wallet className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                Budgeting &amp; Debt
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Take control of variable expenses, map debt avalanche payoff, and find monthly cash surplus.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
              <span>View calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/tools?category=investing-retirement"
            className="group card-premium p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#D9541E] transition-colors shadow-sm">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                Investing &amp; Wealth
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Forecast index fund returns, retirement horizons, and market compounding power.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
              <span>View calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ──────────────── 4. POPULAR FINANCE TOOLS ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
              Featured Tools
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Popular finance calculators
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A]">
              Start with our most-used calculators for everyday financial planning.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#D9541E] transition-colors self-start sm:self-auto"
          >
            <span>Explore all tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              slug: "compound-interest-calculator",
              name: "Compound Interest Calculator",
              desc: "Simulate how your principal and recurring deposits multiply over decades.",
              icon: TrendingUp,
            },
            {
              slug: "loan-payment-calculator",
              name: "Loan Payment Calculator",
              desc: "Determine fixed monthly installments, total financing charges, and APR impact.",
              icon: Building2,
            },
            {
              slug: "savings-goal-calculator",
              name: "Savings Goal Calculator",
              desc: "Calculate exact monthly contributions needed to reach your target on schedule.",
              icon: Target,
            },
            {
              slug: "budget-planner",
              name: "Budget Planner",
              desc: "Audit monthly income against fixed & variable spending to discover real savings.",
              icon: Wallet,
            },
            {
              slug: "debt-payoff-calculator",
              name: "Debt Payoff Calculator",
              desc: "Formulate an accelerated debt-free schedule using the avalanche or snowball strategy.",
              icon: CreditCard,
            },
            {
              slug: "mortgage-calculator",
              name: "Mortgage Calculator",
              desc: "Estimate total monthly home financing including principal, interest, tax & insurance.",
              icon: Home,
            },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.slug}
                className="card-premium p-6 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group"
              >
                <div className="space-y-3 sm:space-y-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F3EEE3] text-[#111111] flex items-center justify-center group-hover:bg-[#D9541E] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-[#E5DFD3]">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors"
                  >
                    <span>Use tool</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──────────────── 5. FEATURED INTERACTIVE CALCULATOR (BURNT ORANGE ACCENTS) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
            Interactive Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Compound Interest Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A]">
            Experience the exponential compounding power of consistent investing over time.
          </p>
        </div>

        {/* Modern Card Shell */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5DFD3] shadow-xl overflow-hidden p-5 sm:p-8 lg:p-10">
          {/* Segmented Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5DFD3] pb-5 sm:pb-6 mb-6 sm:mb-8 gap-3">
            <div className="grid grid-cols-2 sm:inline-flex p-1 rounded-xl bg-[#F3EEE3] border border-[#E5DFD3] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("basic")}
                className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all text-center ${
                  activeTab === "basic"
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#4A4A4A] hover:text-[#111111]"
                }`}
              >
                Standard Mode
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("advanced")}
                className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all text-center ${
                  activeTab === "advanced"
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#4A4A4A] hover:text-[#111111]"
                }`}
              >
                Advanced Mode
              </button>
            </div>

            <span className="text-xs font-semibold text-[#737373] hidden sm:inline-block">
              Real-time calculation engine
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Initial Investment */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Initial Investment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-bold text-base">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="100"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                      className="w-full pl-9 pr-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#111111] rounded-xl border border-[#E5DFD3] focus:border-[#D9541E] focus:ring-4 focus:ring-[#D9541E]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Monthly Contribution
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-bold text-base">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="50"
                      value={regularContribution}
                      onChange={(e) => setRegularContribution(Number(e.target.value) || 0)}
                      className="w-full pl-9 pr-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#111111] rounded-xl border border-[#E5DFD3] focus:border-[#D9541E] focus:ring-4 focus:ring-[#D9541E]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Interest Rate */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Annual Interest Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="100"
                      value={annualInterestRate}
                      onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                      className="w-full pl-4 pr-10 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#111111] rounded-xl border border-[#E5DFD3] focus:border-[#D9541E] focus:ring-4 focus:ring-[#D9541E]/15 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-bold text-base">
                      %
                    </span>
                  </div>
                </div>

                {/* Period */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Investment Period
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
                      className="w-full pl-4 pr-16 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#111111] rounded-xl border border-[#E5DFD3] focus:border-[#D9541E] focus:ring-4 focus:ring-[#D9541E]/15 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-medium text-sm">
                      years
                    </span>
                  </div>
                </div>
              </div>

              {/* Advanced Frequency */}
              {activeTab === "advanced" && (
                <div className="pt-2 animate-in fade-in duration-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Compounding Frequency
                  </label>
                  <select
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(e.target.value as any)}
                    className="w-full px-4 py-3 sm:py-3.5 text-sm font-semibold text-[#111111] rounded-xl border border-[#E5DFD3] focus:border-[#D9541E] focus:ring-4 focus:ring-[#D9541E]/15 focus:outline-none bg-white transition-all"
                  >
                    <option value="daily">Daily (365x / year)</option>
                    <option value="monthly">Monthly (12x / year)</option>
                    <option value="quarterly">Quarterly (4x / year)</option>
                    <option value="yearly">Annually (1x / year)</option>
                  </select>
                </div>
              )}

              {/* Recharts Visualizer with Burnt Orange Palette */}
              {result.yearlyBreakdown.length > 0 && (
                <div className="pt-4 border-t border-[#E5DFD3]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                      Growth Horizon ({investmentPeriod} Years)
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5 text-[#737373]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5DFD3] inline-block" /> Contributions
                      </span>
                      <span className="flex items-center gap-1.5 text-[#D9541E]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D9541E] inline-block" /> Total Portfolio
                      </span>
                    </div>
                  </div>
                  <div className="h-44 sm:h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={result.yearlyBreakdown} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="chartBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D9541E" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#D9541E" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="year"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 10, fill: "#737373" }}
                          tickFormatter={(val) => `Yr ${val}`}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 10, fill: "#737373" }}
                          tickFormatter={(val) => `$${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}`}
                        />
                        <Tooltip
                          formatter={(val: any) => [formatCurrency(Number(val)), ""]}
                          labelFormatter={(label) => `Year ${label}`}
                          contentStyle={{
                            backgroundColor: "#111111",
                            border: "1px solid #262626",
                            borderRadius: "10px",
                            fontSize: "12px",
                            color: "#fff",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="contributions"
                          stroke="#C5BDB0"
                          fill="#F3EEE3"
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#D9541E"
                          strokeWidth={2.5}
                          fill="url(#chartBalance)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>

            {/* Right Results Card (Ink Black Luxury Card) */}
            <div className="lg:col-span-5 bg-[#111111] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl border border-[#262626] flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#999999]">
                  Estimated Future Value
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight break-words">
                  {formatCurrency(result.totalValue)}
                </p>
                <p className="text-xs sm:text-sm text-[#999999] mt-1">
                  After {investmentPeriod} years of consistent compounding
                </p>

                <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-[#262626] text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-[#E5DFD3]">
                    <span>Total Deposits:</span>
                    <span className="font-bold text-white text-sm sm:text-base">
                      {formatCurrency(result.totalContributions)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#E5DFD3]">
                    <span>Compound Interest Earned:</span>
                    <span className="font-bold text-[#D9541E] text-sm sm:text-base">
                      +{formatCurrency(result.totalGrowth)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-3.5 sm:p-4 rounded-xl bg-[#181818] border border-[#262626] flex items-start gap-2.5 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9541E] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#E5DFD3] leading-relaxed">
                    Your portfolio could grow by <strong className="text-white">+{formatPercentage(result.growthPercentage)}</strong> strictly from reinvested earnings.
                  </p>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[#262626] flex items-center justify-between text-xs">
                <Link
                  href="/tools/compound-interest-calculator"
                  className="inline-flex items-center gap-1.5 font-bold text-[#D9541E] hover:text-[#BF4413] transition-colors"
                >
                  <span>Open Full View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#737373]">No account required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 6. EDITORIAL BANNER ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl border border-[#E5DFD3] p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 justify-between text-center lg:text-left">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
              Knowledge &amp; Habits
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Want to make the most of your money?
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Explore in-depth articles written by experienced finance journalists on budgeting realities, high-yield savings, and digital banking reviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/learn"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-xs sm:text-sm rounded-full shadow-md text-center transition-all active:scale-95"
            >
              Browse all guides
            </Link>
            <Link
              href="/fintech"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-[#F3EEE3] text-[#111111] border border-[#E5DFD3] font-bold text-xs sm:text-sm rounded-full text-center transition-all"
            >
              Explore Fintech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
