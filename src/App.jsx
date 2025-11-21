import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500" />
            <span className="text-white font-semibold">Moshi Tech</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#pricing" className="hover:text-white">Packages</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#testimonials" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 text-sm">Get a Free Quote</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Benefits />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
