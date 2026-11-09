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
      <section className="bg-[#F3EEE3] text-[#111111] py-16 md:py-20 relative overflow-hidden border-b border-[#E5DFD3]/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9541E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3.5 py-1.5 rounded-full">
                {cat.name}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                Build better money habits for a <span className="italic font-serif font-normal text-[#D9541E]">brighter future.</span>
              </h1>
              <p className="text-[#4A4A4A] text-base sm:text-lg max-w-xl leading-relaxed">
                Practical guides, expert insights and simple tools to help you manage your money, reach your goals and gain confidence in your financial decisions.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a href="#featured" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E5DFD3] hover:border-[#D9541E]/50 text-xs font-bold text-[#111111] transition-all shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-[#D9541E]" />
                  <span>Guides &amp; Articles</span>
                </a>
                <Link href="/tools" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E5DFD3] hover:border-[#D9541E]/50 text-xs font-bold text-[#111111] transition-all shadow-xs">
                  <Calculator className="w-3.5 h-3.5 text-[#D9541E]" />
                  <span>Related Tools</span>
                </Link>
                <a href="#latest" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E5DFD3] hover:border-[#D9541E]/50 text-xs font-bold text-[#111111] transition-all shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D9541E]" />
                  <span>Expert Insights</span>
                </a>
              </div>
            </div>

            {/* Note mockup */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-[#111111] border border-[#262626] rounded-3xl p-6 shadow-2xl backdrop-blur-md text-xs text-[#E5DFD3] space-y-3">
                <p className="font-bold text-white text-sm">Better Money Habits</p>
                <div className="space-y-2 text-[#CCCCCC]">
                  <p className="flex items-center gap-2"><span className="text-[#D9541E] font-bold">✓</span> Save before spending</p>
                  <p className="flex items-center gap-2"><span className="text-[#D9541E] font-bold">✓</span> Eliminate high-interest debt</p>
                  <p className="flex items-center gap-2"><span className="text-[#D9541E] font-bold">✓</span> Track monthly cashflow</p>
                  <p className="flex items-center gap-2"><span className="text-[#D9541E] font-bold">✓</span> Invest consistently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. FEATURED ARTICLE ──────────────── */}
      <section className="container-main" id="featured">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
            Featured Article
          </span>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl transition-all duration-300 grid md:grid-cols-12 gap-8 items-center p-8 md:p-10 group">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3 py-1 rounded-full">
              Essential Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] group-hover:text-[#D9541E] transition-colors leading-snug tracking-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-base text-[#4A4A4A] leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#737373] pt-2">
              <span className="font-bold text-[#111111]">By {featuredArticle.author.name}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D9541E]" />
                {featuredArticle.readTime} min read
              </span>
            </div>
            <div className="pt-2">
              <Link
                href={`/learn/${featuredArticle.category}/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9541E] hover:bg-[#BF4413] text-white font-bold text-xs sm:text-sm rounded-full shadow-sm transition-all active:scale-95"
              >
                <span>Read full guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 w-full h-64 sm:h-72 rounded-2xl bg-[#111111] border border-[#262626] flex items-center justify-center text-5xl text-[#F3EEE3] shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D9541E]/20 to-transparent" />
            <span className="relative z-10 text-4xl">✦</span>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. EXPLORE THIS CATEGORY (SUBCATEGORIES) ──────────────── */}
      <section className="container-main">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
            Topics in {cat.name}
          </span>
          <h2 className="text-2xl font-extrabold text-[#111111] mt-1 tracking-tight">
            Explore this category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl sm:rounded-3xl border border-[#E5DFD3] bg-white shadow-sm hover:border-[#D9541E]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#D9541E] group-hover:bg-[#D9541E] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors">{sub.name}</h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1 leading-relaxed">{sub.desc}</p>
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
