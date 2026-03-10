"use client";

import { PropertyConfig } from "@/config/properties";
import { LandingPageConfig } from "@/config/landingConfigs";
import Link from "next/link";

export default function LandingTemplate({ 
  config, 
  property 
}: { 
  config: LandingPageConfig; 
  property: PropertyConfig;
}) {
  return (
    <main className="min-h-screen">
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
              <Link
                href={config.ctaSecondary.link}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {config.ctaSecondary.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why {config.demographic} Choose Rancho Corrido
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
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {property.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
