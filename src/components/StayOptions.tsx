"use client";

import { PropertyConfig } from "@/config/properties";
import Link from "next/link";

export default function StayOptions({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Options
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you are looking for a permanent home or a temporary stay, we have got a space for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {property.stayOptions.map((option, idx) => (
            <div 
              key={option.id}
              className={`relative rounded-2xl p-8 transition-all hover:shadow-xl ${
                idx === 0 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200' 
                  : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {option.badge && (
                <span 
                  className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full text-white"
                  style={{ backgroundColor: property.colors.accent }}
                >
                  {option.badge}
                </span>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2 text-gray-700">
                    <svg 
                      className="w-5 h-5 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: property.colors.primary }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={option.ctaLink}
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors ${
                  idx === 0
                    ? 'text-white hover:opacity-90'
                    : 'text-gray-900 bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
                style={idx === 0 ? { backgroundColor: property.colors.primary } : {}}
              >
                {option.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
