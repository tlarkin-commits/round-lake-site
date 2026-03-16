"use client";

import { useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent('conversion', { event_category: 'lead', event_label: 'contact_form' });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Thank you!</h1>
        <p className="text-stone-600 mb-6 leading-relaxed">
          We received your message and will be in touch soon. In the meantime, feel free to call us directly at{" "}
          <a href="tel:+15418842520" className="text-[#1B4D3E] font-semibold hover:underline">(541) 884-2520</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-[#1B4D3E] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#133829] transition-colors">
            Back to Round Lake Community
          </Link>
          <a href="tel:+15418842520" className="border-2 border-[#1B4D3E] text-[#1B4D3E] font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
            Call (541) 884-2520
          </a>
        </div>
      </div>
    </div>
  );
}
