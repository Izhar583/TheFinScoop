"use client";

import { useState } from "react";
import { calculateCompoundInterest } from "@/lib/calculators";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingUp, ArrowRight, Sparkles, BarChart2 } from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CompoundInterestCalc() {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");
  const [showChart, setShowChart] = useState<boolean>(true);
  
  // Inputs
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [regularContribution, setRegularContribution] = useState<number>(200);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(7);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(20);
  const [compoundFrequency, setCompoundFrequency] = useState<"daily" | "monthly" | "quarterly" | "yearly">("monthly");

  // Calculate results live
  const result = calculateCompoundInterest({
    initialInvestment,
    regularContribution,
    contributionFrequency: "monthly",
    annualInterestRate,
    investmentPeriod,
    compoundFrequency,
  });

  return (
    <div className="bg-white rounded-3xl border border-[#E5DFD3] shadow-xl overflow-hidden">
      {/* Top Bar / Tabs */}
      <div className="flex items-center justify-between border-b border-[#E5DFD3] bg-[#FAF7F2] px-8 py-5">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("basic")}
            className={`pb-2 text-base font-bold border-b-2 transition-all ${
              activeTab === "basic"
                ? "border-[#D9541E] text-[#111111]"
                : "border-transparent text-[#737373] hover:text-[#111111]"
            }`}
          >
            Basic Calculator
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`pb-2 text-base font-bold border-b-2 transition-all ${
              activeTab === "advanced"
                ? "border-[#D9541E] text-[#111111]"
                : "border-transparent text-[#737373] hover:text-[#111111]"
            }`}
          >
            Frequency Settings
          </button>
        </div>

        <button
          onClick={() => setShowChart(!showChart)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E5DFD3] text-xs font-bold text-[#111111] hover:border-[#D9541E]/40 shadow-xs transition-colors"
        >
          <BarChart2 className="w-3.5 h-3.5 text-[#D9541E]" />
          <span>{showChart ? "Hide Graph" : "Show Growth Graph"}</span>
        </button>
      </div>

      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Form Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Initial Investment */}
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Initial Investment
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>

            {/* Monthly Contribution */}
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Monthly Contribution
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={regularContribution}
                  onChange={(e) => setRegularContribution(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Annual Interest Rate */}
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Annual Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  %
                </span>
              </div>
            </div>

            {/* Investment Period */}
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Investment Period
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
                  className="w-full pl-4 pr-16 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  years
                </span>
              </div>
            </div>
          </div>

          {/* Advanced Tab Options */}
          {activeTab === "advanced" && (
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] animate-in fade-in duration-150">
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Compounding Frequency
              </label>
              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(e.target.value as any)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all bg-white"
              >
                <option value="daily">Daily (365 times / year)</option>
                <option value="monthly">Monthly (12 times / year — Standard)</option>
                <option value="quarterly">Quarterly (4 times / year)</option>
                <option value="yearly">Annually (1 time / year)</option>
              </select>
            </div>
          )}

          {/* Interactive Recharts Area Visualizer */}
          {showChart && result.yearlyBreakdown.length > 0 && (
            <div className="pt-6 border-t border-[#E5DFD3]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
                  Growth Trajectory Over {investmentPeriod} Years
                </span>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[#737373]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" /> Deposits
                  </span>
                  <span className="flex items-center gap-1.5 text-[#D9541E]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9541E] inline-block" /> Total Portfolio
                  </span>
                </div>
              </div>
              <div className="h-56 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={result.yearlyBreakdown}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D9541E" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#D9541E" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#111111" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#111111" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="year"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12, fill: "#737373" }}
                      tickFormatter={(val) => `Yr ${val}`}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12, fill: "#737373" }}
                      tickFormatter={(val) => `$${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}`}
                    />
                    <Tooltip
                      formatter={(val: any) => [formatCurrency(Number(val)), ""]}
                      labelFormatter={(label) => `Year ${label}`}
                      contentStyle={{
                        backgroundColor: "#111111",
                        border: "1px solid #262626",
                        borderRadius: "16px",
                        fontSize: "13px",
                        color: "#fff",
                        padding: "12px 16px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="contributions"
                      stroke="#111111"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorContrib)"
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#D9541E"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Results Panel (5 cols) */}
        <div className="lg:col-span-5 bg-[#111111] text-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#262626] flex flex-col justify-between space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9541E]">
              Projected Portfolio Value
            </span>
            <div className="mt-3">
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {formatCurrency(result.totalValue)}
              </p>
              <p className="text-sm text-[#888888] mt-1">
                Value after {investmentPeriod} years of compounding
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-[#262626] text-sm">
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span>Total deposits:</span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(result.totalContributions)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span>Total compound interest:</span>
                <span className="font-bold text-[#D9541E] text-base">
                  +{formatCurrency(result.totalGrowth)}
                </span>
              </div>
            </div>

            {/* Growth callout badge */}
            <div className="mt-6 p-4 rounded-2xl bg-[#181818] border border-[#262626] text-sm text-[#E5DFD3] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#D9541E] flex-shrink-0 mt-0.5" />
              <span>
                Your money grows by <strong className="text-white">+{formatPercentage(result.growthPercentage)}</strong> strictly from compounding interest.
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#262626] text-xs text-[#888888]">
            <span>
              Projections assume a continuous rate of return and monthly compounding without account maintenance fees.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
