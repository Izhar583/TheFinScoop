"use client";

import { useState } from "react";
import { calculateBudget } from "@/lib/calculators";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { Wallet, Plus, Trash2, PieChart, ShieldCheck } from "lucide-react";

export default function BudgetPlannerCalc() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [expenses, setExpenses] = useState([
    { name: "Housing (Rent / Mortgage)", amount: 1600 },
    { name: "Groceries & Food", amount: 650 },
    { name: "Utilities & Mobile", amount: 350 },
    { name: "Transportation & Gas", amount: 450 },
    { name: "Healthcare & Insurance", amount: 300 },
    { name: "Entertainment & Dining", amount: 400 },
  ]);

  const [newExpName, setNewExpName] = useState("");
  const [newExpAmount, setNewExpAmount] = useState("");

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpName.trim() && Number(newExpAmount) > 0) {
      setExpenses([...expenses, { name: newExpName.trim(), amount: Number(newExpAmount) }]);
      setNewExpName("");
      setNewExpAmount("");
    }
  };

  const handleRemoveExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleUpdateAmount = (index: number, val: number) => {
    const updated = [...expenses];
    updated[index].amount = val;
    setExpenses(updated);
  };

  const result = calculateBudget({
    monthlyIncome,
    expenses,
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
        {/* Expenses List & Income (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Total Monthly Net Income (Take-Home Pay)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                $
              </span>
              <input
                type="number"
                min="0"
                step="100"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value) || 0)}
                className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-slate-200 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
            </div>
          </div>

          {/* Expense Categories */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-900">
                Monthly Expenses ({expenses.length} Categories)
              </span>
              <span className="text-xs font-bold text-slate-500">
                Total Expenses: {formatCurrency(result.totalExpenses)}
              </span>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {expenses.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-sm"
                >
                  <span className="flex-1 font-bold text-slate-800 truncate">
                    {exp.name}
                  </span>
                  <div className="relative w-32">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={exp.amount}
                      onChange={(e) => handleUpdateAmount(index, Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 font-bold text-right text-slate-900 focus:outline-none focus:border-slate-900 text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveExpense(index)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    aria-label="Delete expense"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add Expense Form */}
          <form onSubmit={handleAddExpense} className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="text"
              placeholder="Expense Name (e.g. Subscriptions)"
              value={newExpName}
              onChange={(e) => setNewExpName(e.target.value)}
              className="flex-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-slate-900"
            />
            <input
              type="number"
              placeholder="Amount ($)"
              value={newExpAmount}
              onChange={(e) => setNewExpAmount(e.target.value)}
              className="w-full sm:w-28 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-slate-900"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-950 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </form>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Monthly Free Cash Flow (Surplus)
            </span>
            <div className="mt-3">
              <p className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                result.surplus >= 0 ? "text-emerald-400" : "text-rose-400"
              }`}>
                {formatCurrency(result.surplus)}
                <span className="text-base font-normal text-slate-400"> /mo</span>
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Savings rate: <strong className="text-white">{result.savingsRate}%</strong> of monthly income
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Monthly Take-Home Income:</span>
                <span className="font-bold text-white text-base">
                  {formatCurrency(monthlyIncome)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Total Monthly Expenses:</span>
                <span className="font-bold text-slate-200 text-base">
                  {formatCurrency(result.totalExpenses)}
                </span>
              </div>
            </div>

            {/* 50/30/20 Rule check */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <PieChart className="w-4 h-4 text-blue-400" />
                50/30/20 Rule Comparison:
              </p>
              <p>
                Recommended 20% savings target: <strong>{formatCurrency(monthlyIncome * 0.20)}/mo</strong>.
              </p>
              <p className={result.surplus >= monthlyIncome * 0.20 ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {result.surplus >= monthlyIncome * 0.20
                  ? "✓ You are hitting the recommended 20% savings milestone!"
                  : `Aim to trim discretionary expenses by ${formatCurrency(monthlyIncome * 0.20 - result.surplus)} to reach 20% savings.`}
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-500">
            *Budgets are personal. Tailor these numbers to your individual emergency fund and debt payoff goals.
          </div>
        </div>
      </div>
    </div>
  );
}
