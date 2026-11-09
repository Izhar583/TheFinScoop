"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  Clock, 
  HelpCircle,
  Building2,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-10 pb-20 space-y-16">
      <div className="container-main max-w-5xl">
        <Breadcrumb items={[{ label: "TheFinScoop" }, { label: "Contact" }]} />

        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            We&apos;d love to hear <span className="italic font-serif font-normal text-[#D9541E]">from you.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Have a question about our calculators, a pitch for our editorial team, or feedback on a fintech review? Reach out below and we will respond within 24-48 business hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D9541E]/10 text-[#D9541E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">Message Delivered!</h3>
                <p className="text-sm text-[#4A4A4A] max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting TheFinScoop. Our team has received your message and will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "general", message: "" });
                  }}
                  className="mt-2 text-xs font-bold text-[#D9541E] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-extrabold text-[#111111] tracking-tight">Send Us a Direct Message</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Your Full Name <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Topic / Department <span className="text-[#D9541E]">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all outline-none"
                  >
                    <option value="general">General Inquiry / Feedback</option>
                    <option value="calculator">Calculator Question / Formula Suggestion</option>
                    <option value="editorial">Editorial Pitch / Correction</option>
                    <option value="partnerships">Advertising &amp; Sponsorships</option>
                    <option value="press">Press &amp; Media Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Your Message <span className="text-[#D9541E]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help? Please provide as much detail as possible..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD3] text-sm text-[#111111] focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/20 bg-[#FAF7F2] focus:bg-white transition-all resize-y outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Info & Channels (5 cols - Luxury Dark Card) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#111111] text-[#E5DFD3] border border-[#262626] shadow-xl space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
                Direct Channels
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">General Questions</p>
                    <p className="text-xs text-[#888888] mt-0.5">contact@thefinscoop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E] flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Editorial &amp; Pitches</p>
                    <p className="text-xs text-[#888888] mt-0.5">editor@thefinscoop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9541E] flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Partnership &amp; Sponsors</p>
                    <p className="text-xs text-[#888888] mt-0.5">advertise@thefinscoop.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#262626] text-xs text-[#888888] space-y-2.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D9541E]" />
                  <span>Response time: Mon–Fri, within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Your email is confidential and never shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

