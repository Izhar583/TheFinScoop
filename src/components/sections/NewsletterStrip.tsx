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
    <div className={`bg-gradient-to-r from-slate-900 to-[#102444] text-white rounded-2xl p-8 sm:p-12 ${className}`}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Newsletter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
            {subtitle}
          </p>
        </div>

        <div>
          {subscribed ? (
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              <span>Thank you! You&apos;re now subscribed to TheFinScoop newsletter.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:bg-white/20 focus:border-emerald-400 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#22C55E] hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-gray-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No spam. Unsubscribe anytime. Your privacy is protected.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

