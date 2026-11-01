"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/ui/SearchBar";
import { MOCK_ARTICLES } from "@/data/mockData";
import { TOOLS } from "@/lib/constants";
import ArticleCard from "@/components/cards/ArticleCard";
import ToolCard from "@/components/cards/ToolCard";

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
    <div className="container-main py-12">
      {/* Search Header */}
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Search results
        </h1>
        <SearchBar initialQuery={query} />
        {query && (
          <p className="text-sm text-gray-500 mt-4">
            Showing results for &ldquo;<strong>{query}</strong>&rdquo; ({totalResults} found)
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
        {/* Filters */}
        <aside className="bg-gray-50/70 p-5 rounded-xl border border-gray-100 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
              Filter by type
            </h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => setSelectedType("all")}
                className={`block w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedType === "all"
                    ? "bg-brand-navy text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                All ({totalResults})
              </button>
              <button
                onClick={() => setSelectedType("tools")}
                className={`block w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedType === "tools"
                    ? "bg-brand-navy text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Tools ({matchingTools.length})
              </button>
              <button
                onClick={() => setSelectedType("articles")}
                className={`block w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedType === "articles"
                    ? "bg-brand-navy text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Articles ({matchingArticles.length})
              </button>
            </div>
          </div>
        </aside>

        {/* Results Stream */}
        <main className="space-y-8">
          {totalResults === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="text-4xl">🔍</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">No matching results</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                Try searching for terms like &quot;interest&quot;, &quot;budget&quot;, &quot;banking&quot;, or &quot;loan&quot;.
              </p>
            </div>
          ) : (
            <>
              {(selectedType === "all" || selectedType === "tools") && matchingTools.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Matching Calculators &amp; Tools ({matchingTools.length})
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {matchingTools.map((t) => (
                      <ToolCard key={t.slug} tool={t} />
                    ))}
                  </div>
                </div>
              )}

              {(selectedType === "all" || selectedType === "articles") && matchingArticles.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Articles &amp; Guides ({matchingArticles.length})
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {matchingArticles.map((a) => (
                      <ArticleCard key={a.slug} article={a} />
                    ))}
                  </div>
                </div>
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
        <div className="container-main py-16 text-center text-sm text-gray-400">
          Loading search results...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
