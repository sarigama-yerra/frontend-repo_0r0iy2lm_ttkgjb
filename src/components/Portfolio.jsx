function Portfolio() {
  const items = Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60">
      <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 text-sm">
        Preview {i + 1}
      </div>
      <div className="p-4 text-slate-300 text-sm">Clean, modern website layout</div>
    </div>
  ));

  return (
    <section id="portfolio" className="relative py-20">
      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A glimpse of the clean and modern websites we build.</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
