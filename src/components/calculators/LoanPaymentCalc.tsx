"use client";

import { useState } from "react";
import { calculateLoanPayment } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Info, ShieldCheck, ChevronDown, Calendar } from "lucide-react";

export default function LoanPaymentCalc() {
  const [loanAmount, setLoanAmount] = useState<number>(25000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(5);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const result = calculateLoanPayment({
    loanAmount,
    annualInterestRate,
    loanTermYears,
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Loan Principal Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                $
              </span>
              <input
                type="number"
                min="500"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Annual Interest Rate (APR)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="40"
                  step="0.1"
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
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value) || 1)}
                  className="w-full pl-4 pr-16 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  years
                </span>
              </div>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Standard Loan Terms:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[2, 3, 5, 7, 10].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setLoanTermYears(yr)}
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-all ${
                    loanTermYears === yr
                      ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {yr} Years ({yr * 12} mos)
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Estimated Monthly Payment
            </span>
            <div className="mt-3">
              <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {formatCurrency(result.monthlyPayment)}
                <span className="text-base font-normal text-slate-400"> /mo</span>
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Principal borrowed:</span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Total interest paid:</span>
                <span className="font-bold text-rose-400 text-base">
                  {formatCurrency(result.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300 pt-3 border-t border-slate-800/80">
                <span>Total repayment:</span>
                <span className="font-extrabold text-white text-lg">
                  {formatCurrency(result.totalPayment)}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-blue-950/60 border border-blue-900 text-xs text-blue-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                Making just 1 extra payment per year toward principal can save thousands in interest and shave years off your term.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{showSchedule ? "Hide Amortization Schedule" : "View Amortization Schedule"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showSchedule ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {/* Expandable Amortization Schedule */}
      {showSchedule && (
        <div className="border-t border-slate-100 bg-slate-50 p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-bold text-slate-900">
              Loan Amortization Schedule (First 24 Months)
            </h4>
            <span className="text-xs text-slate-500 font-semibold">
              Showing months 1–{Math.min(24, result.amortizationSchedule.length)} of {result.amortizationSchedule.length}
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-100/80 text-slate-900 font-bold uppercase sticky top-0 border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Month</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4">Principal</th>
                  <th className="py-3 px-4">Interest</th>
                  <th className="py-3 px-4">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {result.amortizationSchedule.slice(0, 24).map((entry) => (
                  <tr key={entry.month} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-slate-900">Month {entry.month}</td>
                    <td className="py-2.5 px-4 font-semibold">{formatCurrency(entry.payment)}</td>
                    <td className="py-2.5 px-4 text-emerald-600 font-medium">+{formatCurrency(entry.principal)}</td>
                    <td className="py-2.5 px-4 text-rose-500 font-medium">-{formatCurrency(entry.interest)}</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900">{formatCurrency(entry.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
