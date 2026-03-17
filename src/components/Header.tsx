"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { PropertyConfig } from "@/config/properties";

interface HeaderProps {
  property: PropertyConfig;
  onApplyClick?: () => void;
  onLocationClick?: () => void;
}

export default function Header({ property, onApplyClick, onLocationClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneHref = `tel:+1${property.phone.replace(/\D/g, '')}`;

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/round-lake/logo.jpg"
            alt="Round Lake Community"
            width={170}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Gallery</a>
          <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Amenities</a>
          <a href="#listings" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Available Units</a>
          <a href="/utility" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">Utility</a>
          <button
            onClick={() => {
              document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
              onLocationClick?.();
            }}
            className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
          >
            Location
          </button>
          <a
            href={phoneHref}
            onClick={() => trackEvent('phone_call', { source: 'header' })}
            className="text-white px-5 py-2 rounded-lg transition-colors font-medium text-sm"
            style={{ backgroundColor: property.colors.primary }}
          >
            {property.phone}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
          <a href="#gallery" className="block text-stone-600 hover:text-stone-900 text-sm" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#features" className="block text-stone-600 hover:text-stone-900 text-sm" onClick={() => setMenuOpen(false)}>Amenities</a>
          <a href="#listings" className="block text-stone-600 hover:text-stone-900 text-sm" onClick={() => setMenuOpen(false)}>Available Units</a>
          <button
            onClick={() => {
              document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
              onLocationClick?.();
              setMenuOpen(false);
            }}
            className="block text-stone-600 hover:text-stone-900 text-left text-sm"
          >
            Location
          </button>
          <Link href="/utility" className="block text-stone-600 hover:text-stone-900 text-sm" onClick={() => setMenuOpen(false)}>
            Utility Customers
          </Link>
          <a
            href={phoneHref}
            onClick={() => trackEvent('phone_call', { source: 'header_mobile' })}
            className="block text-white text-center px-5 py-2 rounded-lg font-medium text-sm"
            style={{ backgroundColor: property.colors.primary }}
          >
            {property.phone}
          </a>
          <button
            onClick={() => { onApplyClick?.(); setMenuOpen(false); }}
            className="block w-full text-center border-2 px-5 py-2 rounded-lg font-medium text-sm"
            style={{ borderColor: property.colors.primary, color: property.colors.primary }}
          >
            Apply / Chat with Us
          </button>
        </div>
      )}
    </header>
  );
}
