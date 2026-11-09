"use client";

import { useState } from "react";
import { calculateSavingsGoal } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { Target, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

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
    <div className="bg-white rounded-3xl border border-[#E5DFD3] shadow-xl overflow-hidden">
      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Savings Target Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Starting Savings Already Saved
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="250"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Target Timeframe
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={timelineMonths}
                  onChange={(e) => setTimelineMonths(Number(e.target.value) || 1)}
                  className="w-full pl-4 pr-20 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  months
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Expected Annual APY (HYSA)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.1"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Quick preset targets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block mb-2.5">
              Popular Milestone Targets:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[5000, 10000, 25000, 50000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setTargetAmount(amt)}
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-all ${
                    targetAmount === amt
                      ? "bg-[#D9541E] text-white border-[#D9541E] shadow-sm"
                      : "bg-[#FAF7F2] text-[#4A4A4A] border-[#E5DFD3] hover:border-[#D9541E]/40"
                  }`}
                >
                  ${(amt / 1000).toFixed(0)}k Goal
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#111111] text-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#262626] flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9541E]">
              Required Monthly Contribution
            </span>
            <div className="mt-3">
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {formatCurrency(result.monthlyContributionNeeded)}
                <span className="text-base font-normal text-[#888888]"> /mo</span>
              </p>
              <p className="text-sm text-[#888888] mt-1">
                Deposit this amount monthly for {timelineMonths} months
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-[#262626] text-sm">
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span>Total out-of-pocket deposits:</span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(result.totalContributions)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span>Compound interest earned:</span>
                <span className="font-bold text-[#D9541E] text-base">
                  +{formatCurrency(result.interestEarned)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC] pt-3 border-t border-[#262626]">
                <span>Final Target Portfolio:</span>
                <span className="font-black text-white text-lg">
                  {formatCurrency(targetAmount)}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#181818] border border-[#262626] text-xs text-[#E5DFD3] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D9541E] flex-shrink-0 mt-0.5" />
              <span>
                By keeping funds in a {annualInterestRate}% APY High-Yield Savings Account, interest pays {formatCurrency(result.interestEarned)} toward your target.
              </span>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#888888]">
            *Assumes constant monthly deposits made at regular intervals.
          </div>
        </div>
      </div>
    </div>
  );
}
