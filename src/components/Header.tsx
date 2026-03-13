"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  onLocationClick?: () => void;
}

export default function Header({ onLocationClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/rancho-corrido/logo-transparent.svg" 
            alt="Rancho Corrido" 
            className="h-28 md:h-36 w-auto"
          />
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-stone-600 hover:text-amber-700 transition-colors">Gallery</a>
          <a href="#amenities" className="text-stone-600 hover:text-amber-700 transition-colors">Amenities</a>
          <button 
            onClick={onLocationClick}
            className="text-stone-600 hover:text-amber-700 transition-colors"
          >
            Location
          </button>
          <a 
            href="tel:+17607423933" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg transition-colors font-medium"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-4">
          <a href="#gallery" className="block text-stone-600 hover:text-amber-700">Gallery</a>
          <a href="#amenities" className="block text-stone-600 hover:text-amber-700">Amenities</a>
          <button 
            onClick={() => {
              onLocationClick?.();
              setMenuOpen(false);
            }}
            className="block text-stone-600 hover:text-amber-700 text-left"
          >
            Location
          </button>
          <a 
            href="tel:+17607423933" 
            className="block bg-amber-600 text-white text-center px-5 py-2 rounded-lg font-medium"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}