import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — TheFinScoop",
  description: "Please read these terms carefully before accessing or using TheFinScoop website and tools.",
};

export default function TermsOfUsePage() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of terms" },
    { id: "use-of-site", title: "2. Use of the website" },
    { id: "intellectual-property", title: "3. Intellectual property" },
    { id: "user-content", title: "4. User content" },
    { id: "third-party", title: "5. Links to third-party sites" },
    { id: "disclaimer", title: "6. Disclaimer" },
    { id: "liability", title: "7. Limitation of liability" },
  ];

  return (
    <div className="container-main py-12 max-w-5xl">
      <nav className="text-xs text-[#737373] mb-6">
        <span>Home</span> &rsaquo; <span>Legal</span> &rsaquo; <span className="text-[#111111] font-bold">Terms of Use</span>
      </nav>

      <div className="grid lg:grid-cols-[240px_1fr] gap-12">
        <aside className="hidden lg:block sticky top-24">
          <div className="bg-white border border-[#E5DFD3] rounded-3xl p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">On this page</p>
            <ul className="space-y-2 text-xs">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-[#4A4A4A] hover:text-[#D9541E] font-medium block py-0.5 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="space-y-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 mb-2 tracking-tight">Terms of Use</h1>
            <p className="text-sm text-[#4A4A4A]">Please read these terms carefully before using our platform.</p>
          </div>

          <section id="acceptance" className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111] tracking-tight">1. Acceptance of terms</h2>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              By accessing or using TheFinScoop, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section id="use-of-site" className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111] tracking-tight">2. Use of the website</h2>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              You may use our content, calculators, and materials for personal, non-commercial purposes only. You agree not to misuse, copy, or distribute our content without permission or engage in any unlawful activities on the website.
            </p>
          </section>

          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-xl font-bold text-[#111111] tracking-tight">3. Intellectual property</h2>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              All content on this website, including text, graphics, logos, calculator algorithms, and images, is owned by TheFinScoop or its licensors and is protected by copyright and intellectual property laws.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

