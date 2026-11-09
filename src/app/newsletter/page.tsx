"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  TrendingUp,
  Inbox,
  ArrowRight
} from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [topics, setTopics] = useState<string[]>(["finance", "calculators", "fintech"]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTopic = (id: string) => {
    setTopics(topics.includes(id) ? topics.filter((t) => t !== id) : [...topics, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const sampleEditions = [
    {
      issue: "#48",
      date: "Jan 28, 2026",
      title: "Where to Park Cash in 2026: HYSA vs. CDs vs. Treasury Bills",
      desc: "An in-depth breakdown of current yield curves and how to lock in 4.5%+ without market volatility.",
    },
    {
      issue: "#47",
      date: "Jan 21, 2026",
      title: "The 3 Budgeting Traps Middle-Income Families Fall Into",
      desc: "Why traditional 50/30/20 budgets fail in high-cost cities and the zero-based alternative that works.",
    },
    {
      issue: "#46",
      date: "Jan 14, 2026",
      title: "Digital Banking Safety: Are Fintech Wallets Really Protected?",
      desc: "How partner-bank sweep networks work and why FDIC insurance pass-through matters for your deposits.",
    },
  ];

  return (
    <div className="py-10 pb-20 space-y-16">
      <div className="container-main max-w-5xl">
        <Breadcrumb items={[{ label: "TheFinScoop" }, { label: "Newsletter" }]} />

        {/* Hero Section */}
        <div className="bg-[#111111] text-[#E5DFD3] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-[#262626] mb-12">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D9541E]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-5 relative z-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#D9541E] bg-[#D9541E]/15 border border-[#D9541E]/30 px-3.5 py-1.5 rounded-full">
              Free Weekly Digest
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              A clearer view of money, <span className="italic font-serif font-normal text-[#D9541E]">once a week.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
              Join thousands of smart readers who get our free Thursday newsletter. Zero fluff, zero sponsored bias — just practical money strategies, new calculators, and fintech explainers.
            </p>

            {/* Form */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-[#F3EEE3] space-y-2 mt-6">
                <div className="flex items-center gap-2 font-bold text-base text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#D9541E]" />
                  <span>Welcome to TheFinScoop Community!</span>
                </div>
                <p className="text-xs text-[#888888]">
                  We&apos;ve sent a confirmation email to <strong>{email}</strong>. Look out for our next edition this Thursday morning.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-sm focus:outline-none focus:bg-white/15 focus:border-[#D9541E] transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-sm rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </div>

                {/* Topics of Interest */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs text-[#888888]">Topics you want:</span>
                  {[
                    { id: "finance", label: "Personal Finance" },
                    { id: "calculators", label: "Calculator Updates" },
                    { id: "fintech", label: "Fintech & Banking" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTopic(t.id)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all ${
                        topics.includes(t.id)
                          ? "bg-[#D9541E]/20 text-[#D9541E] border-[#D9541E]/40 font-bold"
                          : "bg-white/5 text-[#888888] border-white/10 hover:text-white"
                      }`}
                    >
                      {topics.includes(t.id) ? "✓ " : "+ "}{t.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#888888] pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9541E]" />
                    <span>No spam ever</span>
                  </span>
                  <span>·</span>
                  <span>One-click unsubscribe anytime</span>
                  <span>·</span>
                  <span>Always 100% free</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors text-lg">Thursday Delivery</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Delivered every Thursday at 8:00 AM EST. Designed to be read in under 4 minutes with your morning coffee.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors text-lg">Practical Tools Spotlight</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              First look at newly released financial planners, mortgage estimators, and investment calculators.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors text-lg">Actionable Insights</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              No economic theory or market hype. Just clear steps to save money, negotiate lower rates, and optimize returns.
            </p>
          </div>
        </div>

        {/* Past Editions Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                Archive
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight mt-0.5">
                Recent Newsletter Editions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {sampleEditions.map((ed, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-lg transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D9541E]">
                    <span className="bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-0.5 rounded-full">{ed.issue}</span>
                    <span>·</span>
                    <span className="text-[#737373]">{ed.date}</span>
                  </div>
                  <h3 className="font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors text-lg tracking-tight">{ed.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] max-w-2xl leading-relaxed">{ed.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D9541E] group-hover:translate-x-1 transition-transform">
                    <span>Read issue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

