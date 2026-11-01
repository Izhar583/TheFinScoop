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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden">
      {/* Top Bar / Tabs */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 pt-4">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("basic")}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === "basic"
                ? "border-brand-navy text-brand-navy"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === "advanced"
                ? "border-brand-navy text-brand-navy"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            Advanced
          </button>
        </div>

        <button
          onClick={() => setShowChart(!showChart)}
          className="inline-flex items-center gap-1.5 pb-3 text-xs font-semibold text-blue-600 hover:text-blue-800"
        >
          <BarChart2 className="w-3.5 h-3.5" />
          <span>{showChart ? "Hide Chart" : "Show Growth Chart"}</span>
        </button>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start">
        {/* Form Inputs (7 cols) */}
        <div className="md:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Initial Investment */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Initial Investment
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>

            {/* Monthly Contribution */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Monthly Contribution
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={regularContribution}
                  onChange={(e) => setRegularContribution(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Annual Interest Rate */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
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
                  className="w-full pl-3 pr-8 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  %
                </span>
              </div>
            </div>

            {/* Investment Period */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Investment Period
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
                  className="w-full pl-3 pr-14 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  years
                </span>
              </div>
            </div>
          </div>

          {/* Advanced Tab Options */}
          {activeTab === "advanced" && (
            <div className="pt-2 animate-in fade-in duration-150">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Compounding Frequency
              </label>
              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all bg-white"
              >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Annually</option>
              </select>
            </div>
          )}

          {/* Interactive Recharts Area Visualizer */}
          {showChart && result.yearlyBreakdown.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Portfolio Growth Over {investmentPeriod} Years
                </span>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1 text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Contributions
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Total Value
                  </span>
                </div>
              </div>
              <div className="h-44 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={result.yearlyBreakdown}
                    margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="year"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickFormatter={(val) => `Yr ${val}`}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickFormatter={(val) => `$${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}`}
                    />
                    <Tooltip
                      formatter={(val: any) => [formatCurrency(Number(val)), ""]}
                      labelFormatter={(label) => `Year ${label}`}
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="contributions"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorContrib)"
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#10b981"
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
        <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-6 border border-blue-100/60 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Estimated Results
            </span>
            <div className="mt-1">
              <p className="text-3xl lg:text-4xl font-extrabold text-brand-navy">
                {formatCurrency(result.totalValue)}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Total value after {investmentPeriod} years
              </p>
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Total contributions:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(result.totalContributions)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total growth (interest):</span>
                <span className="font-semibold text-green-700">
                  +{formatCurrency(result.totalGrowth)}
                </span>
              </div>
            </div>

            {/* Growth callout badge */}
            <div className="mt-5 p-3 rounded-lg bg-green-50 border border-green-200/80 flex items-center gap-2.5 text-xs text-green-900">
              <Sparkles className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>
                Your savings could grow by <strong>{formatPercentage(result.growthPercentage)}</strong> thanks to compound interest.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
            <span className="text-[11px] text-gray-400">
              Results assume consistent interest rates.
            </span>
            <Link
              href="/tools/compound-interest-calculator"
              className="text-blue-600 font-semibold hover:underline"
            >
              View detailed calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
