"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/ui/SearchBar";
import { MOCK_ARTICLES } from "@/data/mockData";
import { TOOLS } from "@/lib/constants";
import ArticleCard from "@/components/cards/ArticleCard";
import ToolCard from "@/components/cards/ToolCard";
import { Search, Sparkles } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [selectedType, setSelectedType] = useState<string>("all");

  const matchingArticles = MOCK_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchingTools = TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = matchingArticles.length + matchingTools.length;

  return (
    <div className="container-main py-12 lg:py-20 min-h-screen">
      {/* Search Header */}
      <div className="mb-12 max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
          <Search className="w-3.5 h-3.5 text-blue-600" />
          Search Knowledge Base &amp; Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Search results
        </h1>
        <div className="pt-2">
          <SearchBar initialQuery={query} />
        </div>
        {query && (
          <p className="text-base text-slate-600 mt-4">
            Showing results for &ldquo;<strong className="text-slate-900">{query}</strong>&rdquo; ({totalResults} found)
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
        {/* Filters */}
        <aside className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Filter by type
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedType("all")}
                className={`block w-full text-left px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  selectedType === "all"
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-200/80"
                }`}
              >
                All Results ({totalResults})
              </button>
              <button
                onClick={() => setSelectedType("tools")}
                className={`block w-full text-left px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  selectedType === "tools"
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-200/80"
                }`}
              >
                Calculators &amp; Tools ({matchingTools.length})
              </button>
              <button
                onClick={() => setSelectedType("articles")}
                className={`block w-full text-left px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  selectedType === "articles"
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-200/80"
                }`}
              >
                Guides &amp; Articles ({matchingArticles.length})
              </button>
            </div>
          </div>
        </aside>

        {/* Results Stream */}
        <main className="space-y-12">
          {totalResults === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-200/80 text-slate-700 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-4">No matching results</h3>
              <p className="text-base text-slate-600 max-w-md mx-auto">
                Try searching for broader keywords like &quot;interest&quot;, &quot;budget&quot;, &quot;mortgage&quot;, &quot;banking&quot;, or &quot;loan&quot;.
              </p>
            </div>
          ) : (
            <>
              {(selectedType === "all" || selectedType === "tools") && matchingTools.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Finance Calculators ({matchingTools.length})
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {matchingTools.map((t) => (
                      <ToolCard key={t.slug} tool={t} />
                    ))}
                  </div>
                </section>
              )}

              {(selectedType === "all" || selectedType === "articles") && matchingArticles.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Articles &amp; Guides ({matchingArticles.length})
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {matchingArticles.map((a) => (
                      <ArticleCard key={a.slug} article={a} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container-main py-20 text-center">
          <p className="text-slate-500 font-semibold text-lg">Loading search results...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
