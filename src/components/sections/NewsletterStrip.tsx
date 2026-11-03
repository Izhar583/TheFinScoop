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
    <div className={`bg-slate-950 text-white rounded-3xl p-10 sm:p-14 shadow-xl border border-slate-800 ${className}`}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-300">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Weekly Newsletter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-md">
            {subtitle}
          </p>
        </div>

        <div>
          {subscribed ? (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 flex items-center gap-3 text-base">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-emerald-400" />
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
                  className="flex-1 px-5 py-4 rounded-full bg-slate-900 border border-slate-800 text-white placeholder-slate-400 text-base focus:outline-none focus:border-white transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold text-base rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero spam. Unsubscribe anytime. Your privacy is respected.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

