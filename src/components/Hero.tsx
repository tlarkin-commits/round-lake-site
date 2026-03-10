"use client";

import { PropertyConfig } from "@/config/properties";
import Link from "next/link";

export default function Hero({ property }: { property: PropertyConfig }) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${property.hero.image})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${property.colors.hero}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-amber-300 font-medium text-lg mb-4 tracking-wide">
            {property.tagline}
          </p>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {property.hero.headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            {property.hero.subheadline}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-10">
            {property.hero.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dual Path CTAs */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {/* Permanent */}
            <Link 
              href={property.paths.permanent.link}
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-bold text-gray-900">{property.paths.permanent.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{property.paths.permanent.subtitle}</p>
              <span 
                className="inline-flex items-center font-semibold text-sm group-hover:gap-2 transition-all"
                style={{ color: property.colors.primary }}
              >
                {property.paths.permanent.cta}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Temporary */}
            <Link 
              href={property.paths.temporary.link}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⏱️</span>
                <h3 className="text-xl font-bold text-white">{property.paths.temporary.title}</h3>
              </div>
              <p className="text-gray-200 text-sm mb-4">{property.paths.temporary.subtitle}</p>
              <span className="inline-flex items-center font-semibold text-sm text-amber-300 group-hover:gap-2 transition-all">
                {property.paths.temporary.cta}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
