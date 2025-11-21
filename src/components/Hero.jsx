import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(34,211,238,0.20),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(234,179,8,0.12),transparent)]" />

      <div className="relative container mx-auto px-6 sm:px-8 pt-24 pb-16 lg:pt-28 lg:pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 text-xs mb-5">
            Moshi Tech • Modern Web Design
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Professional Websites That Build Trust and Bring You Leads.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
            Moshi Tech creates fast, mobile-ready, and Google-optimized websites designed to help your business grow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 transition-colors shadow-lg shadow-cyan-500/20">
              Get a Free Quote
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-600 text-white px-6 py-3 transition-colors">
              View Packages
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=64" alt="client" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://i.pravatar.cc/40?img=32" alt="client" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://i.pravatar.cc/40?img=12" alt="client" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
            </div>
            <p>Trusted by local brands and growing businesses</p>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[580px]">
          <div className="absolute inset-0 rounded-3xl border border-slate-700/60 bg-slate-800/20 backdrop-blur-sm" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
            <img src="/mock-laptop.png" alt="Laptop Mockup" className="w-full rounded-lg" />
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
            <img src="/mock-mobile.png" alt="Mobile Mockup" className="w-full rounded-lg" />
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 hidden md:block">
            <img src="/mock-laptop.png" alt="Laptop Mockup" className="w-full rounded-lg" />
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 hidden md:block">
            <img src="/mock-mobile.png" alt="Mobile Mockup" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
