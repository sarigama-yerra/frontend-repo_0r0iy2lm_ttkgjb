function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500" />
            <span className="text-white font-semibold text-lg">Moshi Tech</span>
          </div>
          <p className="mt-3 text-slate-400">Professional Websites for Growing Businesses</p>
          <p className="mt-2 text-slate-500 text-sm">© {new Date().getFullYear()} Moshi Tech. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <ul className="text-slate-400 text-sm space-y-1">
            <li>Email: hello@moshitech.co</li>
            <li>Phone: +63 900 000 0000</li>
            <li>Manila, Philippines</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Follow</h4>
          <div className="flex gap-3 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
