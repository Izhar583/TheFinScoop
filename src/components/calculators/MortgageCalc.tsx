"use client";

import { useState } from "react";
import { calculateMortgage } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { Home, Info, Sparkles } from "lucide-react";

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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden">
      <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="md:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Home Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="50000"
                  step="5000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="15"
                  step="0.125"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value) || 0)}
                  className="w-full pl-3 pr-8 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Loan Term
              </label>
              <select
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all bg-white"
              >
                <option value={30}>30 Years Fixed</option>
                <option value={20}>20 Years Fixed</option>
                <option value={15}>15 Years Fixed</option>
                <option value={10}>10 Years Fixed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Annual Property Tax ($/yr)
              </label>
              <input
                type="number"
                min="0"
                step="100"
                value={propertyTax}
                onChange={(e) => setPropertyTax(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Annual Home Insurance ($/yr)
              </label>
              <input
                type="number"
                min="0"
                step="50"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-6 border border-blue-100/60 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Total Monthly Housing Payment
            </span>
            <div className="mt-1">
              <p className="text-3xl lg:text-4xl font-black text-brand-navy">
                {formatCurrency(result.monthlyPayment)}
                <span className="text-sm font-normal text-gray-500"> /mo</span>
              </p>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Principal &amp; Interest:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(result.principalAndInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Property Tax:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(propertyTax / 12)} /mo
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Home Insurance:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(homeInsurance / 12)} /mo
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pt-2 border-t border-gray-100 font-semibold text-gray-900">
                <span>Total Loan Principal:</span>
                <span>{formatCurrency(homePrice - downPayment)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total 30-Year Interest:</span>
                <span className="font-semibold text-rose-600">{formatCurrency(result.totalInterest)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 text-[11px] text-gray-400">
            *Excludes PMI (Private Mortgage Insurance) if down payment is under 20%.
          </div>
        </div>
      </div>
    </div>
  );
}

