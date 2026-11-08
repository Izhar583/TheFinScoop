import type { Metadata } from "next";
import { TOOLS } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import ToolCard from "@/components/cards/ToolCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import LoanPaymentCalc from "@/components/calculators/LoanPaymentCalc";
import MortgageCalc from "@/components/calculators/MortgageCalc";
import SavingsGoalCalc from "@/components/calculators/SavingsGoalCalc";
import BudgetPlannerCalc from "@/components/calculators/BudgetPlannerCalc";
import DebtPayoffCalc from "@/components/calculators/DebtPayoffCalc";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Financial Tool | TheFinScoop`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) notFound();

  // Dynamic calculator selector
  const renderCalculator = () => {
    switch (slug) {
      case "compound-interest-calculator":
        return <CompoundInterestCalc />;
      case "loan-payment-calculator":
        return <LoanPaymentCalc />;
      case "debt-payoff-calculator":
        return <DebtPayoffCalc />;
      case "mortgage-calculator":
        return <MortgageCalc />;
      case "savings-goal-calculator":
        return <SavingsGoalCalc />;
      case "budget-planner":
        return <BudgetPlannerCalc />;
      default:
        return <CompoundInterestCalc />;
    }
  };

  const otherTools = TOOLS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <div className="py-12 lg:py-20 bg-[#F3EEE3] min-h-screen">
      <div className="container-main max-w-5xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] text-[#111111] hover:text-[#D9541E] border border-[#E5DFD3] text-xs font-bold transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Calculators &amp; Tools</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D9541E]" />
            100% Free · Financial Precision Tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            {tool.name}
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Live Interactive Calculator */}
        <div className="mb-20">
          {renderCalculator()}
        </div>

        {/* Explore More Tools */}
        <div className="pt-12 border-t border-[#E5DFD3]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">
                Related Tools
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-1 tracking-tight">
                Other calculators you might need
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-sm font-bold text-[#111111] hover:text-[#D9541E] transition-colors"
            >
              View directory →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
