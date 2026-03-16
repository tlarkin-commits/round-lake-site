"use client";

export default function Listings() {
  return (
    <section id="listings" className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Available Units
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our available lots and sites. We have options for manufactured homes, mobile homes, and RV sites.
          </p>
          <a
            href="https://coastmanufactured.appfolio.com/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-[#1B4D3E] text-white font-semibold rounded-lg hover:bg-[#133829] transition-colors"
          >
            View All Listings &amp; Apply
          </a>
        </div>

        {/* AppFolio embedded listings widget */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white">
          <iframe
            src="https://coastmanufactured.appfolio.com/listings/public/listings?locale=en-US&property_id=Round+Lake+MHP+%26+RV+Park"
            width="100%"
            height="600"
            frameBorder="0"
            title="Round Lake Community — Available Units"
            className="w-full"
            style={{ minHeight: '500px' }}
          />
        </div>

        <p className="text-center text-sm text-stone-500 mt-4">
          Listings powered by AppFolio. Questions? <button
            onClick={() => {
              const chatBtn = document.querySelector<HTMLButtonElement>('button[aria-label="Open chat"], .chat-launcher-btn, button.fixed.bottom-6.right-6');
              chatBtn?.click();
            }}
            className="text-[#1B4D3E] underline hover:text-[#133829]"
          >
            Chat with our leasing assistant
          </button>
        </p>
      </div>
    </section>
  );
}
