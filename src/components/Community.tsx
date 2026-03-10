"use client";

import { PropertyConfig } from "@/config/properties";

export default function Community({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden">
                <img 
                  src="/images/community-1.jpg" 
                  alt="Community pool" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/22c55e/fff?text=Pool'; }}
                />
              </div>
              <div className="bg-gray-200 rounded-2xl aspect-video overflow-hidden">
                <img 
                  src="/images/community-2.jpg" 
                  alt="Mountain views" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x225/22c55e/fff?text=Views'; }}
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-200 rounded-2xl aspect-video overflow-hidden">
                <img 
                  src="/images/community-3.jpg" 
                  alt="RV spaces" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x225/22c55e/fff?text=Spaces'; }}
                />
              </div>
              <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden">
                <img 
                  src="/images/community-4.jpg" 
                  alt="Families" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/22c55e/fff?text=Community'; }}
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {property.community.headline}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {property.community.description}
            </p>
            
            {/* Highlights */}
            <ul className="space-y-4">
              {property.community.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: property.colors.primary }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Review Badge */}
            <div className="mt-10 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex -space-x-1">
                <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-sm">⭐</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">9.9/10 on RV LIFE</div>
                <div className="text-sm text-gray-500">Based on camper reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
