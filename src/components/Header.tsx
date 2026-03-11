"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - SVG version, larger */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/rancho-corrido/logo.svg" 
              alt="Rancho Corrido" 
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Amenities
            </Link>
            <Link href="/#gallery" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Photos
            </Link>
            <Link href="/#options" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Ways to Stay
            </Link>
            <Link href="/#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link 
              href="/apply" 
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg transition-colors text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/#features" className="text-white/80 hover:text-white">Amenities</Link>
              <Link href="/#gallery" className="text-white/80 hover:text-white">Photos</Link>
              <Link href="/#options" className="text-white/80 hover:text-white">Ways to Stay</Link>
              <Link href="/#contact" className="text-white/80 hover:text-white">Contact</Link>
              <Link 
                href="/apply" 
                className="px-5 py-2 bg-amber-500 text-stone-900 font-semibold rounded-lg text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
