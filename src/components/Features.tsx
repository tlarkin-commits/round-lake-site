"use client";

import { PropertyConfig } from "@/config/properties";

export default function Features({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why People Choose {property.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable, peaceful, and connected to everything San Diego County has to offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {property.features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
