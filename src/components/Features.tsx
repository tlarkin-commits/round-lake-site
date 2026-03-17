"use client";

import { PropertyConfig } from "@/config/properties";

export default function Features({ property }: { property: PropertyConfig }) {
  const features = property.features ?? [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Life at {property.name}
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Everything you need for comfortable country living
          </p>
        </div>

        {/* Simple grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border-l-2 border-amber-400 pl-6">
              {feature.icon && (
                <span className="text-2xl mb-3 block">{feature.icon}</span>
              )}
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
