function Testimonials() {
  const items = [
    {
      quote:
        'They delivered a beautiful website fast. Communication was clear and the process was smooth from start to finish.',
      name: 'Ava M.',
      role: 'Clinic Owner',
    },
    {
      quote:
        'Our site looks professional and loads quickly. We started getting more inquiries within days.',
      name: 'Leo R.',
      role: 'Real Estate Broker',
    },
    {
      quote:
        'Great value for money. Honest pricing and excellent support throughout the project.',
      name: 'Mira S.',
      role: 'Local Brand Owner',
    },
    {
      quote:
        'Highly recommend! They understood our needs and turned them into a clean, modern website.',
      name: 'Jon D.',
      role: 'Startup Founder',
    },
  ];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-3 text-slate-400">We deliver quality, communication, and results.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <p className="text-slate-300">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
