export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 lg:px-10">
      <main className="space-y-8">
        <section className="paper-panel overflow-hidden rounded-3xl">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <span className="accent-chip inline-flex rounded-full px-3 py-1 text-sm font-semibold">
                Early Build: Marketplace Core
              </span>
              <h1 className="ink-title text-4xl font-semibold leading-tight text-[#2a2217] sm:text-5xl">
                Manga Marketplace
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#5b4d3b] sm:text-lg">
                This starter is tuned for rapid feature work on catalog, cart, and checkout.
                Authentication is intentionally deferred while the core shopping experience is built.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-[#c74422] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a93619]">
                  Build Product Grid
                </button>
                <button className="rounded-full border border-[#d2bea3] bg-white px-5 py-2.5 text-sm font-semibold text-[#5f4d37] transition hover:bg-[#fff6ea]">
                  Add Cart State
                </button>
              </div>
            </div>

            <div className="paper-panel rounded-2xl bg-[#fff5e6] p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#7d5631]">
                Next Up
              </p>
              <ul className="mt-3 space-y-3 text-sm text-[#4e3f2d]">
                <li className="rounded-xl bg-white px-3 py-2">1. Product schema and mock inventory</li>
                <li className="rounded-xl bg-white px-3 py-2">2. Cart store with add and remove flows</li>
                <li className="rounded-xl bg-white px-3 py-2">3. Browse by genre and publisher filters</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Shonen",
            "Seinen",
            "Romance",
            "Collector Editions",
          ].map((category) => (
            <article key={category} className="paper-panel rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8c6e48]">Category</p>
              <h2 className="mt-2 text-lg font-semibold text-[#2f261b]">{category}</h2>
              <p className="mt-2 text-sm text-[#62503a]">Placeholder slot for dynamic category cards.</p>
            </article>
          ))}
        </section>

        <section className="paper-panel rounded-3xl p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="ink-title text-2xl font-semibold text-[#2a2217] sm:text-3xl">Featured This Week</h2>
            <span className="rounded-full bg-[#f5e2c8] px-3 py-1 text-xs font-semibold text-[#744c26]">
              Mock Data Mode
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Blade City Volume 1", price: "$12.99" },
              { title: "Warden of Stars Volume 4", price: "$14.50" },
              { title: "Moon District Deluxe", price: "$24.00" },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#ead8bc] bg-white p-4">
                <div className="h-32 rounded-xl bg-gradient-to-br from-[#ffe5c3] to-[#ffd0a4]" />
                <h3 className="mt-3 text-base font-semibold text-[#33281c]">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#8c3a25]">{item.price}</span>
                  <button className="rounded-full border border-[#d9c4a5] px-3 py-1.5 text-xs font-semibold text-[#5e4b35] hover:bg-[#fff5e6]">
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-panel rounded-3xl p-6 sm:p-8">
          <h2 className="ink-title text-2xl font-semibold text-[#2a2217]">Scaffold Boundaries</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-white p-3 text-sm text-[#554533]">
              Ready now: browsing UX, product cards, cart state wiring, and checkout prep.
            </p>
            <p className="rounded-xl bg-white p-3 text-sm text-[#554533]">
              Deferred on purpose: sign in, account profiles, and role-based access.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
