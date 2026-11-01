import type { Metadata } from "next";
import { TOOLS } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ToolCard from "@/components/cards/ToolCard";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import LoanPaymentCalc from "@/components/calculators/LoanPaymentCalc";
import MortgageCalc from "@/components/calculators/MortgageCalc";
import SavingsGoalCalc from "@/components/calculators/SavingsGoalCalc";
import BudgetPlannerCalc from "@/components/calculators/BudgetPlannerCalc";

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
      case "debt-payoff-calculator":
        return <LoanPaymentCalc />;
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
    <div className="py-12 bg-gray-50/50 min-h-screen">
      <div className="container-main max-w-5xl">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all calculators</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Free Finance Calculator
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            {tool.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Live Interactive Calculator */}
        <div className="mb-16">
          {renderCalculator()}
        </div>

        {/* Explore More Tools */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Related calculators you might like
            </h2>
            <Link href="/tools" className="text-xs font-bold text-blue-600 hover:underline">
              View all tools →
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
