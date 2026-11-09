"use client";

import { useState } from "react";
import { calculateMortgage } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { Home, Info, Sparkles, Building2 } from "lucide-react";

export default function MortgageCalc() {
  const [homePrice, setHomePrice] = useState<number>(400000);
  const [downPayment, setDownPayment] = useState<number>(80000); // 20%
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(6.8);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);
  const [propertyTax, setPropertyTax] = useState<number>(3600); // per yr
  const [homeInsurance, setHomeInsurance] = useState<number>(1200); // per yr

  const downPaymentPercent = homePrice > 0 ? Math.round((downPayment / homePrice) * 100) : 0;

  const result = calculateMortgage({
    homePrice,
    downPayment,
    annualInterestRate,
    loanTermYears,
    propertyTax,
    homeInsurance,
  });

  return (
    <div className="bg-white rounded-3xl border border-[#E5DFD3] shadow-xl overflow-hidden">
      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Home Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="50000"
                  step="5000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Mortgage Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="15"
                  step="0.125"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">
                Loan Term
              </label>
              <select
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full px-4 py-3.5 rounded-xl border border-[#E5DFD3] text-base font-bold text-[#111111] focus:outline-none focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 transition-all bg-[#FAF7F2] focus:bg-white"
              >
                <option value={30}>30-Year Fixed Mortgage</option>
                <option value={20}>20-Year Fixed Mortgage</option>
                <option value={15}>15-Year Fixed Mortgage</option>
                <option value={10}>10-Year Fixed Mortgage</option>
              </select>
            </div>
          </div>

          {/* Taxes & Insurance */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block">
              Estimated Escrow (Taxes &amp; Insurance)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1">
                  Annual Property Tax
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373] text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 rounded-lg border border-[#E5DFD3] text-sm font-bold text-[#111111] bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4A4A4A] mb-1">
                  Annual Home Insurance
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373] text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 rounded-lg border border-[#E5DFD3] text-sm font-bold text-[#111111] bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-[#111111] text-[#E5DFD3] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#262626] flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9541E]">
              Total Monthly Housing Payment
            </span>
            <div className="mt-3">
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {formatCurrency(result.monthlyPayment)}
                <span className="text-base font-normal text-[#888888]"> /mo</span>
              </p>
            </div>

            {/* PITI Breakdown */}
            <div className="mt-8 space-y-3.5 pt-6 border-t border-[#262626] text-sm">
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9541E]" /> Principal &amp; Interest:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(result.principalAndInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" /> Property Tax:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(propertyTax / 12)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#888888]" /> Homeowner Insurance:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(homeInsurance / 12)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#CCCCCC] pt-3 border-t border-[#262626]">
                <span>Total Interest over {loanTermYears} Years:</span>
                <span className="font-bold text-[#D9541E] text-base">
                  {formatCurrency(result.totalInterest)}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#181818] border border-[#262626] text-xs text-[#E5DFD3] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D9541E] flex-shrink-0 mt-0.5" />
              <span>
                Loan amount: {formatCurrency(homePrice - downPayment)} after down payment of {formatCurrency(downPayment)} ({downPaymentPercent}%).
              </span>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#888888]">
            *Estimates do not include Private Mortgage Insurance (PMI) for down payments under 20% or HOA fees.
          </div>
        </div>
      </div>
    </div>
  );
}
