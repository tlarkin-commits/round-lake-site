"use client";

import Image from "next/image";
import { PropertyConfig } from "@/config/properties";
import { trackEvent } from "@/lib/gtag";

interface HeroProps {
  property: PropertyConfig;
  onApplyClick?: () => void;
  onLearnClick?: () => void;
}

export default function Hero({ property, onApplyClick, onLearnClick }: HeroProps) {
  const phoneHref = `tel:+1${property.phone.replace(/\D/g, '')}`;

  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src={property.hero.image}
        alt={`${property.name} — ${property.city}, ${property.state}`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <p className="font-medium mb-4 tracking-wide" style={{ color: property.colors.accent }}>
            {property.city}, {property.state}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {property.hero.headline}
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {property.hero.subheadline}
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10 text-white">
            {property.hero.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onApplyClick}
              className="px-8 py-4 text-white font-semibold rounded-lg text-center transition-colors"
              style={{ backgroundColor: property.colors.primary }}
            >
              Chat With Us / Apply
            </button>
            <a
              href={phoneHref}
              onClick={() => trackEvent('phone_call', { source: 'hero' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-center border border-white/30 transition-colors"
            >
              {property.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
