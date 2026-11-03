"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight
} from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs transition-all">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo with high sharpness */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="TheFinScoop - Make money make sense"
              width={180}
              height={48}
              priority
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav - Clean & Spacious */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isOpen = openDropdown === item.label;
              const isTools = item.label === "Tools";

              return (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-[15px] font-medium py-2 transition-colors relative ${
                      isTools
                        ? "text-slate-950 font-bold"
                        : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                    {isTools && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950 rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 w-64 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 overflow-hidden ring-1 ring-slate-900/5">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
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
                placeholder="Search topics, guides & tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 xl:w-72 pl-10 pr-4 py-2.5 text-sm rounded-full bg-slate-50 border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:w-80 focus:bg-white focus:border-slate-900 transition-all duration-300"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Newsletter CTA Button (Luxury Pill) */}
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search topics, guides & tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-in fade-in duration-200">
          <div className="container-main py-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-slate-50 pb-2">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleMobileAccordionToggle(item.label)}
                      className="flex items-center justify-between w-full text-left font-bold text-base text-slate-900 py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          mobileAccordion === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="mt-1 ml-2 space-y-1.5 border-l-2 border-slate-200 pl-3.5 py-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium text-slate-600 hover:text-slate-950 py-1"
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
                    className="block font-bold text-base text-slate-900 py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3">
              <Link
                href="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3.5 bg-slate-950 text-white font-bold text-sm rounded-full shadow-sm"
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
