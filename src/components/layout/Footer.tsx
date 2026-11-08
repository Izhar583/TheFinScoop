import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";
import { Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#E5DFD3] pt-20 pb-16 border-t border-[#262626]">
      <div className="container-main">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/whitelogo.png"
                alt="TheFinScoop White Logo"
                width={200}
                height={60}
                className="h-18 w-auto object-contain"
              />
            </Link>
            <p className="text-base text-[#999999] leading-relaxed max-w-sm">
              Practical financial knowledge, precision calculation tools, and clear, unbiased fintech guides.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#D9541E] transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#D9541E] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#D9541E] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#D9541E] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="/rss.xml"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#D9541E] transition-colors"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3EEE3]">Explore</h4>
            <ul className="space-y-3 text-base">
              {FOOTER_LINKS.explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#999999] hover:text-[#D9541E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TheFinScoop Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3EEE3]">TheFinScoop</h4>
            <ul className="space-y-3 text-base">
              {FOOTER_LINKS.thefinscoop.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#999999] hover:text-[#D9541E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3EEE3]">Editorial</h4>
            <ul className="space-y-3 text-base">
              {FOOTER_LINKS.editorial.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <Link href={item.href} className="text-[#999999] hover:text-[#D9541E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3EEE3]">Legal</h4>
            <ul className="space-y-3 text-base">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#999999] hover:text-[#D9541E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-[#737373] gap-4">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p className="text-[#737373] font-medium">
            Better financial decisions start with <span className="text-[#D9541E]">better information</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
