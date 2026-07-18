export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8 lg:px-10">
      <header className="sticky top-4 z-10 mb-6 rounded-2xl border border-[#d7d7d7] bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <nav className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <span className="ink-title text-xl font-semibold text-[#171717]">Manga Marketplace</span>
            <ul className="hidden items-center gap-4 text-sm font-medium text-[#3f3f46] md:flex">
              <li><a className="hover:text-black" href="#catalog">Catalog</a></li>
              <li><a className="hover:text-black" href="#featured">Featured</a></li>
              <li><a className="hover:text-black" href="#roadmap">Roadmap</a></li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <input
              aria-label="Search titles"
              placeholder="Search titles, series, creators"
              className="w-full rounded-full border border-[#d4d4d8] bg-[#fafafa] px-4 py-2 text-sm text-[#27272a] outline-none transition focus:border-[#71717a] md:w-72"
            />
            <button className="rounded-full border border-[#d4d4d8] bg-white px-4 py-2 text-sm font-semibold text-[#27272a] hover:bg-[#f4f4f5]">
              Cart (0)
            </button>
          </div>
        </nav>
      </header>

      <main className="space-y-6">
        <section className="paper-panel overflow-hidden rounded-3xl">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <span className="accent-chip inline-flex rounded-full px-3 py-1 text-sm font-semibold">
                Build Focus: Catalog + Cart
              </span>
              <h1 className="ink-title text-4xl font-semibold leading-tight text-[#18181b] sm:text-5xl">
                Navbar-first storefront foundation
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#3f3f46] sm:text-lg">
                This layout is intentionally minimal and neutral so you can iterate quickly on browsing,
                cart behavior, and checkout flows. Authentication stays out of scope for now.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-[#27272a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#18181b]">
                  Add Product Data
                </button>
                <button className="rounded-full border border-[#d4d4d8] bg-white px-5 py-2.5 text-sm font-semibold text-[#3f3f46] transition hover:bg-[#f4f4f5]">
                  Wire Cart State
                </button>
              </div>
            </div>

            <div className="paper-panel rounded-2xl p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#52525b]">Next Up</p>
              <ul className="mt-3 space-y-3 text-sm text-[#3f3f46]">
                <li className="rounded-xl bg-white px-3 py-2">1. Product schema and mock inventory</li>
                <li className="rounded-xl bg-white px-3 py-2">2. Cart store with add and remove flows</li>
                <li className="rounded-xl bg-white px-3 py-2">3. Browse by genre and publisher filters</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="catalog" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Shonen",
            "Seinen",
            "Romance",
            "Collector Editions",
          ].map((category) => (
            <article key={category} className="paper-panel rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#71717a]">Category</p>
              <h2 className="mt-2 text-lg font-semibold text-[#18181b]">{category}</h2>
              <p className="mt-2 text-sm text-[#52525b]">Placeholder slot for dynamic category cards.</p>
            </article>
          ))}
        </section>

        <section id="featured" className="paper-panel rounded-3xl p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="ink-title text-2xl font-semibold text-[#18181b] sm:text-3xl">Featured This Week</h2>
            <span className="rounded-full border border-[#d4d4d8] bg-[#f8f8f8] px-3 py-1 text-xs font-semibold text-[#52525b]">
              Mock Data Mode
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Blade City Volume 1", price: "$12.99" },
              { title: "Warden of Stars Volume 4", price: "$14.50" },
              { title: "Moon District Deluxe", price: "$24.00" },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#e4e4e7] bg-white p-4">
                <div className="h-32 rounded-xl bg-[#f1f1f3]" />
                <h3 className="mt-3 text-base font-semibold text-[#27272a]">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#3f3f46]">{item.price}</span>
                  <button className="rounded-full border border-[#d4d4d8] px-3 py-1.5 text-xs font-semibold text-[#3f3f46] hover:bg-[#f4f4f5]">
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="paper-panel rounded-3xl p-6 sm:p-8">
          <h2 className="ink-title text-2xl font-semibold text-[#18181b]">Scaffold Boundaries</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-white p-3 text-sm text-[#52525b]">
              Ready now: browsing UX, product cards, cart state wiring, and checkout prep.
            </p>
            <p className="rounded-xl bg-white p-3 text-sm text-[#52525b]">
              Deferred on purpose: sign in, account profiles, and role-based access.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
