"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck } from "lucide-react";

interface NewsletterStripProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function NewsletterStrip({
  title = "A clearer view of money, once a week.",
  subtitle = "Get practical financial knowledge, useful tools, and clear fintech guides — straight to your inbox.",
  className = "",
}: NewsletterStripProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className={`bg-[#111111] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-[#262626] ${className}`}>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#333333] text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            <Mail className="w-3.5 h-3.5" />
            <span>Weekly Newsletter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3EEE3] leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed max-w-md">
            {subtitle}
          </p>
        </div>

        <div>
          {subscribed ? (
            <div className="p-6 rounded-2xl bg-[#181818] border border-[#D9541E]/40 text-[#F3EEE3] flex items-center gap-3 text-base">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#D9541E]" />
              <span>Thank you! You&apos;re now subscribed to TheFinScoop newsletter.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-full bg-[#181818] border border-[#333333] text-white placeholder-[#737373] text-base focus:outline-none focus:border-[#D9541E] transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-base rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#999999] flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#D9541E]" />
                <span>Zero spam. Unsubscribe anytime. Your privacy is respected.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
