"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight
} from "lucide-react";
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMobileAccordionToggle = (label: string) => {
    setMobileAccordion(mobileAccordion === label ? null : label);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-2xs transition-all">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Inter 18px 700 bold as per PRD) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1D3A6E] to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-base tracking-tight">FS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[18px] tracking-tight text-[#1D3A6E] leading-none">
                {SITE_NAME}
              </span>
              <span className="text-[11px] text-[#6B7280] font-normal tracking-wide mt-0.5">
                {SITE_TAGLINE}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] hover:text-[#1D3A6E] py-2 transition-colors"
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1D3A6E] group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:text-[#1D3A6E] hover:bg-[#E8F0FE] transition-colors"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="w-3 h-3 text-blue-600 opacity-60" />
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
                className="w-60 pl-9 pr-4 py-2 text-xs rounded-full bg-gray-50 border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] focus:w-68 focus:bg-white focus:border-[#1D3A6E] transition-all duration-300"
              />
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Newsletter CTA Button (14-16px, 600 weight as per PRD) */}
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#1D3A6E] hover:bg-[#152a50] rounded-lg shadow-xs hover:shadow transition-all active:scale-95"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-[#1D3A6E] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#1D3A6E] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-[#E5E7EB]">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search topics, guides and tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg bg-gray-50 border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] focus:bg-white focus:border-[#1D3A6E]"
              />
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}
      </div>

      {/* Full-screen / Overlay Mobile Accordion Menu as per Section 5 */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white shadow-2xl animate-in fade-in duration-200">
          <div className="container-main py-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleMobileAccordionToggle(item.label)}
                      className="flex items-center justify-between w-full text-left font-bold text-sm text-[#111827] py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          mobileAccordion === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="mt-1 ml-2 space-y-1.5 border-l-2 border-blue-200 pl-3 py-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-medium text-[#6B7280] hover:text-[#1D3A6E] py-1.5"
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
                    className="block font-bold text-sm text-[#111827] py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Newsletter in Mobile Menu */}
            <div className="pt-3">
              <Link
                href="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 bg-[#1D3A6E] text-white font-bold text-sm rounded-lg shadow-sm"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
