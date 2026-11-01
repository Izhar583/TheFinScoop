import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHORS, MOCK_ARTICLES } from "@/data/mockData";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleCard from "@/components/cards/ArticleCard";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AUTHORS.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    title: `${author.name} — Author Profile | TheFinScoop`,
    description: author.bio,
  };
}

export default async function AuthorProfilePage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = AUTHORS.find((a) => a.slug === slug);

  if (!author) notFound();

  const authorArticles = MOCK_ARTICLES.filter(
    (a) => a.author.name === author.name
  );

  return (
    <div className="py-10 pb-20 space-y-12">
      <div className="container-main max-w-4xl">
        <Breadcrumb
          items={[
            { label: "About", href: "/about" },
            { label: "Authors", href: "/about/authors" },
            { label: author.name },
          ]}
        />

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1D3A6E] to-blue-700 flex items-center justify-center font-extrabold text-2xl text-white shadow flex-shrink-0">
            {author.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  {author.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                  {author.role}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {author.social?.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-500 hover:text-[#1D3A6E] rounded-lg border border-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
                {author.social?.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-500 hover:text-blue-700 rounded-lg border border-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>

        {/* Articles by this author */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#1D3A6E]" />
            <h2 className="text-xl font-bold text-gray-900">
              Articles by {author.name} ({authorArticles.length})
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {authorArticles.map((art) => (
              <ArticleCard key={art.slug} article={art} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
