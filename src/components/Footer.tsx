"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <img 
              src="/images/logo-gold.png" 
              alt="Rancho Corrido" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-sm text-stone-600">
            <Link href="/#features" className="hover:text-stone-900">Amenities</Link>
            <Link href="/#gallery" className="hover:text-stone-900">Photos</Link>
            <Link href="/#options" className="hover:text-stone-900">Ways to Stay</Link>
            <Link href="/#contact" className="hover:text-stone-900">Contact</Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-stone-600 text-center md:text-right">
            <div>14715 Highway 76, Pauma Valley, CA 92061</div>
            <div>(760) 742-3755</div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Rancho Corrido. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
