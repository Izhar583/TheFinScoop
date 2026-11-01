import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Sparkles, 
  Award, 
  ArrowRight,
  BookOpen,
  Calculator,
  Lock
} from "lucide-react";
import { AUTHORS } from "@/data/mockData";

export const metadata: Metadata = {
  title: "About Us — TheFinScoop | Making Money Make Sense",
  description:
    "Learn about TheFinScoop mission, our editorial independence, and how we help everyday people make confident financial decisions.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-10 pb-20">
      <div className="container-main max-w-5xl">
        <Breadcrumb items={[{ label: "TheFinScoop" }, { label: "About" }]} />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D3A6E]">
            About TheFinScoop
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            We make money make sense for everyday people.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            TheFinScoop is an independent financial education and tools platform. We believe financial literacy shouldn&apos;t be locked behind jargon, paywalls, or conflicted sales pitches.
          </p>
        </div>

        {/* Mission & Core Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D3A6E]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-950">Our Mission</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Equip people with free, practical financial tools and clear, honest guides so they can build savings, eliminate debt, and invest wisely.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-950">Editorial Independence</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our reviews and calculator algorithms are 100% unbiased. Financial institutions cannot buy favorable reviews or alter our scoring criteria.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-950">Free Math First</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every calculator we build is fast, transparent, and completely free to use without requiring account sign-ups or personal financial linking.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <section className="bg-gradient-to-r from-blue-50/80 to-indigo-50/60 rounded-2xl p-8 sm:p-12 border border-blue-100 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D3A6E]">
              Why Readers Trust Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
              Numbers you can verify. Advice you can apply.
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>No Sponsored Algorithmic Bias:</strong> When you use our Compound Interest, Mortgage, or Loan calculators, you receive pure mathematical formulas with no hidden skew.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Rigorous Fact-Checking:</strong> Every article and fintech review is researched and verified by experienced personal finance writers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Clear Disclosures:</strong> We maintain strict separation between editorial content and advertising partnerships.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Authors Highlight */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Our Writers
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                Meet the Editorial Team
              </h2>
            </div>
            <Link
              href="/about/authors"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View full directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {AUTHORS.map((author) => (
              <div
                key={author.slug}
                className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-800 text-sm">
                  {author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 text-sm">{author.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{author.role}</p>
                </div>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {author.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-[#0b1728] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Have a question or feedback?</h3>
            <p className="text-xs text-gray-400">Our editorial team would love to hear from you.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#22C55E] hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition-all whitespace-nowrap"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
