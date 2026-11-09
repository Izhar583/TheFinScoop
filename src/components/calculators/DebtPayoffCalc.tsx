"use client";

import { useState } from "react";
import { calculateDebtPayoff } from "@/lib/calculators";
import { formatCurrency } from "@/lib/utils";
import { CreditCard, Plus, Trash2, ShieldCheck, Sparkles, TrendingDown, ArrowRight } from "lucide-react";

interface DebtItem {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export default function DebtPayoffCalc() {
  const [debts, setDebts] = useState<DebtItem[]>([
    { id: "1", name: "Credit Card (Visa)", balance: 4500, interestRate: 21.9, minimumPayment: 135 },
    { id: "2", name: "Auto Loan", balance: 12000, interestRate: 6.5, minimumPayment: 260 },
    { id: "3", name: "Student Loan", balance: 8500, interestRate: 5.2, minimumPayment: 110 },
  ]);

  const [strategy, setStrategy] = useState<"avalanche" | "snowball">("avalanche");
  const [extraPayment, setExtraPayment] = useState<number>(200);

  // New debt form state
  const [newDebtName, setNewDebtName] = useState("");
  const [newDebtBalance, setNewDebtBalance] = useState("");
  const [newDebtRate, setNewDebtRate] = useState("");
  const [newDebtMin, setNewDebtMin] = useState("");

