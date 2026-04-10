"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-mint font-black text-sm leading-none">I</span>
          </div>
          <span className="text-navy font-bold text-lg tracking-tight">Invoy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about-us"
            className="text-sm text-gray-text hover:text-navy transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-sm text-gray-text hover:text-navy transition-colors font-medium"
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-purple text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-purple/90 transition-colors"
          >
            Get early access
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <Link
            href="/about-us"
            className="text-sm text-gray-text font-medium py-2"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-sm text-gray-text font-medium py-2"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-purple text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Get early access
          </Link>
        </div>
      )}
    </header>
  );
}
