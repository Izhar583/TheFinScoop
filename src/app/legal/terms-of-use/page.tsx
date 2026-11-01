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
      <nav className="text-xs text-gray-500 mb-6">
        <span>Home</span> &rsaquo; <span>Legal</span> &rsaquo; <span className="text-gray-900 font-semibold">Terms of Use</span>
      </nav>

      <div className="grid lg:grid-cols-[240px_1fr] gap-12">
        <aside className="hidden lg:block sticky top-24">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">On this page</p>
          <ul className="space-y-2 text-xs">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-gray-500 hover:text-blue-600 block py-0.5">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mt-3 mb-2">Terms of Use</h1>
            <p className="text-sm text-gray-600">Please read these terms carefully before using our platform.</p>
          </div>

          <section id="acceptance" className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. Acceptance of terms</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              By accessing or using TheFinScoop, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section id="use-of-site" className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. Use of the website</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              You may use our content, calculators, and materials for personal, non-commercial purposes only. You agree not to misuse, copy, or distribute our content without permission or engage in any unlawful activities on the website.
            </p>
          </section>

          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. Intellectual property</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              All content on this website, including text, graphics, logos, calculator algorithms, and images, is owned by TheFinScoop or its licensors and is protected by copyright and intellectual property laws.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

