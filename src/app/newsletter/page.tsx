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
        <div className="bg-gradient-to-b from-[#13284c] to-[#0e1e38] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl mb-12">
          <div className="max-w-2xl space-y-5">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
              Free Weekly Digest
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              A clearer view of money, once a week.
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Join thousands of smart readers who get our free Thursday newsletter. Zero fluff, zero sponsored bias — just practical money strategies, new calculators, and fintech explainers.
            </p>

            {/* Form */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-700 text-emerald-200 space-y-2 mt-6">
                <div className="flex items-center gap-2 font-bold text-base text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Welcome to TheFinScoop Community!</span>
                </div>
                <p className="text-xs text-gray-300">
                  We&apos;ve sent a confirmation email to <strong>{email}</strong>. Look out for our next edition this Thursday morning.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:bg-white/20 focus:border-emerald-400 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#22C55E] hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </div>

                {/* Topics of Interest */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs text-gray-400">Topics you want:</span>
                  {[
                    { id: "finance", label: "Personal Finance" },
                    { id: "calculators", label: "Calculator Updates" },
                    { id: "fintech", label: "Fintech & Banking" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTopic(t.id)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                        topics.includes(t.id)
                          ? "bg-white/20 text-white font-semibold"
                          : "bg-white/5 text-gray-400 hover:text-white"
                      }`}
                    >
                      {topics.includes(t.id) ? "✓ " : "+ "}{t.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1D3A6E] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Thursday Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Delivered every Thursday at 8:00 AM EST. Designed to be read in under 4 minutes with your morning coffee.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Practical Tools Spotlight</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              First look at newly released financial planners, mortgage estimators, and tax calculators.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Actionable Insights</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              No economic theory or market hype. Just clear steps to save money, negotiate lower rates, and optimize returns.
            </p>
          </div>
        </div>

        {/* Past Editions Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Archive
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-0.5">
                Recent Newsletter Editions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {sampleEditions.map((ed, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-white shadow-2xs hover:border-blue-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-blue-600">
                    <span className="bg-blue-50 px-2 py-0.5 rounded">{ed.issue}</span>
                    <span>·</span>
                    <span className="text-gray-400">{ed.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{ed.title}</h3>
                  <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">{ed.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1D3A6E] hover:text-blue-700">
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

