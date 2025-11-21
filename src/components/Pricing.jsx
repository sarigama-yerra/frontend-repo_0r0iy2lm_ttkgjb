function PricingCard({ title, price, features, cta, highlighted }) {
  return (
    <div className={`relative rounded-2xl p-6 border ${highlighted ? 'border-cyan-400/40 bg-slate-900/70 shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_20px_60px_-20px_rgba(34,211,238,0.35)]' : 'border-slate-800 bg-slate-900/60'}`}>
      {highlighted && (
        <div className="absolute -top-3 right-4 text-[11px] px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-semibold">Best Value</div>
      )}
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <div className="mt-1 text-3xl font-extrabold text-cyan-300">{price}</div>
      <ul className="mt-4 space-y-2 text-slate-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold transition-colors ${highlighted ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'border border-slate-700 text-white hover:border-slate-600'}`}>{cta}</a>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_0%,rgba(234,179,8,0.10),transparent)]" />
      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Moshi Tech Packages</h2>
          <p className="mt-3 text-slate-400">Choose a plan that fits your goals and budget.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingCard
            title="₱3,000 Promo Package"
            price="₱3,000"
            features={[
              'Free domain for 1 month',
              '1-page website',
              'Mobile-responsive',
              'Basic SEO (Google visibility)',
              'Fast setup',
            ]}
            cta="Start Now"
          />
          <PricingCard
            highlighted
            title="₱4,999 Elite Package"
            price="₱4,999"
            features={[
              '1–3 pages',
              'Mobile-responsive',
              'Modern layout & clean branding',
              'SEO optimized',
              'Contact forms + social integration',
              '7-day after-support',
            ]}
            cta="Get This Package"
          />
          <PricingCard
            title="₱7,999 Premium Package"
            price="₱7,999"
            features={[
              'Up to 6 pages',
              'Custom graphics & banners',
              'Advanced SEO',
              'Chat support integration',
              'Analytics setup',
              '30-day priority support',
            ]}
            cta="Go Premium"
          />
        </div>

        <p className="mt-6 text-center text-slate-400 text-sm">Perfect for local businesses, clinics, real estate, online sellers, and freelancers.</p>
      </div>
    </section>
  );
}

export default Pricing;
