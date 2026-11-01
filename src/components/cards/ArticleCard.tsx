import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/types";
import { formatDate, getCategoryLabel, getCategoryColor } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "standard" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "standard" }: ArticleCardProps) {
  const color = getCategoryColor(article.category);

  if (variant === "compact") {
    return (
      <Link
        href={`/learn/${article.category}/${article.slug}`}
        className="group flex gap-4 items-start py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 p-2 rounded-lg transition-colors"
      >
        <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center text-xl text-gray-400">
          📰
        </div>
        <div className="flex-1 min-w-0">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${color.bg} ${color.text}`}>
            {getCategoryLabel(article.category)}
          </span>
          <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-600 truncate mt-1">
            {article.title}
          </h4>
          <p className="text-[11px] text-gray-400 mt-0.5">
            {formatDate(article.publishedAt, "short")} · {article.readTime} min read
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-100 transition-all flex flex-col justify-between">
      {/* Mock Image Placeholder */}
      <div className="w-full h-44 bg-gradient-to-tr from-slate-100 to-slate-200 relative flex items-center justify-center overflow-hidden">
        <span className="text-4xl text-gray-400 group-hover:scale-110 transition-transform duration-300">
          📈
        </span>
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs bg-white text-gray-800`}>
            {getCategoryLabel(article.category)}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/learn/${article.category}/${article.slug}`}>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
          <span>By {article.author.name}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime} min read
          </span>
        </div>
      </div>
    </div>
  );
}

