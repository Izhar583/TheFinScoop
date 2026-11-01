import React from "react";
import { Check, X, ExternalLink } from "lucide-react";

export interface ComparisonItem {
  name: string;
  monthlyFee: string;
  keyFeatures: string;
  bestFor: string;
  recommended?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  items?: ComparisonItem[];
}

export const DEFAULT_BANK_COMPARISON: ComparisonItem[] = [
  {
    name: "Chime",
    monthlyFee: "$0",
    keyFeatures: "No monthly fees, early pay, fee-free overdraft",
    bestFor: "Everyday banking & simple saving",
    recommended: true,
  },
  {
    name: "Revolut",
    monthlyFee: "$0 – $16.99",
    keyFeatures: "Multi-currency, budgeting, crypto & stock investing",
    bestFor: "Global travelers & multi-currency needs",
  },
  {
    name: "Wise",
    monthlyFee: "$0 – $9",
    keyFeatures: "Real mid-market exchange rate, international bank accounts",
    bestFor: "International money transfers",
    recommended: true,
  },
  {
    name: "SoFi",
    monthlyFee: "$0",
    keyFeatures: "High APY savings, all-in-one loan & investment hub",
    bestFor: "Building long-term wealth & high interest",
  },
];

export default function ComparisonTable({
  title = "Top Digital Banks in 2026",
  items = DEFAULT_BANK_COMPARISON,
}: ComparisonTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs my-8">
      {title && (
        <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900 tracking-tight">{title}</h3>
          <span className="text-[11px] font-semibold text-blue-600">Updated for 2026</span>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-gray-600 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-4 sm:px-6">Bank / Platform</th>
              <th className="py-3.5 px-4 sm:px-6">Monthly Fee</th>
              <th className="py-3.5 px-4 sm:px-6">Key Features</th>
              <th className="py-3.5 px-4 sm:px-6">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, idx) => (
              <tr 
                key={idx} 
                className={`hover:bg-blue-50/30 transition-colors ${
                  item.recommended ? "bg-emerald-50/20" : ""
                }`}
              >
                <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 flex items-center gap-2">
                  <span>{item.name}</span>
                  {item.recommended && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      Top Pick
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 sm:px-6 font-semibold text-gray-800">
                  {item.monthlyFee}
                </td>
                <td className="py-4 px-4 sm:px-6 text-gray-600 leading-relaxed">
                  {item.keyFeatures}
                </td>
                <td className="py-4 px-4 sm:px-6 font-medium text-gray-700">
                  {item.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

