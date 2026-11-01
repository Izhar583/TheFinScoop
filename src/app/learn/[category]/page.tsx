import type { Metadata } from "next";
import { LEARN_CATEGORIES } from "@/lib/constants";
import { MOCK_ARTICLES } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleCard from "@/components/cards/ArticleCard";
import { 
  ArrowRight, 
  Wallet, 
  Target, 
  TrendingUp, 
  PiggyBank, 
  Calculator, 
  ShieldCheck, 
  FileText,
  Clock
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return LEARN_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = LEARN_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Personal Finance Guides & Advice | TheFinScoop`,
    description: cat.description,
  };
}

const subcategories = [
  { name: "Money Management", desc: "Learn the essentials of managing cashflow", icon: Wallet },
  { name: "Financial Goals", desc: "Set and achieve short & long-term targets", icon: Target },
  { name: "Spending & Habits", desc: "Build sustainable habits that stick", icon: PiggyBank },
  { name: "Saving & Investing", desc: "Grow wealth with smart compound interest", icon: TrendingUp },
  { name: "Taxes & Planning", desc: "Understand deductions and retirement", icon: ShieldCheck },
  { name: "Tools & Calculators", desc: "Use our free planners to model finances", icon: Calculator },
];

export default async function LearnCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = LEARN_CATEGORIES.find((c) => c.slug === category);

  if (!cat) notFound();

  const featuredArticle = MOCK_ARTICLES[0];
  const categoryArticles = MOCK_ARTICLES;

  return (
    <div className="space-y-16 pb-20">
      {/* ──────────────── 1. CATEGORY HERO ──────────────── */}
      <section className="bg-gradient-to-b from-[#112444] to-[#0a172c] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                {cat.name}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Build better money habits for a brighter future.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Practical guides, expert insights and simple tools to help you manage your money, reach your goals and gain confidence in your financial decisions.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a href="#featured" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guides &amp; Articles</span>
                </a>
                <Link href="/tools" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors">
                  <Calculator className="w-3.5 h-3.5 text-blue-400" />
                  <span>Related Tools</span>
                </Link>
                <a href="#latest" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  <span>Expert Insights</span>
                </a>
              </div>
            </div>

            {/* Note mockup */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md text-xs text-gray-300 space-y-3">
                <p className="font-bold text-white text-sm">Better Money Habits</p>
                <div className="space-y-1.5 text-emerald-300">
                  <p>✓ Save before spending</p>
                  <p>✓ Eliminate high-interest debt</p>
                  <p>✓ Track monthly cashflow</p>
                  <p>✓ Invest consistently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. FEATURED ARTICLE ──────────────── */}
      <section className="container-main" id="featured">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Featured Article
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm grid md:grid-cols-12 gap-8 items-center p-6 md:p-8">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Essential Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-snug">
              {featuredArticle.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
              <span className="font-semibold text-gray-900">By {featuredArticle.author.name}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredArticle.readTime} min read
              </span>
            </div>
            <div className="pt-2">
              <Link
                href={`/learn/${featuredArticle.category}/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy hover:bg-blue-900 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                <span>Read full guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 w-full h-56 sm:h-64 rounded-xl bg-gradient-to-tr from-slate-800 to-brand-navy flex items-center justify-center text-5xl text-white">
            📝
          </div>
        </div>
      </section>

      {/* ──────────────── 3. EXPLORE THIS CATEGORY (SUBCATEGORIES) ──────────────── */}
      <section className="container-main">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Topics in {cat.name}
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
            Explore this category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subcategories.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-gray-100 bg-white shadow-xs hover:border-blue-100 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-navy flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{sub.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{sub.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──────────────── 4. LATEST ARTICLES ──────────────── */}
      <section className="container-main" id="latest">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Fresh Reads
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
              Latest Articles
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryArticles.slice(0, 4).map((art) => (
            <ArticleCard key={art.slug} article={art} />
          ))}
        </div>
      </section>
    </div>
  );
}
