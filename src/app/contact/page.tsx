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
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D3A6E]">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Have a question about our calculators, a pitch for our editorial team, or feedback on a fintech review? Reach out below and we will respond within 24-48 business hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Delivered!</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting TheFinScoop. Our team has received your message and will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "general", message: "" });
                  }}
                  className="mt-2 text-xs font-bold text-blue-600 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-lg font-bold text-gray-950">Send Us a Direct Message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Topic / Department <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] transition-all bg-white"
                  >
                    <option value="general">General Inquiry / Feedback</option>
                    <option value="calculator">Calculator Question / Formula Suggestion</option>
                    <option value="editorial">Editorial Pitch / Correction</option>
                    <option value="partnerships">Advertising &amp; Sponsorships</option>
                    <option value="press">Press &amp; Media Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help? Please provide as much detail as possible..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-[#1D3A6E] focus:ring-1 focus:ring-[#1D3A6E] transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#1D3A6E] hover:bg-[#152a50] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#1D3A6E] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">General Questions</p>
                    <p className="text-gray-500">contact@thefinscoop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Editorial &amp; Pitches</p>
                    <p className="text-gray-500">editor@thefinscoop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Partnership &amp; Sponsors</p>
                    <p className="text-gray-500">advertise@thefinscoop.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Response time: Mon–Fri, within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
