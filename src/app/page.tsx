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
  Sprout
} from "lucide-react";
import { calculateCompoundInterest } from "@/lib/calculators";
import { formatCurrency, formatPercentage } from "@/lib/utils";

export default function HomePage() {
  // Calculator state matching exact mockup
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [regularContribution, setRegularContribution] = useState<number>(200);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(7);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(20);
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");

  const result = calculateCompoundInterest({
    initialInvestment,
    regularContribution,
    contributionFrequency: "monthly",
    annualInterestRate,
    investmentPeriod,
    compoundFrequency: "monthly",
  });

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* ──────────────── 1. HERO SECTION (EXACT DESIGN MATCH) ──────────────── */}
      <section className="relative bg-[#fafbfd] border-b border-gray-100 py-10 lg:py-14 overflow-hidden">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (Content & Search) */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#1D3A6E]">
                FINANCE TOOLS
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1D3A6E] tracking-tight leading-[1.18] font-serif">
                Put your numbers into perspective.
              </h1>
              
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg leading-relaxed">
                Use simple calculators and planning tools to understand your finances, explore your options and make confident decisions.
              </p>

              {/* Search Bar pill */}
              <div className="pt-2">
                <form 
                  action="/search" 
                  method="GET"
                  className="relative flex items-center bg-white border border-gray-200 rounded-full shadow-xs hover:border-gray-300 focus-within:border-[#1D3A6E] transition-all max-w-lg"
                >
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search for a tool (e.g., loan calculator, budget planner...)"
                    className="w-full pl-11 pr-4 py-3 text-xs text-gray-800 placeholder-gray-400 bg-transparent rounded-full focus:outline-none"
                  />
                </form>
              </div>

              {/* Popular tools line */}
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

            {/* Right Column (Laptop Mockup Image) */}
            <div className="lg:col-span-6 flex justify-end">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/tools-laptop.jpg"
                  alt="Financial growth chart on laptop screen with coffee mug and plant"
                  width={640}
                  height={300}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. TOOL CATEGORIES ──────────────── */}
      <section className="container-main">
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            TOOL CATEGORIES
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
            Find the right tool for your goal.
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Explore our collection of free calculators and planning tools, organized by your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Savings & Growth */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:border-gray-200 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center text-white shadow-2xs">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Savings &amp; Growth</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Plan for the future with savings and investment tools.
              </p>
            </div>
            <div className="mt-5 pt-3">
              <Link href="/tools?category=savings-growth" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                <span>View tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 2. Loans & Borrowing */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:border-gray-200 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1D3A6E] flex items-center justify-center text-white shadow-2xs">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Loans &amp; Borrowing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Calculate payments, compare options and understand costs.
              </p>
            </div>
            <div className="mt-5 pt-3">
              <Link href="/tools?category=loans-borrowing" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                <span>View tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. Budgeting & Debt */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:border-gray-200 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EA580C] flex items-center justify-center text-white shadow-2xs">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Budgeting &amp; Debt</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Take control of your spending and pay down debt faster.
              </p>
            </div>
            <div className="mt-5 pt-3">
              <Link href="/tools?category=budgeting-debt" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                <span>View tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. Investing & Retirement */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:border-gray-200 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-2xs">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Investing &amp; Retirement</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Estimate growth, explore scenarios and plan for tomorrow.
              </p>
            </div>
            <div className="mt-5 pt-3">
              <Link href="/tools?category=investing-retirement" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                <span>View tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. POPULAR FINANCE TOOLS ──────────────── */}
      <section className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              FEATURED TOOLS
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
              Popular finance tools
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Start with our most used calculators and planners.
            </p>
          </div>
          <Link
            href="/tools"
            className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>View all tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. Compound Interest Calculator */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Compound Interest Calculator</h3>
              <p className="text-xs text-gray-500">See how your savings can grow over time.</p>
              <Link href="/tools/compound-interest-calculator" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 2. Loan Payment Calculator */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#1D3A6E] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Loan Payment Calculator</h3>
              <p className="text-xs text-gray-500">Estimate monthly payments and total interest.</p>
              <Link href="/tools/loan-payment-calculator" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 3. Savings Goal Calculator */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#0D9488] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Target className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Savings Goal Calculator</h3>
              <p className="text-xs text-gray-500">Find out how much you need to save each month.</p>
              <Link href="/tools/savings-goal-calculator" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 4. Budget Planner */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#9333EA] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Wallet className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Budget Planner</h3>
              <p className="text-xs text-gray-500">Track income, expenses and build a healthier budget.</p>
              <Link href="/tools/budget-planner" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 5. Debt Payoff Calculator */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#EA580C] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <CreditCard className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Debt Payoff Calculator</h3>
              <p className="text-xs text-gray-500">Create a plan to become debt-free faster.</p>
              <Link href="/tools/loan-payment-calculator" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 6. Mortgage Calculator */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Home className="w-4 h-4" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-sm font-bold text-gray-900">Mortgage Calculator</h3>
              <p className="text-xs text-gray-500">Estimate monthly payments and compare loan options.</p>
              <Link href="/tools/mortgage-calculator" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline pt-2">
                <span>Use tool</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 4. FEATURED CALCULATOR (EXACT MATCH) ──────────────── */}
      <section className="container-main">
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            FEATURED TOOL
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
            Compound Interest Calculator
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            See how your savings can grow over time with the power of compounding.
          </p>
        </div>

        {/* Tabbed Calculator Container */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs">
          {/* Basic / Advanced Tab */}
          <div className="flex gap-4 border-b border-gray-100 pb-3 mb-6">
            <button
              onClick={() => setActiveTab("basic")}
              className={`text-xs font-semibold transition-colors pb-1 ${
                activeTab === "basic"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              className={`text-xs font-semibold transition-colors pb-1 ${
                activeTab === "advanced"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              Advanced
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Initial Investment */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Initial Investment
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      $
                    </span>
                    <input
                      type="number"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-2 text-xs rounded border border-gray-200 focus:border-[#1D3A6E] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Regular Contribution */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Regular Contribution
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      $
                    </span>
                    <input
                      type="number"
                      value={regularContribution}
                      onChange={(e) => setRegularContribution(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-8 py-2 text-xs rounded border border-gray-200 focus:border-[#1D3A6E] focus:outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Annual Interest Rate */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Annual Interest Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={annualInterestRate}
                      onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                      className="w-full pl-3 pr-8 py-2 text-xs rounded border border-gray-200 focus:border-[#1D3A6E] focus:outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      %
                    </span>
                  </div>
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Investment Period
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
                      className="w-full pl-3 pr-14 py-2 text-xs rounded border border-gray-200 focus:border-[#1D3A6E] focus:outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      years
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Green Button matching the mockup */}
              <div className="pt-2">
                <button
                  type="button"
                  className="w-full py-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs rounded flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                >
                  <span>Calculate Results</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Results Panel (5 cols) - Exact match to green mint card */}
            <div className="lg:col-span-5 bg-[#F0FDF4] rounded-xl p-5 border border-emerald-100 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Estimated Results
                </p>
                
                <p className="text-3xl font-extrabold text-gray-900 mt-1">
                  {formatCurrency(result.totalValue)}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Total value after {investmentPeriod} years
                </p>

                <div className="mt-5 space-y-2 pt-3 border-t border-emerald-200/60 text-xs">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Total contributions</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(result.totalContributions)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Total growth (interest)</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(result.totalGrowth)}
                    </span>
                  </div>
                </div>

                {/* Green Highlight Pill Box */}
                <div className="mt-4 p-2.5 rounded-lg bg-emerald-100/70 text-emerald-900 flex items-center gap-2 text-[11px] font-medium">
                  <Sprout className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>
                    Your savings could grow by <strong>{formatPercentage(result.growthPercentage)}</strong> thanks to compound interest.
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-200/60 space-y-2 text-[10px] text-gray-400">
                <p>
                  Results are estimates and assume a consistent interest rate. They do not include fees, taxes or other factors that may affect returns.
                </p>
                <Link
                  href="/tools/compound-interest-calculator"
                  className="inline-block text-xs font-semibold text-blue-600 hover:underline pt-1"
                >
                  View detailed calculator →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 5. LEARN & GROW BANNER (EXACT MATCH) ──────────────── */}
      <section className="container-main">
        <div className="bg-[#FAFBFD] border border-gray-200/90 rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6">
          {/* Notebook Photo on Left */}
          <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-2xs border border-gray-200">
            <Image
              src="/better-money-habits.jpg"
              alt="Better Money Habits notebook with pen"
              width={180}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text in Middle */}
          <div className="flex-1 space-y-1 text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              LEARN &amp; GROW
            </p>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              Want to make the most of your money?
            </h3>
            <p className="text-xs text-gray-500">
              Explore our guides, get practical tips and learn how to build better financial habits.
            </p>
          </div>

          {/* Button on Right */}
          <div className="flex-shrink-0">
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1D3A6E] hover:bg-[#152a50] text-white text-xs font-bold rounded-md shadow-2xs transition-colors"
            >
              <span>Browse our guides</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
