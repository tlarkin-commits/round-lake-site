"use client";

import { PropertyConfig } from "@/config/properties";
import Link from "next/link";

export default function Hero({ property }: { property: PropertyConfig }) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Full-bleed background photo - Overlook shot */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero.jpg)` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          {/* Simple tagline */}
          <p className="text-amber-400 font-medium mb-4 tracking-wide">
            San Diego County
          </p>
          
          {/* Clean headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Country living,<br />
            close to everything.
          </h1>
          
          {/* Straightforward description */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Affordable RV and mobile home community in Pauma Valley. 
            Near Temecula wine country and local casinos.
          </p>

          {/* Clean stats */}
          <div className="flex gap-8 mb-10 text-white">
            <div>
              <div className="text-3xl font-bold">30 min</div>
              <div className="text-sm text-gray-300">to the beach</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20 min</div>
              <div className="text-sm text-gray-300">to wine country</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5 min</div>
              <div className="text-sm text-gray-300">to casinos</div>
            </div>
          </div>

          {/* Two clear CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/apply"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg text-center transition-colors"
            >
              Apply for Residency
            </Link>
            <Link 
              href="/temporary"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-center border border-white/30 transition-colors"
            >
              Temporary Stays
            </Link>
          </div>
        </div>
      </div>

      {/* Simple scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
