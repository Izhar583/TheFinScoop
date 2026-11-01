"use client";

import { useState } from "react";
import { calculateLoanPayment } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Info, ShieldCheck } from "lucide-react";

export default function LoanPaymentCalc() {
  const [loanAmount, setLoanAmount] = useState<number>(25000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(5);

  const result = calculateLoanPayment({
    loanAmount,
    annualInterestRate,
    loanTermYears,
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden">
      <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start">
        {/* Inputs */}
        <div className="md:col-span-7 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                $
              </span>
              <input
                type="number"
                min="500"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Interest Rate (APR)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="40"
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

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Loan Term
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value) || 1)}
                  className="w-full pl-3 pr-14 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                  years
                </span>
              </div>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div>
            <span className="text-[11px] font-semibold text-gray-500 block mb-2">Common Terms:</span>
            <div className="flex flex-wrap gap-2">
              {[3, 5, 7, 10].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setLoanTermYears(yr)}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    loanTermYears === yr
                      ? "bg-brand-navy text-white border-brand-navy font-semibold"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {yr} Years
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-6 border border-blue-100/60 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Estimated Monthly Payment
            </span>
            <div className="mt-1">
              <p className="text-3xl lg:text-4xl font-black text-brand-navy">
                {formatCurrency(result.monthlyPayment)}
                <span className="text-sm font-normal text-gray-500"> /mo</span>
              </p>
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Principal amount:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total interest paid:</span>
                <span className="font-semibold text-rose-600">
                  {formatCurrency(result.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pt-2 border-t border-gray-100 font-semibold text-gray-900">
                <span>Total repayment:</span>
                <span>{formatCurrency(result.totalPayment)}</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-blue-50 border border-blue-100 flex items-start gap-2 text-xs text-blue-900">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                Paying extra toward principal each month reduces your total interest and shortens loan term.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-3 text-[11px] text-gray-400">
            *Estimates do not include taxes, origination fees or lender insurance.
          </div>
        </div>
      </div>
    </div>
  );
}

