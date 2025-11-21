import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // Demo only: no backend endpoint yet; simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! We will reach out shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_500px_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Build Your Website?</h2>
            <p className="mt-3 text-slate-300">Let’s create a website that helps your business grow.</p>

            <ul className="mt-6 space-y-2 text-slate-400">
              <li>• Fast response time</li>
              <li>• No hidden fees</li>
              <li>• Friendly and professional communication</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm mb-1">Name</label>
                <input name="name" required className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="name@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-slate-300 text-sm mb-1">Business Type</label>
              <input name="business" className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="e.g., clinic, real estate, online shop" />
            </div>
            <div className="mt-4">
              <label className="block text-slate-300 text-sm mb-1">Message / Project Details</label>
              <textarea name="message" rows={5} className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your project..." />
            </div>
            <button className="mt-5 inline-flex items-center justify-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-3 w-full sm:w-auto">Send Message</button>
            {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
