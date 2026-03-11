"use client";

import { PropertyConfig } from "@/config/properties";

export default function Community({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Stack */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/community-1.jpg" 
                alt="Rancho Corrido community" 
                className="w-full h-[500px] object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
            </div>
            
            {/* Accent frame - rustic touch */}
            <div className="absolute -inset-4 border-2 border-amber-400/20 rounded-3xl -z-10" />
            
            {/* Secondary image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img 
                src="/images/community-2.jpg" 
                alt="RV spaces" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats card - warm style */}
            <div className="absolute -left-4 top-1/4 bg-stone-900 text-white rounded-xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-amber-400">40+</div>
              <div className="text-sm text-stone-300">Years of<br/>Community</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
              {property.community.headline}
            </h2>
            
            <p className="text-lg text-stone-600 mb-10 leading-relaxed font-light">
              {property.community.description}
            </p>
            
            {/* Highlights - clean list with warm accents */}
            <div className="space-y-4 mb-10">
              {property.community.highlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-stone-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Review callout - warm card */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-stone-900">9.9 out of 10</div>
                  <div className="text-sm text-stone-600">Based on RV LIFE reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
