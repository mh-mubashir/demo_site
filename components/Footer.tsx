import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-mint font-black text-sm leading-none">I</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Invoy</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The AI payment guardian for individual contributors.
              Automate invoices. Guarantee revenue.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/about-us" className="text-white/50 text-sm hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact-us" className="text-white/50 text-sm hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/contact-us" className="text-white/50 text-sm hover:text-white transition-colors">
                Get Early Access
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:team@dissolveit.ai"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                team@dissolveit.ai
              </a>
              <span className="text-white/50 text-sm">Boston, MA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Dissolve IT. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built for freelancers who deserve to be paid.
          </p>
        </div>
      </div>
    </footer>
  );
}
