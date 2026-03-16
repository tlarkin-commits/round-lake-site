"use client";

import { useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent('conversion', { send_to: 'contact_confirmed' });
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="bg-amber-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          We&apos;ll be in touch soon!
        </h1>

        <p className="text-stone-600 text-lg mb-2">
          Thank you for reaching out to Rancho Corrido Park. Our property manager will contact you within 24 hours.
        </p>

        <p className="text-stone-500 mb-10">
          Need to reach us sooner? Call{" "}
          <a href="tel:+17607423755" className="text-amber-600 hover:text-amber-700 font-medium">
            (760) 742-3755
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <a
            href="tel:+17607423755"
            className="px-6 py-3 border border-stone-300 hover:border-stone-400 text-stone-700 font-medium rounded-lg transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </main>
  );
}
