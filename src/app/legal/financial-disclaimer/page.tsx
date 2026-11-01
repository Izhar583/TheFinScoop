import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Disclaimer — TheFinScoop",
  description: "Important information regarding our content and financial calculators.",
};

export default function FinancialDisclaimerPage() {
  return (
    <div className="container-main py-12 max-w-4xl space-y-8">
      <nav className="text-xs text-gray-500 mb-6">
        <span>Home</span> &rsaquo; <span>Legal</span> &rsaquo; <span className="text-gray-900 font-semibold">Financial Disclaimer</span>
      </nav>

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">Disclosure</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mt-3 mb-2">Financial Disclaimer</h1>
        <p className="text-sm text-gray-600">Important information about our educational content and calculators.</p>
      </div>

      <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
        <strong>Important Notice:</strong> TheFinScoop is a financial education and tools website. We do not provide personalized financial, investment, legal, or tax advice. Always consult with a qualified, licensed financial advisor before making significant financial commitments.
      </div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <h2 className="text-xl font-bold text-gray-900">1. Educational Purposes Only</h2>
        <p>
          All information, articles, reviews, and calculators provided on TheFinScoop are intended strictly for educational and informational purposes. While we strive to ensure our calculators and models are accurate, figures are estimates based on user inputs and assumed interest rates.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. No Fiduciary Relationship</h2>
        <p>
          Using this website or any of our tools does not establish a financial advisor, client, or fiduciary relationship between you and TheFinScoop.
        </p>

        <h2 className="text-xl font-bold text-gray-900">3. Market &amp; Economic Risks</h2>
        <p>
          Past investment performance is not indicative of future returns. High yield savings rates, mortgage rates, and investment returns fluctuate based on macroeconomic conditions.
        </p>
      </div>
    </div>
  );
}

