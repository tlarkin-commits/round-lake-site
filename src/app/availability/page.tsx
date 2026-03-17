export const metadata = {
  title: "Available Units | Round Lake Community",
  description: "Browse available manufactured home lots and RV sites at Round Lake Community in Klamath Falls, OR.",
};

export default function AvailabilityPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Top bar */}
      <div className="bg-stone-800 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Available Units</h1>
          <p className="text-stone-400 text-sm">Round Lake Community · Klamath Falls, OR</p>
        </div>
        <a
          href="/"
          className="text-stone-300 hover:text-white text-sm transition-colors"
        >
          ← Back to Site
        </a>
      </div>

      {/* AppFolio Listings Embed — full viewport height */}
      <div className="flex-1 relative" style={{minHeight: "calc(100vh - 72px)"}}>
        <iframe
          src="https://www.roundlakecommunity.com/availability"
          title="Available Units at Round Lake Community"
          className="w-full border-0 absolute inset-0"
          style={{height: "calc(100vh - 72px)", minHeight: "600px"}}
          allow="fullscreen"
        />
        {/* Fallback card shown if iframe is blocked */}
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 -z-10">
          <div className="text-center px-6">
            <div className="text-5xl mb-4">🏡</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">View Available Units</h2>
            <p className="text-stone-600 mb-6 max-w-md">
              Browse our current available manufactured home lots and RV sites on our listings portal.
            </p>
            <a
              href="https://coastmanufactured.appfolio.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-700 transition-colors"
            >
              View Listings →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
