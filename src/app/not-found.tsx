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
          <p className="text-xs font-bold uppercase tracking-widest text-[#D9541E] mb-4">
            Error 404
          </p>
          <h1 className="text-[100px] sm:text-[120px] font-black text-[#111111] leading-none mb-4 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3">
            Page not found
          </h2>
          <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#D9541E] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#BF4413] shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
            >
              Go back home →
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 border border-[#E5DFD3] bg-white text-[#111111] px-7 py-3.5 rounded-full font-bold hover:bg-[#FAF7F2] transition-all text-sm"
            >
              Browse tools
            </Link>
          </div>
        </div>

        {/* Right — luxury visual */}
        <div className="hidden md:flex items-center justify-center bg-[#111111] text-[#E5DFD3] rounded-3xl border border-[#262626] h-80 shadow-2xl relative overflow-hidden p-8">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D9541E]/20 rounded-full blur-3xl" />
          <div className="text-center relative z-10 space-y-3">
            <div className="text-5xl mb-2">✦</div>
            <p className="text-2xl font-bold text-white tracking-tight">TheFinScoop</p>
            <p className="text-xs text-[#888888] max-w-xs">Clear perspective, intelligent calculators, and independent financial insights.</p>
          </div>
        </div>
      </div>

      {/* Popular Links */}
      <div className="mt-20">
        <h3 className="font-bold text-lg text-[#111111] mb-6 tracking-tight">Popular destinations</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-2xl border border-[#E5DFD3] p-6 hover:border-[#D9541E] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl block mb-3">{link.icon}</span>
                <p className="font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">{link.label}</p>
                <p className="text-xs text-[#737373] mt-2 leading-relaxed">{link.desc}</p>
              </div>
              <span className="text-xs font-bold text-[#D9541E] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

