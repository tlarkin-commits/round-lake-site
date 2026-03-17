"use client";

import { PropertyConfig } from "@/config/properties";

interface HousingOptionsProps {
  property?: PropertyConfig;
  onApplyClick?: () => void;
  onHomesClick?: () => void; 
  onTemporaryClick?: () => void;
}

export default function HousingOptions({ property, onApplyClick, onHomesClick, onTemporaryClick }: HousingOptionsProps) {
  console.log("HousingOptions component loaded with handlers:", { onApplyClick: !!onApplyClick, onHomesClick: !!onHomesClick, onTemporaryClick: !!onTemporaryClick });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Ways to stay
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            From permanent residency to short-term visits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Permanent RV Living */}
          <div className="rounded-xl p-8 bg-stone-900 text-white">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
              Most Popular
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3">Permanent RV Living</h3>
            <p className="mb-6 text-stone-300">
              Make Round Lake your home. Monthly rates for families, workers, and retirees.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-400">✓</span>
                Full hookups
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-400">✓</span>
                Month-to-month available
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-400">✓</span>
                Community atmosphere
              </li>
            </ul>
            <button
              onClick={onApplyClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-amber-500 hover:bg-amber-400 text-stone-900"
              type="button"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Homes */}
          <div className="rounded-xl p-8 bg-stone-50 text-stone-900">
            <h3 className="text-xl font-bold mt-2 mb-3">Mobile Homes</h3>
            <p className="mb-6 text-stone-600">
              Park model homes available for rent. Move-in ready with kitchen and utilities.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                1 bed / 1 bath
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                Fully equipped
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                Utilities included
              </li>
            </ul>
            <button
              onClick={onHomesClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
              type="button"
            >
              View Availability
            </button>
          </div>

          {/* Temporary Stays */}
          <div className="rounded-xl p-8 bg-stone-50 text-stone-900">
            <h3 className="text-xl font-bold mt-2 mb-3">Temporary Stays</h3>
            <p className="mb-6 text-stone-600">
              Up to 90 days. Perfect for travel nurses, contractors, and seasonal workers.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                Nightly & weekly rates
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                Full hookups
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-amber-500">✓</span>
                All amenities
              </li>
            </ul>
            <button
              onClick={onTemporaryClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
              type="button"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}