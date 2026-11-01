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
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D3A6E]">
            Partnerships &amp; Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Partner With TheFinScoop
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Reach hundreds of thousands of motivated consumers and decision-makers actively researching bank accounts, investments, loans, and financial software.
          </p>
        </div>

        {/* Audience Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#1D3A6E]">250K+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Monthly Visitors</p>
            <p className="text-[11px] text-gray-400">High financial intent</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600">42%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Newsletter Open Rate</p>
            <p className="text-[11px] text-gray-400">2.5x industry standard</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-blue-600">85%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Ages 22–45</p>
            <p className="text-[11px] text-gray-400">Prime earning demographic</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-purple-600">6+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Free Calculators</p>
            <p className="text-[11px] text-gray-400">Sticky daily engagement</p>
          </div>
        </div>

        {/* Partnership Formats */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Partnership Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
                High Impact
              </span>
              <h3 className="text-base font-bold text-gray-950">Newsletter Sponsorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Exclusive headline placement in our Thursday edition sent directly to thousands of verified personal finance subscribers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full">
                Educational
              </span>
              <h3 className="text-base font-bold text-gray-950">Sponsored Deep-Dives</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Collaborative, transparent educational guides explaining your product features, fee models, or platform security.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200/80 bg-white shadow-xs space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full">
                Interactive
              </span>
              <h3 className="text-base font-bold text-gray-950">Calculator Integration</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Feature relevant banking rates, loan offers, or APY benchmarks alongside our high-traffic interactive financial calculators.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-10 shadow-xs max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Partnership Inquiry Received</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in partnering with TheFinScoop. Our partnerships director will review your inquiry and follow up within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-gray-950">Request Our Media Kit</h2>
                <p className="text-xs text-gray-500 mt-1">
                  Tell us a bit about your brand and our team will send over our rate card and audience breakdown.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Company / Brand Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Fintech"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Contact Person <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@brand.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Partnership Format
                  </label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] bg-white"
                  >
                    <option value="newsletter">Newsletter Sponsorship</option>
                    <option value="calculator">Calculator Co-Branding</option>
                    <option value="content">Sponsored Educational Guide</option>
                    <option value="custom">Custom Multi-Channel Campaign</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Campaign Goals / Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your campaign goals, target audience, and timeframe..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#1D3A6E] hover:bg-[#152a50] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
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

