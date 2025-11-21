import { Smartphone, Search, Timer, Wallet } from 'lucide-react';

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:bg-slate-900 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_0%,rgba(34,211,238,0.10),transparent)]" />
      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Moshi Tech</h2>
          <p className="mt-3 text-slate-400">
            We help small businesses, startups, and local brands build a strong online presence with professional websites that attract customers and build credibility.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard icon={Smartphone} title="Mobile-Responsive Design" description="Looks great on phones, tablets, and desktops." />
          <BenefitCard icon={Search} title="SEO Optimized" description="Set up to help customers find you on Google." />
          <BenefitCard icon={Timer} title="Fast Turnaround" description="From concept to live in as little as 2–7 days." />
          <BenefitCard icon={Wallet} title="Affordable & Transparent" description="Clear pricing with no surprises." />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
