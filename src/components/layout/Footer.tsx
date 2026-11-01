import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";
import { Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1728] text-gray-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container-main">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
                FS
              </div>
              <span className="font-extrabold text-2xl text-white font-serif tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Practical financial knowledge, useful tools, and clear fintech guides.
            </p>
            {/* Social Icons (SVG) */}
            <div className="flex items-center gap-3 pt-2">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
                </svg>
              </a>
              {/* RSS */}
              <a
                href="/rss.xml"
                className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TheFinScoop Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">TheFinScoop</h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.thefinscoop.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Editorial</h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.editorial.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p className="text-gray-400 font-medium">
            Better financial decisions start with better information.
          </p>
        </div>
      </div>
    </footer>
  );
}
