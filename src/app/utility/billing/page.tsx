import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing | Round Lake Water and Sewer District",
  description: "Round Lake Water and Sewer District billing information — rates, payment methods, due dates, and how to contact us about your account.",
};

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-[#1B4D3E] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/utility" className="text-white hover:text-green-200 transition-colors">
            ← Utility Customer Portal
          </Link>
          <div className="text-sm text-green-200">(541) 884-2520</div>
        </div>
      </header>

      <section className="bg-[#1B4D3E] text-white pb-12 pt-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-300 font-medium mb-2 text-sm tracking-wide uppercase">Billing</div>
          <h1 className="text-3xl md:text-4xl font-bold">Water & Sewer Billing</h1>
          <p className="mt-3 text-green-100">Payment options, current rates, and account information for Round Lake Water and Sewer District customers.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* Pay Your Bill */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">💳 Pay Your Bill</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">By Phone</h3>
              <p className="text-stone-600 text-sm mb-2">Call our office during business hours to pay by credit card or check.</p>
              <a href="tel:+15418842520" className="text-[#1B4D3E] font-semibold hover:underline">(541) 884-2520</a>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">By Mail</h3>
              <p className="text-stone-600 text-sm">Make checks payable to <strong>Round Lake Water and Sewer District</strong> and mail to:</p>
              <address className="mt-2 not-italic text-sm text-stone-700">
                4000 Round Lake Rd<br />
                Klamath Falls, OR 97601
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">In Person</h3>
              <p className="text-stone-600 text-sm">Visit the office at 4000 Round Lake Rd during office hours.</p>
              <p className="text-sm text-stone-500 mt-1">Mon–Fri, 9:00 AM – 5:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">By Email</h3>
              <p className="text-stone-600 text-sm">Contact us for billing questions or to set up automatic payments.</p>
              <a href="mailto:office@roundlakecommunity.com" className="text-[#1B4D3E] font-semibold hover:underline text-sm">office@roundlakecommunity.com</a>
            </div>
          </div>
        </div>

        {/* Rates */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">📊 Current Rates</h2>
          <p className="text-stone-500 text-sm mb-6">Water and sewer rates effective for the current billing period. Contact us for the most up-to-date rate schedule.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-3">Water Service</h3>
              <table className="w-full text-sm">
                <tbody className="space-y-2">
                  <tr className="border-b border-stone-200">
                    <td className="py-2 text-stone-600">Base Rate (up to 2,000 gal/mo)</td>
                    <td className="py-2 text-right font-medium text-stone-800">Contact Office</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="py-2 text-stone-600">Additional Usage (per 1,000 gal)</td>
                    <td className="py-2 text-right font-medium text-stone-800">Contact Office</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-stone-50 rounded-xl p-5">
              <h3 className="font-bold text-stone-800 mb-3">Sewer Service</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-stone-200">
                    <td className="py-2 text-stone-600">Monthly Flat Rate</td>
                    <td className="py-2 text-right font-medium text-stone-800">Contact Office</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-stone-400">Rates are subject to change. For current rate information, please contact the office at (541) 884-2520.</p>
        </div>

        {/* Billing Cycle */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">📅 Billing Schedule</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { step: "1", title: "Meter Read", desc: "Meters are read monthly" },
              { step: "2", title: "Bill Issued", desc: "Bills mailed by the 1st of each month" },
              { step: "3", title: "Due Date", desc: "Payment due by the 25th of each month" },
            ].map((item) => (
              <div key={item.step} className="bg-green-50 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">{item.step}</div>
                <div className="font-semibold text-stone-800 mb-1">{item.title}</div>
                <div className="text-sm text-stone-500">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-stone-500 text-center">Late payments may be subject to a fee. Please contact us if you need assistance with your account.</p>
        </div>

        {/* Contact */}
        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Billing Questions?</h2>
          <p className="text-green-100 mb-4">Our office is here to help with account questions, payment arrangements, or billing disputes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+15418842520" className="bg-white text-[#1B4D3E] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
              📞 (541) 884-2520
            </a>
            <a href="mailto:office@roundlakecommunity.com" className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
              ✉ Email Us
            </a>
          </div>
        </div>
      </div>

      <footer className="max-w-4xl mx-auto px-6 pb-12 text-center text-sm text-stone-400">
        <Link href="/utility" className="hover:text-stone-600">← Back to Utility Portal</Link>
        {" · "}
        <Link href="/" className="hover:text-stone-600">Round Lake Community</Link>
      </footer>
    </div>
  );
}
