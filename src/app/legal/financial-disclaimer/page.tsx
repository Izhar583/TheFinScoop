import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Disclaimer — TheFinScoop",
  description: "Important information regarding our content and financial calculators.",
};

export default function FinancialDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#F3EEE3] py-16 selection:bg-[#D9541E] selection:text-white">
      <div className="container-main max-w-4xl space-y-8">
        <nav className="text-xs text-[#737373] mb-6 flex items-center gap-2">
          <span>Home</span> &rsaquo; <span>Legal</span> &rsaquo; <span className="text-[#111111] font-semibold">Financial Disclaimer</span>
        </nav>

        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3 py-1 rounded-full">
            Disclosure &amp; Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mt-3 mb-2">
            Financial <span className="italic font-serif font-normal text-[#D9541E]">Disclaimer.</span>
          </h1>
          <p className="text-sm text-[#737373]">
            Important disclosures about our educational content, financial tools, and research models.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-xs sm:text-sm text-[#4A4A4A] leading-relaxed shadow-sm">
          <strong className="text-[#111111]">Important Notice:</strong> TheFinScoop is a financial education and tools publication. We do not provide personalized financial, investment, legal, or tax advice. Always consult with a qualified, licensed financial advisor before making significant financial commitments.
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DFD3] shadow-sm space-y-8 text-[#4A4A4A] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111]">1. Educational Purposes Only</h2>
            <p>
              All information, articles, reviews, and calculators provided on TheFinScoop are intended strictly for educational and informational purposes. While we strive to ensure our calculators and models are accurate, figures are estimates based on user inputs and assumed interest rates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111]">2. No Fiduciary Relationship</h2>
            <p>
              Using this website or any of our tools does not establish a financial advisor, client, or fiduciary relationship between you and TheFinScoop.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111]">3. Market &amp; Economic Risks</h2>
            <p>
              Past investment performance is not indicative of future returns. High yield savings rates, mortgage rates, and investment returns fluctuate based on macroeconomic conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

