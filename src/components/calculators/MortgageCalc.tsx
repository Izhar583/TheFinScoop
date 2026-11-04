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
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Home Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="50000"
                  step="5000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
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
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Loan Term
              </label>
              <select
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all bg-white"
              >
                <option value={30}>30-Year Fixed Mortgage</option>
                <option value={20}>20-Year Fixed Mortgage</option>
                <option value={15}>15-Year Fixed Mortgage</option>
                <option value={10}>10-Year Fixed Mortgage</option>
              </select>
            </div>
          </div>

          {/* Taxes & Insurance */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Estimated Escrow (Taxes &amp; Insurance)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Annual Property Tax
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-900 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Annual Home Insurance
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-900 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Total Monthly Housing Payment
            </span>
            <div className="mt-3">
              <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {formatCurrency(result.monthlyPayment)}
                <span className="text-base font-normal text-slate-400"> /mo</span>
              </p>
            </div>

            {/* PITI Breakdown */}
            <div className="mt-8 space-y-3.5 pt-6 border-t border-slate-800 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Principal &amp; Interest:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(result.principalAndInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Property Tax:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(propertyTax / 12)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Homeowner Insurance:
                </span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(homeInsurance / 12)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300 pt-3 border-t border-slate-800/80">
                <span>Total Interest over {loanTermYears} Years:</span>
                <span className="font-bold text-rose-400 text-base">
                  {formatCurrency(result.totalInterest)}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                Loan amount: {formatCurrency(homePrice - downPayment)} after down payment of {formatCurrency(downPayment)} ({downPaymentPercent}%).
              </span>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-500">
            *Estimates do not include Private Mortgage Insurance (PMI) for down payments under 20% or HOA fees.
          </div>
        </div>
      </div>
    </div>
  );
}
