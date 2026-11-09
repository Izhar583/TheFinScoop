"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Building2, 
  BarChart3, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Target 
} from "lucide-react";

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    budget: "$2,500 - $5,000",
    partnershipType: "newsletter",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-10 pb-20 space-y-16">
      <div className="container-main max-w-5xl">
        <Breadcrumb
          items={[{ label: "TheFinScoop", href: "/about" }, { label: "Advertise / Partner" }]}
        />

        {/* Hero */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20">
            Partnerships &amp; Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Partner With <span className="italic font-serif font-normal text-[#D9541E]">TheFinScoop</span>
          </h1>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Reach hundreds of thousands of motivated consumers and decision-makers actively researching bank accounts, investments, loans, and financial software.
          </p>
        </div>

        {/* Audience Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-1 group">
            <p className="text-3xl sm:text-4xl font-black text-[#111111] group-hover:text-[#D9541E] transition-colors">250K+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">Monthly Visitors</p>
            <p className="text-[11px] text-[#888888]">High financial intent</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-1 group">
            <p className="text-3xl sm:text-4xl font-black text-[#D9541E]">42%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">Newsletter Open Rate</p>
            <p className="text-[11px] text-[#888888]">2.5x industry standard</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-1 group">
            <p className="text-3xl sm:text-4xl font-black text-[#111111] group-hover:text-[#D9541E] transition-colors">85%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">Ages 22–45</p>
            <p className="text-[11px] text-[#888888]">Prime earning demographic</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-1 group">
            <p className="text-3xl sm:text-4xl font-black text-[#D9541E]">6+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">Free Calculators</p>
            <p className="text-[11px] text-[#888888]">Sticky daily engagement</p>
          </div>
        </div>

        {/* Partnership Formats */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-extrabold text-[#111111] tracking-tight">
            Partnership Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20 px-3 py-1 rounded-full">
                High Impact
              </span>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Newsletter Sponsorship</h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Exclusive headline placement in our edition sent directly to thousands of verified personal finance subscribers.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#111111]/5 text-[#111111] border border-[#E5DFD3] px-3 py-1 rounded-full">
                Educational
              </span>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Sponsored Deep-Dives</h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Collaborative, transparent educational guides explaining your product features, fee models, or platform security.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20 px-3 py-1 rounded-full">
                Interactive
              </span>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">Calculator Integration</h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Feature relevant banking rates, loan offers, or APY benchmarks alongside our high-traffic interactive financial calculators.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-md max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#D9541E]/10 text-[#D9541E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">Partnership Inquiry Received</h3>
              <p className="text-sm text-[#4A4A4A] max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in partnering with TheFinScoop. Our partnerships team will review your inquiry and follow up within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#111111] tracking-tight">Request Our Media Kit</h2>
                <p className="text-sm text-[#737373] mt-1">
                  Tell us a bit about your brand and our team will send over our rate card and audience breakdown.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Company / Brand Name <span className="text-[#D9541E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Fintech"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Contact Person <span className="text-[#D9541E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Business Email <span className="text-[#D9541E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@brand.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Partnership Format
                  </label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                  >
                    <option value="newsletter">Newsletter Sponsorship</option>
                    <option value="calculator">Calculator Co-Branding</option>
                    <option value="content">Sponsored Educational Guide</option>
                    <option value="custom">Custom Multi-Channel Campaign</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                  Campaign Goals / Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your campaign goals, target audience, and timeframe..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all resize-y outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Sending..." : "Submit Partnership Inquiry"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

