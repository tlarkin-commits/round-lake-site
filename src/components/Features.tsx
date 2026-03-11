"use client";

import { PropertyConfig } from "@/config/properties";

const features = [
  { title: "Full Hookups", desc: "30/50 amp electric, water, sewer at every space" },
  { title: "Pool & Laundry", desc: "Swimming pool, on-site laundry facilities" },
  { title: "Pet Friendly", desc: "Your pets are welcome here" },
  { title: "Free WiFi", desc: "Stay connected throughout the park" },
  { title: "Mountain Views", desc: "Scenic rolling hills and open skies" },
  { title: "Quiet Community", desc: "Peaceful, family-friendly environment" },
];

export default function Features({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            What we offer
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Everything you need for comfortable living
          </p>
        </div>

        {/* Simple grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