  const handleAddDebt = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDebtName.trim() && Number(newDebtBalance) > 0) {
      setDebts([
        ...debts,
        {
          id: Date.now().toString(),
          name: newDebtName.trim(),
          balance: Number(newDebtBalance),
          interestRate: Number(newDebtRate) || 0,
          minimumPayment: Number(newDebtMin) || Math.max(25, Number(newDebtBalance) * 0.025),
        },
      ]);
      setNewDebtName("");
      setNewDebtBalance("");
      setNewDebtRate("");
      setNewDebtMin("");
    }
  };

  const handleRemoveDebt = (id: string) => {
    setDebts(debts.filter((d) => d.id !== id));
  };

  const handleUpdateDebt = (id: string, field: keyof DebtItem, value: number) => {
    setDebts(
      debts.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const result = calculateDebtPayoff({
    debts,
    extraMonthlyPayment: extraPayment,
    strategy,
  });

  const totalBalance = debts.reduce((sum, d) => sum + d.balance, 0);
  const totalMinPayment = debts.reduce((sum, d) => sum + d.minimumPayment, 0);

  return (
    <div className="bg-white rounded-3xl border border-[#E5DFD3] shadow-sm overflow-hidden">
      {/* Strategy Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5DFD3] bg-[#FAF7F2] px-4 sm:px-8 py-4 sm:py-5 gap-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-[#D9541E]" />
          <span className="font-bold text-[#111111] text-base">Payoff Methodology</span>
        </div>

        <div className="inline-flex flex-col sm:flex-row rounded-2xl sm:rounded-full bg-[#E5DFD3]/60 p-1 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setStrategy("avalanche")}
            className={`px-4 sm:px-5 py-2 text-xs font-bold rounded-xl sm:rounded-full transition-all text-center ${
              strategy === "avalanche"
                ? "bg-[#D9541E] text-white shadow-sm"
                : "text-[#737373] hover:text-[#111111]"
            }`}
          >
            Debt Avalanche (Lowest Interest Cost)
          </button>
          <button
            type="button"
            onClick={() => setStrategy("snowball")}
            className={`px-4 sm:px-5 py-2 text-xs font-bold rounded-xl sm:rounded-full transition-all text-center ${
              strategy === "snowball"
                ? "bg-[#D9541E] text-white shadow-sm"
                : "text-[#737373] hover:text-[#111111]"
            }`}
          >
            Debt Snowball (Fastest Wins)
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-8 md:p-10 grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        {/* Left Form: Debts Management (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Extra Monthly Payment */}
          <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#E5DFD3] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-sm font-bold text-[#111111]">
                Extra Monthly Payment
              </label>
              <div className="flex gap-2 flex-wrap">
                {[100, 200, 300, 500].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setExtraPayment(amt)}
                    className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                      extraPayment === amt
                        ? "bg-[#D9541E] text-white border-[#D9541E]"
                        : "bg-white text-[#737373] border-[#E5DFD3] hover:bg-[#FAF7F2]"
                    }`}
                  >
                    +${amt}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373] font-semibold text-base">
                $
              </span>
              <input
                type="number"
                min="0"
                step="50"
                value={extraPayment}
                onChange={(e) => setExtraPayment(Number(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E5DFD3] bg-white text-base font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D9541E]"
              />
            </div>
            <p className="text-xs text-[#737373]">
              Total monthly commitment: <span className="font-bold text-[#111111]">{formatCurrency(totalMinPayment + extraPayment)}/mo</span> ({formatCurrency(totalMinPayment)} minimums + {formatCurrency(extraPayment)} accelerated).
            </p>
          </div>

          {/* Debts Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-[#111111]">
                Current Outstanding Debts ({debts.length})
              </span>
              <span className="text-xs font-bold text-[#737373]">
                Total Debt: {formatCurrency(totalBalance)}
              </span>
            </div>

            <div className="space-y-3">
              {debts.map((d) => (
                <div
                  key={d.id}
                  className="p-4 bg-white rounded-2xl border border-[#E5DFD3] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="text-base font-bold text-[#111111] truncate">{d.name}</p>
                    <p className="text-xs text-[#737373]">
                      APR: {d.interestRate}% · Min Pay: {formatCurrency(d.minimumPayment)}/mo
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-32">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737373] text-xs">
                        $
                      </span>
                      <input
                        type="number"
                        min="0"
                        value={d.balance}
                        onChange={(e) => handleUpdateDebt(d.id, "balance", Number(e.target.value) || 0)}
                        className="w-full pl-7 pr-3 py-1.5 rounded-lg border border-[#E5DFD3] text-sm font-bold text-right text-[#111111] focus:outline-none focus:border-[#D9541E]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveDebt(d.id)}
                      className="p-2 text-[#737373] hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                      aria-label="Remove debt"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Debt Form */}
          <form onSubmit={handleAddDebt} className="p-5 bg-[#FAF7F2] rounded-2xl border border-dashed border-[#E5DFD3] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block">
              Add Another Debt
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Debt Name (e.g. Card)"
                value={newDebtName}
                onChange={(e) => setNewDebtName(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D9541E]"
              />
              <input
                type="number"
                placeholder="Balance ($)"
                value={newDebtBalance}
                onChange={(e) => setNewDebtBalance(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D9541E]"
              />
              <input
                type="number"
                step="0.1"
                placeholder="APR (%)"
                value={newDebtRate}
                onChange={(e) => setNewDebtRate(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D9541E]"
              />
              <input
                type="number"
                placeholder="Min Pay ($)"
                value={newDebtMin}
                onChange={(e) => setNewDebtMin(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D9541E]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9541E] hover:bg-[#BF4413] text-white rounded-full font-bold text-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Debt to Plan</span>
            </button>
          </form>
        </div>

        {/* Right Panel: Results & Timeline (5 cols) */}
        <div className="lg:col-span-5 bg-[#111111] text-[#E5DFD3] rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#262626] space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#888888]">
              Projected Debt Freedom
            </span>
            <div className="mt-2 flex items-baseline gap-3">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {result.payoffDate}
              </h3>
            </div>
            <p className="text-xs text-[#D9541E] font-semibold mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Accelerated with {formatCurrency(extraPayment)}/mo extra
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-5 border-y border-[#262626]">
            <div>
              <span className="text-xs text-[#888888]">Total Interest</span>
              <p className="text-2xl font-bold text-white mt-1">
                {formatCurrency(result.totalInterestPaid)}
              </p>
            </div>
            <div>
              <span className="text-xs text-[#888888]">Interest Saved</span>
              <p className="text-2xl font-bold text-[#D9541E] mt-1">
                +{formatCurrency(result.interestSaved)}
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#888888] block mb-3">
              Recommended Payoff Priority:
            </span>
            <ol className="space-y-2.5">
              {result.debtOrder.map((name, idx) => (
                <li
                  key={name}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#181818] border border-[#262626] text-xs"
                >
                  <span className="flex items-center gap-2.5 font-medium text-[#E5DFD3]">
                    <span className="w-5 h-5 rounded-full bg-[#262626] text-[#E5DFD3] flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    {name}
                  </span>
                  <span className="text-[#D9541E] font-bold">Priority #{idx + 1}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-2 text-xs text-[#888888] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D9541E] flex-shrink-0" />
            <span>Calculation reflects constant extra payments applied monthly until zero balance.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

