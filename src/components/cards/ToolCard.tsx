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
    <div className="group bg-white rounded-3xl border border-slate-200/90 p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors">
          {tool.name}
        </h3>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          {tool.description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100">
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center justify-between w-full text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
        >
          <span>Launch calculator</span>
          <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-200">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}

