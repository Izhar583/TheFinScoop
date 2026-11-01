import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  const popularLinks = [
    { label: "Finance Tools", href: "/tools", icon: "🧮", desc: "Learn how compound interest and more." },
    { label: "Learn", href: "/learn", icon: "📚", desc: "Explore our finance topics and guides." },
    { label: "Fintech", href: "/fintech", icon: "📱", desc: "Discover digital payments and banking." },
    { label: "Latest Articles", href: "/learn?sort=latest", icon: "📰", desc: "Read our latest insights and updates." },
  ];

  return (
    <div className="container-main py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Error 404
          </p>
          <h1 className="text-[120px] font-extrabold text-brand-navy leading-none mb-4">
            404
          </h1>
          <h2 className="mb-3">Page not found</h2>
          <p className="text-gray-500 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Go back to home →
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse guides
            </Link>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div className="hidden md:flex items-center justify-center bg-brand-light rounded-2xl h-72">
          <div className="text-center">
            <div className="text-6xl mb-4">💡</div>
            <p className="text-brand-navy font-semibold">Better Financial Decisions</p>
          </div>
        </div>
      </div>

      {/* Popular Links */}
      <div className="mt-16">
        <h3 className="font-semibold text-gray-700 mb-6">Popular links</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card flex flex-col gap-2 hover:border-blue-200"
            >
              <span className="text-2xl">{link.icon}</span>
              <p className="font-semibold text-brand-navy">{link.label}</p>
              <p className="text-sm text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

