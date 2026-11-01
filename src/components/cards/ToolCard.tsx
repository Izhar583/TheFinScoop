import Link from "next/link";
import { ArrowRight, TrendingUp, Building2, Target, Wallet, CreditCard, Home } from "lucide-react";
import type { Tool } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Building2,
  Target,
  Wallet,
  CreditCard,
  Home,
};

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const IconComponent = iconMap[tool.icon] || TrendingUp;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:shadow-md hover:border-blue-100 transition-all flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {tool.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50">
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          <span>Use tool</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

