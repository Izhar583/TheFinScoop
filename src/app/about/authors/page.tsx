import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { AUTHORS, MOCK_ARTICLES } from "@/data/mockData";
import { ArrowRight, BookOpen, Clock, ShieldCheck } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";

export const metadata: Metadata = {
  title: "Author Directory — Financial Writers & Editors | TheFinScoop",
  description:
    "Meet the experienced personal finance writers, editors, and fintech researchers behind TheFinScoop.",
};

export default function AuthorDirectoryPage() {
  return (
    <div className="py-10 pb-20 space-y-16">
      <div className="container-main max-w-5xl">
        <Breadcrumb
          items={[{ label: "TheFinScoop", href: "/about" }, { label: "Author Directory" }]}
        />

        {/* Hero */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/20">
            Editorial Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Author <span className="italic font-serif font-normal text-[#D9541E]">Directory</span>
          </h1>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Our content is written and fact-checked by experienced journalists and personal finance experts committed to accuracy, transparency, and actionable advice.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {AUTHORS.map((author) => {
            const authorArticles = MOCK_ARTICLES.filter(
              (a) => a.author.name === author.name
            );

            return (
              <div
                key={author.slug}
                className="bg-white rounded-3xl border border-[#E5DFD3] p-7 shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] text-[#F3EEE3] group-hover:bg-[#D9541E] group-hover:text-white transition-all flex items-center justify-center font-extrabold text-xl shadow-sm">
                      {author.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors leading-tight">
                        {author.name}
                      </h3>
                      <p className="text-xs font-bold text-[#D9541E] mt-0.5">
                        {author.role}
                      </p>
                      <span className="text-[11px] text-[#737373]">
                        {authorArticles.length} published guide{authorArticles.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed pt-2">
                    {author.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {author.social?.twitter && (
                      <a
                        href={author.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#737373] hover:text-[#D9541E] rounded-md transition-colors"
                        aria-label="Twitter profile"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {author.social?.linkedin && (
                      <a
                        href={author.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#737373] hover:text-[#D9541E] rounded-md transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/author/${author.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#D9541E] hover:text-[#BF4413] transition-colors"
                  >
                    <span>Read articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Standards Notice */}
        <div className="p-8 rounded-3xl bg-[#111111] text-[#E5DFD3] border border-[#262626] flex items-start gap-4 shadow-xl">
          <ShieldCheck className="w-8 h-8 text-[#D9541E] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Strict Editorial Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
              Every guide on TheFinScoop undergoes rigorous peer-review and fact-checking before publication. Our writers do not accept payment from financial institutions for product placement or review favoritism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
