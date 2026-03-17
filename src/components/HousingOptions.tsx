"use client";

import { PropertyConfig } from "@/config/properties";

interface HousingOptionsProps {
  property?: PropertyConfig;
  onApplyClick?: () => void;
}

export default function HousingOptions({ property, onApplyClick }: HousingOptionsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Find Your Place at Round Lake
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Manufactured home lots and RV sites on 150 peaceful Oregon acres
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Manufactured Home Lots */}
          <div className="rounded-xl p-8 bg-stone-900 text-white">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
              Most Popular
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3">Manufactured Home Lots</h3>
            <p className="mb-6 text-stone-300">
              Make Round Lake your permanent home. Spacious, tree-lined lots in a quiet country community.
            </p>
            <ul className="space-y-2 mb-8">
              {["Long-term lease available", "Water & sewer included", "Golf course access"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onApplyClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-amber-500 hover:bg-amber-400 text-stone-900"
              type="button"
            >
              Apply Now
            </button>
          </div>

          {/* RV Sites */}
          <div className="rounded-xl p-8 bg-stone-50 text-stone-900">
            <h3 className="text-xl font-bold mt-2 mb-3">RV Sites</h3>
            <p className="mb-6 text-stone-600">
              Full hookup RV sites available for short and long-term stays in a beautiful country setting.
            </p>
            <ul className="space-y-2 mb-8">
              {["30/50 amp electric", "Water & sewer hookup", "Short & long-term"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-amber-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/availability"
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
            >
              View Availability
            </a>
          </div>

          {/* Community Life */}
          <div className="rounded-xl p-8 bg-stone-50 text-stone-900">
            <h3 className="text-xl font-bold mt-2 mb-3">Community Life</h3>
            <p className="mb-6 text-stone-600">
              150 acres of nature, golf, fishing, and a welcoming neighborhood just 15 min from Klamath Falls.
            </p>
            <ul className="space-y-2 mb-8">
              {["9-hole executive golf", "Fishing pond on-site", "Hiking & biking trails"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-amber-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#features"
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
