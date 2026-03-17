import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance & Service Requests | Round Lake Water and Sewer District",
  description: "Report water or sewer issues, request maintenance, or report an emergency for Round Lake Water and Sewer District.",
};

export default function MaintenancePage() {
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
          <div className="text-green-300 font-medium mb-2 text-sm tracking-wide uppercase">Maintenance</div>
          <h1 className="text-3xl md:text-4xl font-bold">Maintenance & Service Requests</h1>
          <p className="mt-3 text-green-100">Report water or sewer issues, request service, or reach us for after-hours emergencies.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* Emergency Banner */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-4xl">🚨</div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-red-800 mb-1">Water/Sewer Emergency</h2>
              <p className="text-red-700 text-sm">For emergencies such as water main breaks, sewage backups, sudden loss of service, or flooding — call immediately, any time of day.</p>
            </div>
            <a href="tel:+15418842520" className="flex-shrink-0 bg-red-600 text-white font-bold px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-lg">
              📞 (541) 884-2520
            </a>
          </div>
        </div>

        {/* What to Report */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🔧 Common Issues We Handle</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "💧", title: "Water Main Break", desc: "Visible water gushing from the street or ground" },
              { icon: "🚿", title: "Low Water Pressure", desc: "Sudden or ongoing loss of water pressure at your home" },
              { icon: "🚫", title: "No Water Service", desc: "Complete loss of water to your property" },
              { icon: "🪣", title: "Sewage Backup", desc: "Sewage backing up into drains, toilets, or onto property" },
              { icon: "🌊", title: "Flooding / Overflow", desc: "Overflowing manholes or standing sewage water" },
              { icon: "☣️", title: "Water Quality Concern", desc: "Unusual color, smell, or taste in your tap water" },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 bg-stone-50 rounded-xl">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{item.title}</div>
                  <div className="text-stone-500 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Report */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">📢 How to Report an Issue</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
              <div>
                <div className="font-semibold text-stone-800">Call our office</div>
                <p className="text-stone-600 text-sm mt-0.5">The fastest way to get help is to call <a href="tel:+15418842520" className="text-[#1B4D3E] hover:underline font-semibold">(541) 884-2520</a>. For emergencies, call any time — day or night.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
              <div>
                <div className="font-semibold text-stone-800">Describe the issue</div>
                <p className="text-stone-600 text-sm mt-0.5">Be ready to share: your address, a description of the problem, when it started, and any photos if applicable.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">3</div>
              <div>
                <div className="font-semibold text-stone-800">We'll dispatch a crew</div>
                <p className="text-stone-600 text-sm mt-0.5">For emergencies we respond as quickly as possible. Non-emergency maintenance requests are scheduled during normal business hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Emergency Requests */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">📋 Non-Emergency Requests</h2>
          <p className="text-stone-600 mb-4 text-sm">For routine service requests — such as meter reads, turn-ons/turn-offs, or questions about your service — you can contact us by phone or email during business hours.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+15418842520" className="flex items-center justify-center gap-2 bg-[#1B4D3E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#133829] transition-colors">
              📞 Call (541) 884-2520
            </a>
            <a href="mailto:maintenance@roundlakecommunity.com?subject=Maintenance Request" className="flex items-center justify-center gap-2 border border-[#1B4D3E] text-[#1B4D3E] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
              ✉ Email a Request
            </a>
          </div>
          <p className="text-stone-400 text-xs mt-3">Mon–Fri, 9:00 AM – 5:00 PM · 4000 Round Lake Rd, Klamath Falls, OR 97601</p>
        </div>

        {/* Customer Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">💡 Tips for Customers</h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex gap-2"><span>✅</span> Know where your main water shutoff is — it can prevent major damage in a burst pipe emergency.</li>
            <li className="flex gap-2"><span>✅</span> Check your water meter periodically. A spike in usage often indicates a leak.</li>
            <li className="flex gap-2"><span>✅</span> Running toilets and dripping faucets waste thousands of gallons — fix them promptly.</li>
            <li className="flex gap-2"><span>✅</span> Don't flush wipes, medications, or other non-flushable items — they damage sewer systems.</li>
            <li className="flex gap-2"><span>✅</span> Report unusual water color, smell, or taste immediately — don't wait.</li>
          </ul>
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
