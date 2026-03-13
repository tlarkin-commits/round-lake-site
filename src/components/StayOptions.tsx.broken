"use client";

interface StayOptionsProps {
  onApplyClick?: () => void;
  onHomesClick?: () => void; 
  onTemporaryClick?: () => void;
}

const options = [
  {
    title: "Permanent RV Living",
    description: "Make Rancho Corrido your home. Monthly rates for families, workers, and retirees.",
    features: ["Full hookups", "Month-to-month available", "Community atmosphere"],
    cta: "Apply Now",
    action: "apply",
    featured: true,
  },
  {
    title: "Mobile Homes",
    description: "Park model homes available for rent. Move-in ready with kitchen and utilities.",
    features: ["1 bed / 1 bath", "Fully equipped", "Utilities included"],
    cta: "View Availability",
    action: "homes",
    featured: false,
  },
  {
    title: "Temporary Stays",
    description: "Up to 90 days. Perfect for travel nurses, contractors, and seasonal workers.",
    features: ["Nightly & weekly rates", "Full hookups", "All amenities"],
    cta: "Check Availability",
    action: "temporary",
    featured: false,
  },
];

export default function StayOptions({ onApplyClick, onHomesClick, onTemporaryClick }: StayOptionsProps) {
  const handleClick = (action: string) => {
    switch (action) {
      case 'apply':
        onApplyClick?.();
        break;
      case 'homes':
        onHomesClick?.();
        break;
      case 'temporary':
        onTemporaryClick?.();
        break;
    }
  };

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
          {options.map((option, idx) => (
            <div 
              key={idx}
              className={`rounded-xl p-8 ${
                option.featured
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-50 text-stone-900'
              }`}
            >
              {option.featured && (
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-xl font-bold mt-2 mb-3">
                {option.title}
              </h3>
              
              <p className={`mb-6 ${option.featured ? 'text-stone-300' : 'text-stone-600'}`}>
                {option.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {option.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm">
                    <svg className={`w-4 h-4 ${option.featured ? 'text-amber-400' : 'text-amber-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(option.action)}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  option.featured
                    ? 'bg-amber-500 hover:bg-amber-400 text-stone-900'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                {option.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}