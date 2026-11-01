import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Topics, Tools & Guides",
  description:
    "Make smarter money decisions. Practical financial knowledge, useful tools, and clear fintech guides — all in one place.",
};

export default function LearnPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy text-white section-pad">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-white mb-4">Make smarter money decisions.</h1>
            <p className="text-gray-300 text-lg mb-6">
              Practical financial knowledge, useful tools, and clear fintech
              guides — all in one place.
            </p>
            {/* SearchBar goes here */}
            <div className="flex gap-4 mt-6">
              {/* Finance Tools quick card */}
              {/* Explore Topics quick card */}
            </div>
          </div>
          <div className="hidden md:block">{/* Hero image */}</div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="container-main py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content */}
          <main>
            {/* Worth Understanding — Featured articles */}
            <section className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Editor&apos;s Picks
              </p>
              <h2 className="mb-6">Worth understanding.</h2>
              {/* ArticleGrid (featured) goes here */}
            </section>

            {/* Popular Finance Tools */}
            <section className="mb-16">
              <h2 className="mb-2">Popular finance tools</h2>
              <p className="text-gray-500 mb-6">
                Simple calculators to explore savings, borrowing and everyday
                financial decisions.
              </p>
              {/* ToolRow (horizontal) goes here */}
            </section>

            {/* Explore Topics */}
            <section className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                What matters to you
              </p>
              <h2 className="mb-2">Explore what matters to your money.</h2>
              <p className="text-gray-500 mb-6">
                Focused, helpful resources and expert insight to pay attention
                to.
              </p>
              {/* CategoryGrid (6 topics) goes here */}
            </section>

            {/* Fintech Explained */}
            <section className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                The latest digital products you should know about
              </p>
              <h2 className="mb-6">Fintech explained.</h2>
              {/* FintechGuideCards (3) goes here */}
            </section>

            {/* Latest Articles */}
            <section className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Fresh insights. Practical answers.
              </p>
              <h2 className="mb-2">Fresh insights. Practical answers.</h2>
              <p className="text-gray-500 mb-6">
                New explainers, tips and information this week — updated
                regularly.
              </p>
              {/* ArticleGrid (4 latest) goes here */}
            </section>

            {/* Newsletter */}
            {/* NewsletterStrip goes here */}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* LatestArticlesSidebar */}
            {/* PopularCategories */}
            {/* NewsletterSidebarWidget */}
          </aside>
        </div>
      </div>
    </div>
  );
}

