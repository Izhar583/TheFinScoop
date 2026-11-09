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
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20">
            About TheFinScoop
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            We make money <span className="italic font-serif font-normal text-[#D9541E]">make sense</span> for everyday people.
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            TheFinScoop is an independent financial education and tools platform. We believe financial literacy shouldn&apos;t be locked behind jargon, paywalls, or conflicted sales pitches.
          </p>
        </div>

        {/* Mission & Core Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:shadow-xl hover:border-[#D9541E]/50 hover:-translate-y-1 transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Our Mission</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Equip people with free, practical financial tools and clear, honest guides so they can build savings, eliminate debt, and invest wisely.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:shadow-xl hover:border-[#D9541E]/50 hover:-translate-y-1 transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Editorial Independence</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Our reviews and calculator algorithms are 100% unbiased. Financial institutions cannot buy favorable reviews or alter our scoring criteria.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:shadow-xl hover:border-[#D9541E]/50 hover:-translate-y-1 transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Free Math First</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Every calculator we build is fast, transparent, and completely free to use without requiring account sign-ups or personal financial linking.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart (Luxury Dark Slab) */}
        <section className="bg-[#111111] text-[#E5DFD3] rounded-3xl p-8 sm:p-12 border border-[#262626] mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D9541E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
              Why Readers Trust Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Numbers you can verify. Advice you can apply.
            </h2>
            <div className="space-y-3 text-sm text-[#CCCCCC] leading-relaxed pt-2">
              <div className="flex items-start gap-2.5">
                <span className="text-[#D9541E] font-bold">✓</span>
                <span><strong className="text-white">No Sponsored Algorithmic Bias:</strong> When you use our Compound Interest, Mortgage, or Loan calculators, you receive pure mathematical formulas with zero hidden marketing skew.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#D9541E] font-bold">✓</span>
                <span><strong className="text-white">Rigorous Fact-Checking:</strong> Every article and fintech review is researched and verified by experienced personal finance writers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#D9541E] font-bold">✓</span>
                <span><strong className="text-white">Clear Disclosures:</strong> We maintain strict separation between editorial content and advertising partnerships.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Authors Highlight */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                Our Writers
              </span>
              <h2 className="text-2xl font-extrabold text-[#111111] mt-1 tracking-tight">
                Meet the Editorial Team
              </h2>
            </div>
            <Link
              href="/about/authors"
              className="text-xs font-bold text-[#D9541E] hover:text-[#BF4413] flex items-center gap-1 transition-colors"
            >
              <span>View full directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {AUTHORS.map((author) => (
              <div
                key={author.slug}
                className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:shadow-lg hover:border-[#D9541E]/40 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center font-bold text-[#111111] text-sm group-hover:bg-[#D9541E] group-hover:text-white transition-colors">
                  {author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] text-base group-hover:text-[#D9541E] transition-colors">{author.name}</h4>
                  <p className="text-xs text-[#D9541E] font-bold mt-0.5">{author.role}</p>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4A4A] line-clamp-3 leading-relaxed">
                  {author.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] text-[#E5DFD3] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">Have a question or feedback?</h3>
            <p className="text-xs sm:text-sm text-[#888888]">Our editorial team would love to hear from you.</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}

