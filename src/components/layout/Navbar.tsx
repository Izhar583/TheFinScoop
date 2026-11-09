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
    <header className="sticky top-0 z-50 bg-[#F3EEE3]/90 backdrop-blur-md border-b border-[#E5DFD3] shadow-2xs transition-all">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="TheFinScoop - Make money make sense"
              width={200}
              height={60}
              className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
              priority
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
                    className={`inline-flex items-center gap-1.5 text-[15px] font-semibold py-2 transition-colors relative ${
                      isTools
                        ? "text-[#111111] font-bold"
                        : "text-[#4A4A4A] hover:text-[#D9541E]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#D9541E] group-hover:rotate-180 transition-transform duration-200" />
                    )}
                    {isTools && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D9541E] rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 w-64 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl shadow-xl border border-[#E5DFD3] p-2.5 overflow-hidden ring-1 ring-black/5">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#111111] hover:text-[#D9541E] hover:bg-[#F3EEE3]/60 transition-colors"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#737373] group-hover:translate-x-0.5 transition-transform" />
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
                className="w-64 xl:w-72 pl-10 pr-4 py-2.5 text-sm rounded-full bg-white border border-[#E5DFD3] text-[#111111] placeholder-[#737373] focus:w-80 focus:bg-white focus:border-[#D9541E] focus:ring-2 focus:ring-[#D9541E]/15 transition-all duration-300"
              />
              <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Newsletter CTA Button (Burnt Orange Luxury Pill) */}
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#D9541E] hover:bg-[#BF4413] rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#111111] hover:text-[#D9541E] rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#D9541E] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-[#E5DFD3]">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search topics, guides & tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white border border-[#E5DFD3] text-[#111111] placeholder-[#737373] focus:bg-white focus:border-[#D9541E]"
              />
              <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5DFD3] bg-[#F3EEE3] shadow-xl animate-in fade-in duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container-main py-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[#E5DFD3]/80 pb-2">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleMobileAccordionToggle(item.label)}
                      className="flex items-center justify-between w-full text-left font-bold text-base text-[#111111] py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#737373] transition-transform ${
                          mobileAccordion === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="mt-1 ml-2 space-y-1.5 border-l-2 border-[#D9541E] pl-3.5 py-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium text-[#4A4A4A] hover:text-[#D9541E] py-1"
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
                    className="block font-bold text-base text-[#111111] py-2"
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
                className="w-full inline-flex items-center justify-center py-3.5 bg-[#D9541E] text-white font-bold text-sm rounded-full shadow-sm hover:bg-[#BF4413] transition-colors"
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
