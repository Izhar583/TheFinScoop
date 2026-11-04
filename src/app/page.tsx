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
  ArrowUpRight
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
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 bg-white selection:bg-slate-900 selection:text-white overflow-hidden">
      {/* ──────────────── 1. HERO SECTION (CLEAN & RESPONSIVE) ──────────────── */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column (High-impact typography & Search) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Financial Tools &amp; Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] sm:leading-[1.08]">
                Put your numbers into clear perspective.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Use intelligent calculators and transparent planning tools to understand your personal finances, model future growth, and make confident wealth decisions.
              </p>

              {/* Modern Search Pill - Fully Responsive */}
              <div className="pt-2 max-w-xl mx-auto lg:mx-0">
                <form 
                  action="/search" 
                  method="GET"
                  className="relative flex items-center bg-white border border-slate-200 rounded-full shadow-sm hover:border-slate-300 focus-within:border-slate-950 focus-within:ring-4 focus-within:ring-slate-100 transition-all p-1 sm:p-1.5"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 ml-3 sm:ml-4 flex-shrink-0 pointer-events-none" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search calculators (e.g. loan, mortgage, savings)..."
                    className="w-full pl-2.5 sm:pl-3 pr-20 sm:pr-28 py-2.5 sm:py-3 text-xs sm:text-base text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column (Hero Visual Mockup with Floating Stats) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <Image
                  src="/tools-laptop.jpg"
                  alt="Financial analytics dashboard on laptop screen"
                  width={840}
                  height={640}
                  priority
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Pill - Responsive placement without viewport overflow */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-[calc(100%-24px)] bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm sm:text-lg shadow-sm flex-shrink-0">
                  +38%
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">Projected Growth</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">Compound interest in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. METRICS & TRUST STATS (RESPONSIVE GRID) ──────────────── */}
      <section className="bg-[#0B1528] text-white py-12 sm:py-16 lg:py-20">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-1.5 sm:space-y-2 border-b sm:border-b-0 border-slate-800 pb-4 sm:pb-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">6+</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Free Calculators</p>
              <p className="text-xs sm:text-sm text-slate-400">Zero signup, zero paywalls</p>
            </div>
            <div className="space-y-1.5 sm:space-y-2 border-b sm:border-b-0 border-slate-800 pb-4 sm:pb-0 sm:border-l sm:border-slate-800 sm:pl-6 lg:pl-8">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">2K+</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Active Readers</p>
              <p className="text-xs sm:text-sm text-slate-400">Trust our weekly insights</p>
            </div>
            <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-0 sm:border-l sm:border-slate-800 sm:pl-6 lg:pl-8">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight">100%</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Editorial Independence</p>
              <p className="text-xs sm:text-sm text-slate-400">No sponsored bias</p>
            </div>
            <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-0 sm:border-l sm:border-slate-800 sm:pl-6 lg:pl-8">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">$10M+</p>
              <p className="text-sm sm:text-base font-bold text-slate-200">Savings Modeled</p>
              <p className="text-xs sm:text-sm text-slate-400">By our user community</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. TOOL CATEGORIES (RESPONSIVE CARDS) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Tool Categories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Find the right tool for your financial goal.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                <PiggyBank className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                Savings &amp; Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Model compound interest, set high-yield savings targets, and project future wealth.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                Loans &amp; Mortgages
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculate amortized monthly payments, compare loan APRs, and minimize total interest.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                <Wallet className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                Budgeting &amp; Debt
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Take control of variable expenses, map debt avalanche payoff, and find monthly cash surplus.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                Investing &amp; Wealth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Forecast index fund returns, retirement horizons, and market compounding power.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
              <span>View calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* ──────────────── 4. POPULAR FINANCE TOOLS (CLEAN REFINED GRID) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Featured Tools
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Popular finance calculators
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Start with our most-used calculators for everyday financial planning.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 hover:text-blue-600 transition-colors self-start sm:self-auto"
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
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors"
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

      {/* ──────────────── 5. FEATURED INTERACTIVE CALCULATOR (RESPONSIVE) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Interactive Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Compound Interest Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Experience the exponential compounding power of consistent investing over time.
          </p>
        </div>

        {/* Modern Card Shell */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-8 lg:p-10">
          {/* Segmented Control - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 sm:pb-6 mb-6 sm:mb-8 gap-3">
            <div className="grid grid-cols-2 sm:inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/60 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("basic")}
                className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all text-center ${
                  activeTab === "basic"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Standard Mode
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("advanced")}
                className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all text-center ${
                  activeTab === "advanced"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Advanced Mode
              </button>
            </div>

            <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
              Real-time calculation engine
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Initial Investment */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Initial Investment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="100"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                      className="w-full pl-9 pr-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-900 rounded-xl border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-100 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Monthly Contribution
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="50"
                      value={regularContribution}
                      onChange={(e) => setRegularContribution(Number(e.target.value) || 0)}
                      className="w-full pl-9 pr-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-900 rounded-xl border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-100 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Interest Rate */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                      className="w-full pl-4 pr-10 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-900 rounded-xl border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-100 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">
                      %
                    </span>
                  </div>
                </div>

                {/* Period */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Investment Period
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
                      className="w-full pl-4 pr-16 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-900 rounded-xl border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-100 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">
                      years
                    </span>
                  </div>
                </div>
              </div>

              {/* Advanced Frequency */}
              {activeTab === "advanced" && (
                <div className="pt-2 animate-in fade-in duration-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Compounding Frequency
                  </label>
                  <select
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(e.target.value as any)}
                    className="w-full px-4 py-3 sm:py-3.5 text-sm font-semibold text-slate-900 rounded-xl border border-slate-200 focus:border-slate-950 focus:ring-4 focus:ring-slate-100 focus:outline-none bg-white transition-all"
                  >
                    <option value="daily">Daily (365x / year)</option>
                    <option value="monthly">Monthly (12x / year)</option>
                    <option value="quarterly">Quarterly (4x / year)</option>
                    <option value="yearly">Annually (1x / year)</option>
                  </select>
                </div>
              )}

              {/* Recharts Visualizer */}
              {result.yearlyBreakdown.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Growth Horizon ({investmentPeriod} Years)
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" /> Contributions
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Total Portfolio
                      </span>
                    </div>
                  </div>
                  <div className="h-44 sm:h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={result.yearlyBreakdown} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="chartBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="year"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 10, fill: "#64748b" }}
                          tickFormatter={(val) => `Yr ${val}`}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 10, fill: "#64748b" }}
                          tickFormatter={(val) => `$${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}`}
                        />
                        <Tooltip
                          formatter={(val: any) => [formatCurrency(Number(val)), ""]}
                          labelFormatter={(label) => `Year ${label}`}
                          contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "12px",
                            color: "#fff",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="contributions"
                          stroke="#94a3b8"
                          fill="#f1f5f9"
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#10b981"
                          strokeWidth={2}
                          fill="url(#chartBalance)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>

            {/* Right Results Card (5 cols - High Contrast Luxury Card) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Estimated Future Value
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight break-words">
                  {formatCurrency(result.totalValue)}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  After {investmentPeriod} years of consistent compounding
                </p>

                <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-slate-800 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Deposits:</span>
                    <span className="font-bold text-white text-sm sm:text-base">
                      {formatCurrency(result.totalContributions)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Compound Interest Earned:</span>
                    <span className="font-bold text-emerald-400 text-sm sm:text-base">
                      +{formatCurrency(result.totalGrowth)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-3.5 sm:p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-2.5 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Your portfolio could grow by <strong>{formatPercentage(result.growthPercentage)}</strong> strictly from reinvested earnings.
                  </p>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link
                  href="/tools/compound-interest-calculator"
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Open Full View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">No account required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 6. EDITORIAL BANNER (RESPONSIVE) ──────────────── */}
      <section className="container-main px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 justify-between text-center lg:text-left">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Knowledge &amp; Habits
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Want to make the most of your money?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore in-depth articles written by experienced finance journalists on budgeting realities, high-yield savings, and digital banking reviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/learn"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-md text-center transition-all active:scale-95"
            >
              Browse all guides
            </Link>
            <Link
              href="/fintech"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-slate-950 border border-slate-200 font-bold text-xs sm:text-sm rounded-full text-center transition-all"
            >
              Explore Fintech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
