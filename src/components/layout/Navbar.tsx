"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  TrendingUp, 
  Landmark, 
  ShieldCheck, 
  BookOpen, 
  Calculator,
  ArrowRight
} from "lucide-react";
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-navy to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">FS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tight text-brand-navy leading-none font-serif">
                {SITE_NAME}
              </span>
              <span className="text-[11px] text-gray-400 font-medium tracking-wide mt-0.5">
                {SITE_TAGLINE}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isOpen = openDropdown === item.label;

              return (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-brand-navy py-2 transition-colors"
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-brand-navy group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-navy hover:bg-blue-50/70 transition-colors"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar Inline */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search topics, guides and tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:w-72 focus:bg-white focus:border-brand-navy transition-all duration-300"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Newsletter CTA Button */}
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-brand-navy hover:bg-blue-900 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-brand-navy hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-brand-navy hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-gray-100">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search topics, guides and tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-brand-navy"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl animate-in fade-in duration-200">
          <div className="container-main py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-50 pb-3">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-800 py-1"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-2 ml-3 space-y-2 border-l-2 border-blue-100 pl-3">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-gray-600 hover:text-brand-navy py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-semibold text-gray-800 py-1"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-2">
              <Link
                href="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 bg-brand-navy text-white font-semibold rounded-lg shadow-sm"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

