"use client";

import { PropertyConfig } from "@/config/properties";

export default function Location({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Best of Both Worlds
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Country peace and quiet, with city conveniences just minutes away
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {property.location.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-200">{item.place}</span>
                <span 
                  className="font-bold text-lg px-3 py-1 rounded-full"
                  style={{ backgroundColor: property.colors.accent, color: '#1f2937' }}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-800 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 mb-4">📍 {property.address}, {property.city}, {property.state} {property.zip}</p>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(`${property.address}, ${property.city}, ${property.state} ${property.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Open in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
