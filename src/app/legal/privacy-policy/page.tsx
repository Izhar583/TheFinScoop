import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Your privacy matters to us",
  description: "This Privacy Policy explains how TheFinScoop collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "information-we-collect", title: "1. Information we collect" },
    { id: "how-we-use", title: "2. How we use your information" },
    { id: "cookies", title: "3. Cookies and similar technologies" },
    { id: "third-party", title: "4. Third-party services" },
    { id: "data-security", title: "5. Data security" },
    { id: "your-rights", title: "6. Your rights and choices" },
    { id: "childrens-privacy", title: "7. Children's privacy" },
    { id: "changes", title: "8. Changes to this policy" },
    { id: "contact", title: "9. Contact us" },
  ];

  return (
    <div className="container-main py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <span>Home</span> &rsaquo; <span>Legal</span> &rsaquo;{" "}
        <span className="text-gray-900 font-medium">Privacy Policy</span>
      </nav>

      <div className="grid lg:grid-cols-[240px_1fr] gap-12">
        {/* ToC Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <p className="text-sm font-semibold text-gray-700 mb-4">On this page</p>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="max-w-3xl">
          <div className="mb-8">
            <p className="badge bg-blue-50 text-blue-700 mb-3">Legal</p>
            <h1 className="mb-2">Privacy Policy</h1>
            <p className="text-xl text-gray-500">Your privacy matters to us.</p>
            <p className="text-gray-500 mt-3">
              This Privacy Policy explains how TheFinScoop collects, uses, and protects
              your personal information when you visit our website.
            </p>
          </div>

          {/* Green callout */}
          <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-10">
            <span className="text-green-600 text-lg">✓</span>
            <p className="text-sm text-green-800">
              We do not sell, rent or share your personal information with third parties
              for their marketing purposes.
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-10">
            <section id="information-we-collect">
              <h2>1. Information we collect</h2>
              <p>We may collect personal information you provide directly to us, such as:</p>
              <ul>
                <li>Name and email address (e.g., through our newsletter or contact form)</li>
                <li>Comments and messages you submit</li>
                <li>Information you provide when using our tools or calculators</li>
                <li>Usage and analytics data (e.g., pages visited, time on site, device information)</li>
              </ul>
            </section>

            <section id="how-we-use">
              <h2>2. How we use your information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our content, tools and services</li>
                <li>Send newsletters and relevant updates (if you opt in)</li>
                <li>Respond to your questions and requests</li>
                <li>Understand how our website is used and improve user experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section id="cookies">
              <h2>3. Cookies and similar technologies</h2>
              <p>
                We use cookies and similar technologies to enable site features, analyze site traffic,
                and personalize content. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section id="third-party">
              <h2>4. Third-party services</h2>
              <p>
                We may use trusted third-party services such as Google Analytics, Google Ads, and other
                tools to help us understand how our website is used and to deliver relevant content and
                advertisements. These third parties may collect and process information in accordance with
                their own privacy policies.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

