"use client";

import { PropertyConfig } from "@/config/properties";
import { LandingPageConfig } from "@/config/landingConfigs";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

// Best testimonial for trust badge
const TRUST_QUOTE = {
  text: "We're snowbirds and this is our 3rd year coming back. The community is wonderful and management really cares.",
  author: "Robert T."
};

export default function LandingTemplate({ 
  config, 
  property,
  minimal = false,
}: { 
  config: LandingPageConfig; 
  property: PropertyConfig;
  minimal?: boolean;
}) {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {/* Nav */}
      {minimal ? (
        <header className="sticky top-0 bg-white border-b border-stone-200 z-40 px-6 py-3 flex items-center justify-between">
          <img
            src="/images/rancho-corrido/logo-transparent.svg"
            alt="Round Lake Community"
            className="h-12 w-auto"
          />
          <a
            href={`tel:${property.phone}`}
            onClick={() => trackEvent('phone_call', { source: 'landing_minimal_nav' })}
            className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {property.phone}
          </a>
        </header>
      ) : null}

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-6xl mb-4 block">{config.icon}</span>
            <p className="text-green-300 font-medium mb-2">Housing for {config.demographic}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {config.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={config.ctaPrimary.link}
                className="px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {config.ctaPrimary.text}
              </Link>
              <a
                href={`tel:${property.phone}`}
                onClick={() => trackEvent('phone_call', { source: 'landing_hero' })}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Call {property.phone}
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-lg">
              <p className="text-white/90 italic text-sm">&ldquo;{TRUST_QUOTE.text}&rdquo;</p>
              <p className="text-green-300 text-sm font-medium mt-2">— {TRUST_QUOTE.author}, Current Resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why {config.demographic} Choose Round Lake
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {config.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: property.colors.primary }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {property.location.highlights.slice(0, 4).map((loc, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-700">{loc.time}</div>
                <div className="text-gray-600">{loc.place}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Move?</h2>
          <p className="text-xl text-green-100 mb-8">
            Spaces fill up fast. Get in touch today to check availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={config.ctaPrimary.link}
              className="px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {config.ctaPrimary.text}
            </Link>
            <a
              href={`tel:${property.phone}`}
              onClick={() => trackEvent('phone_call', { source: 'landing_cta' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {property.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-4 py-3 flex gap-3 z-40 shadow-lg">
        <a
          href={`tel:${property.phone}`}
          onClick={() => trackEvent('phone_call', { source: 'landing_sticky_mobile' })}
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold py-3 rounded-lg text-center transition-colors"
        >
          Call Now
        </a>
        <Link
          href={config.ctaPrimary.link}
          className="flex-1 bg-green-700 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center transition-colors"
        >
          Apply
        </Link>
      </div>
    </main>
  );
}
