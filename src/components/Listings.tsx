"use client";

import { PropertyConfig } from "@/config/properties";

export default function Listings({ property }: { property: PropertyConfig }) {
  return (
    <section id="listings" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Available Units
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We have manufactured home lots and RV sites available. Browse current listings and apply online through AppFolio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm text-center">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Manufactured Home Lots</h3>
            <p className="text-stone-600 text-sm mb-6">Spacious, tree-lined lots in a peaceful 150-acre community. Long-term lease options available.</p>
            <a
              href="https://coastmanufactured.appfolio.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-colors text-sm"
              style={{ backgroundColor: property.colors.primary }}
            >
              View Available Lots
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm text-center">
            <div className="text-4xl mb-4">🚐</div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">RV Sites</h3>
            <p className="text-stone-600 text-sm mb-6">Full hookup RV sites with electricity, water, and sewer. Short and long-term stays welcome.</p>
            <a
              href="https://coastmanufactured.appfolio.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-colors text-sm"
              style={{ backgroundColor: property.colors.primary }}
            >
              View RV Sites
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Questions? Chat With Us</h3>
            <p className="text-stone-600 text-sm mb-6">Our AI leasing assistant can answer questions about availability, pricing, and the application process.</p>
            <button
              onClick={() => {
                const chatBtn = document.querySelector<HTMLElement>('[class*="chat"]');
                if (chatBtn) chatBtn.click();
                else window.open('https://roundlake.coastmhp.com', '_blank');
              }}
              className="inline-block px-6 py-3 border-2 font-semibold rounded-lg transition-colors text-sm"
              style={{ borderColor: property.colors.primary, color: property.colors.primary }}
            >
              Chat With Leasing
            </button>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://coastmanufactured.appfolio.com/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm underline"
          >
            View all listings on AppFolio →
          </a>
        </div>
      </div>
    </section>
  );
}
