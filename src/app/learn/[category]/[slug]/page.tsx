import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MOCK_ARTICLES } from "@/data/mockData";
import { formatDate, getCategoryLabel, getCategoryColor } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — TheFinScoop`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  const color = getCategoryColor(article.category);

  return (
    <div className="bg-white py-10 md:py-16">
      <div className="container-main max-w-4xl">
        {/* Breadcrumb / Back button */}
        <div className="mb-6">
          <Link
            href={`/learn`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all guides</span>
          </Link>
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${color.bg} ${color.text}`}>
            {getCategoryLabel(article.category)}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author / Date / Read Time */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 text-xs text-gray-500 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-700">
              {article.author.name[0]}
            </div>
            <div>
              <p className="font-bold text-gray-900">{article.author.name}</p>
              <p className="text-gray-400">{article.author.role || "Finance Writer"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Published {formatDate(article.publishedAt, "short")}</span>
            <span>·</span>
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} min read
            </span>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="w-full h-72 sm:h-96 rounded-2xl bg-gradient-to-tr from-slate-800 to-brand-navy flex items-center justify-center text-6xl text-white/90 shadow-lg mb-10">
          📊
        </div>

        {/* Quick Summary Box */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-6 mb-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-2">
            Quick Summary
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
          <p>
            Managing money shouldn&apos;t be overwhelming. In this detailed breakdown, we explore practical steps to make sense of your finances and make informed, long-term decisions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            1. Understand Where Your Money Goes
          </h2>
          <p>
            Before making any major shifts in your saving or investing plan, get a crystal-clear picture of your current cash flow. Track your expenses for at least 30 days to see the split between essential fixed costs and discretionary spending.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            2. Automate Your Goals
          </h2>
          <p>
            The easiest way to stay consistent is to automate transfers into your savings or investment accounts on payday. Pay yourself first before covering variable expenses.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-gray-900">
            Enjoyed this guide? Share it with a friend.
          </p>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <Link
              href="/learn"
              className="px-4 py-2 bg-brand-navy hover:bg-blue-900 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Browse more guides →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
