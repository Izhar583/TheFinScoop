import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import type { Article } from "@/types";
import { formatDate, getCategoryLabel } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "standard" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "standard" }: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/learn/${article.category}/${article.slug}`}
        className="group flex gap-4 items-start py-4 border-b border-[#E5DFD3] last:border-0 hover:bg-[#F3EEE3]/50 p-3 rounded-2xl transition-all"
      >
        <div className="w-14 h-14 rounded-xl bg-[#F3EEE3] text-[#111111] flex-shrink-0 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            {getCategoryLabel(article.category)}
          </span>
          <h4 className="text-base font-bold text-[#111111] group-hover:text-[#D9541E] line-clamp-1 mt-1 transition-colors">
            {article.title}
          </h4>
          <p className="text-xs text-[#737373] mt-1 font-medium">
            {formatDate(article.publishedAt, "short")} · {article.readTime} min read
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden hover:border-[#D9541E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Visual Header */}
      <div className="w-full h-52 bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,84,30,0.15),transparent)]" />
        <div className="w-16 h-16 rounded-2xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#D9541E] transition-all duration-300">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3EEE3] text-[#111111] border border-[#E5DFD3] shadow-sm">
            {getCategoryLabel(article.category)}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/learn/${article.category}/${article.slug}`}>
            <h3 className="text-2xl font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors line-clamp-2 leading-tight">
              {article.title}
            </h3>
          </Link>
          <p className="text-base text-[#4A4A4A] mt-3 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-[#E5DFD3] flex items-center justify-between">
          <div className="text-sm">
            <span className="font-bold text-[#111111] block">{article.author.name}</span>
            <span className="text-xs text-[#737373] flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} min read
            </span>
          </div>

          <Link
            href={`/learn/${article.category}/${article.slug}`}
            className="w-9 h-9 rounded-full bg-[#F3EEE3] flex items-center justify-center text-[#111111] group-hover:bg-[#D9541E] group-hover:text-white transition-all duration-200"
            aria-label="Read article"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
