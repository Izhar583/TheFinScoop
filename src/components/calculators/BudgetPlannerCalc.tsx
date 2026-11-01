"use client";

import { useState } from "react";
import { calculateBudget } from "@/lib/calculators";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { Wallet, Plus, Trash2, PieChart } from "lucide-react";

export default function BudgetPlannerCalc() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [expenses, setExpenses] = useState([
    { name: "Housing (Rent / Mortgage)", amount: 1500 },
    { name: "Groceries & Food", amount: 600 },
    { name: "Utilities & Bills", amount: 350 },
    { name: "Transportation & Car", amount: 450 },
    { name: "Healthcare & Insurance", amount: 300 },
    { name: "Discretionary & Entertainment", amount: 400 },
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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden">
      <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start">
        {/* Expenses List & Income (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          {/* Monthly Income */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Total Monthly Net Income (Take-Home)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                $
              </span>
              <input
                type="number"
                min="0"
                step="100"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all font-semibold"
              />
            </div>
          </div>

          {/* Expense Categories */}
          <div>
            <span className="block text-xs font-semibold text-gray-700 mb-2">
              Monthly Expenses ({expenses.length} categories)
            </span>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {expenses.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2.5 bg-gray-50/80 rounded-lg border border-gray-100 text-xs"
                >
                  <span className="flex-1 font-medium text-gray-800 truncate">
                    {exp.name}
                  </span>
                  <div className="relative w-28">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={exp.amount}
                      onChange={(e) => handleUpdateAmount(index, Number(e.target.value) || 0)}
                      className="w-full pl-6 pr-2 py-1 rounded bg-white border border-gray-200 font-medium text-right text-gray-900"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveExpense(index)}
                    className="p-1 text-gray-400 hover:text-rose-500 rounded transition-colors"
                    title="Remove category"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Custom Expense */}
            <form onSubmit={handleAddExpense} className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
              <input
                type="text"
                placeholder="New expense name..."
                value={newExpName}
                onChange={(e) => setNewExpName(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs"
              />
              <input
                type="number"
                placeholder="Amount ($)"
                value={newExpAmount}
                onChange={(e) => setNewExpAmount(e.target.value)}
                className="w-24 px-3 py-1.5 rounded-lg border border-gray-200 text-xs"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-gray-800 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </form>
          </div>
        </div>

        {/* Results / Budget Health */}
        <div className="md:col-span-5 bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-xl p-6 border border-orange-100/60 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Monthly Cash Surplus / Deficit
            </span>
            <div className="mt-1">
              <p
                className={`text-3xl lg:text-4xl font-black ${
                  result.surplus >= 0 ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {formatCurrency(result.surplus)}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Savings rate: <strong>{formatPercentage(result.savingsRate)}</strong> of income
              </p>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-200/60 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Total Monthly Income:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(monthlyIncome)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Total Monthly Expenses:</span>
                <span className="font-semibold text-rose-600">
                  {formatCurrency(result.totalExpenses)}
                </span>
              </div>
            </div>

            {/* Expense Breakdown Progress */}
            <div className="mt-5 space-y-1.5">
              <div className="flex justify-between text-[11px] font-medium text-gray-500">
                <span>Spending percentage</span>
                <span>{monthlyIncome > 0 ? Math.round((result.totalExpenses / monthlyIncome) * 100) : 0}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    result.surplus >= 0 ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{
                    width: `${Math.min(100, monthlyIncome > 0 ? (result.totalExpenses / monthlyIncome) * 100 : 0)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 text-[11px] text-gray-400">
            {result.surplus >= 0
              ? "Great job! Consider directing your monthly surplus to your emergency fund or investments."
              : "Warning: Your expenses exceed income. Review categories to eliminate unnecessary costs."}
          </div>
        </div>
      </div>
    </div>
  );
}

