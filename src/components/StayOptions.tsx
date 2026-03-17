"use client";

interface StayOptionsProps {
  onApplyClick?: () => void;
  onHomesClick?: () => void;
  onTemporaryClick?: () => void;
}

export default function StayOptions({ onApplyClick, onHomesClick, onTemporaryClick }: StayOptionsProps) {
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
              Make Round Lake your permanent home. Spacious lots in a quiet, nature-surrounded community.
            </p>
            <ul className="space-y-2 mb-8">
              {["Long-term lease available", "Water & sewer included", "Golf course access"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
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
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onHomesClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
              type="button"
            >
              View Availability
            </button>
          </div>

          {/* Community Life */}
          <div className="rounded-xl p-8 bg-stone-50 text-stone-900">
            <h3 className="text-xl font-bold mt-2 mb-3">Community Life</h3>
            <p className="mb-6 text-stone-600">
              150 acres of nature, golf, fishing, and a welcoming neighborhood just 15 minutes from Klamath Falls.
            </p>
            <ul className="space-y-2 mb-8">
              {["9-hole executive golf", "Fishing pond on-site", "Hiking & biking trails"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onTemporaryClick}
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-stone-900 hover:bg-stone-800 text-white"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
