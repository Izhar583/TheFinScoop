"use client";

import { useState } from "react";
import { calculateSavingsGoal } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { Target, Sparkles } from "lucide-react";

export default function SavingsGoalCalc() {
  const [targetAmount, setTargetAmount] = useState<number>(20000);
  const [currentSavings, setCurrentSavings] = useState<number>(3000);
  const [timelineMonths, setTimelineMonths] = useState<number>(24);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(4.5); // High Yield Savings Account rate

  const result = calculateSavingsGoal({
    targetAmount,
    currentSavings,
    timelineMonths,
    annualInterestRate,
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden">
      <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="md:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Savings Target
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Current Savings
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="250"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Timeframe
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={timelineMonths}
                  onChange={(e) => setTimelineMonths(Number(e.target.value) || 1)}
                  className="w-full pl-3 pr-16 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  months
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Expected Interest (HYSA / APY)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.1"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                  className="w-full pl-3 pr-8 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-xl p-6 border border-emerald-100/60 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Required Monthly Savings
            </span>
            <div className="mt-1">
              <p className="text-3xl lg:text-4xl font-black text-emerald-700">
                {formatCurrency(result.monthlyContributionNeeded)}
                <span className="text-sm font-normal text-gray-500"> /mo</span>
              </p>
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Total contributions needed:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(result.totalContributions)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Interest earned towards goal:</span>
                <span className="font-semibold text-emerald-700">
                  +{formatCurrency(result.interestEarned)}
                </span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-900">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                By saving ${result.monthlyContributionNeeded}/mo, you hit your ${formatCurrency(targetAmount)} goal in {timelineMonths} months!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

