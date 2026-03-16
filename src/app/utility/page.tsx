import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utility Customers | Round Lake Water and Sewer District",
  description: "Round Lake Water and Sewer District customer portal. Access billing information, annual reports, service information, and maintenance requests.",
};

export default function UtilityPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-[#1B4D3E] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white hover:text-green-200 transition-colors">
            ← Round Lake Community
          </Link>
          <div className="text-sm text-green-200">(541) 884-2520</div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1B4D3E] text-white pb-16 pt-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-300 font-medium mb-2 text-sm tracking-wide uppercase">Utility Services</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Round Lake Water and Sewer District
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Welcome to the Round Lake Water District customer portal. Access your account information, billing details, annual reports, and service resources below.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+15418842520"
              className="inline-flex items-center gap-2 bg-white text-[#1B4D3E] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
            >
              📞 (541) 884-2520
            </a>
            <a
              href="mailto:office@roundlakecommunity.com"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              ✉ office@roundlakecommunity.com
            </a>
          </div>
        </div>
      </section>

      {/* Nav Cards */}
      <section className="max-w-4xl mx-auto px-6 -mt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "/utility/billing", icon: "💳", title: "Billing", desc: "Payment info, rates & how to pay your bill" },
            { href: "/utility/annual-report", icon: "📋", title: "Annual Report", desc: "Consumer confidence & compliance reports" },
            { href: "/utility/information", icon: "ℹ️", title: "Information", desc: "Service area, water quality & district info" },
            { href: "/utility/maintenance", icon: "🔧", title: "Maintenance", desc: "Report issues, outages & service requests" },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-[#1B4D3E]/30 transition-all group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h2 className="text-lg font-bold text-stone-900 group-hover:text-[#1B4D3E] transition-colors mb-1">
                {card.title}
              </h2>
              <p className="text-sm text-stone-500">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency contact banner */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-3xl">🚨</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-red-800 mb-1">Water/Sewer Emergency?</h3>
            <p className="text-red-700 text-sm">For after-hours emergencies including water main breaks, sewage backups, or loss of service — call immediately.</p>
          </div>
          <a
            href="tel:+15418842520"
            className="flex-shrink-0 bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            Call (541) 884-2520
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 mt-16 pb-12 text-center text-sm text-stone-400">
        <p>Round Lake Water and Sewer District · 4000 Round Lake Rd, Klamath Falls, OR 97601</p>
        <p className="mt-1">
          <a href="mailto:office@roundlakecommunity.com" className="hover:text-stone-600">office@roundlakecommunity.com</a>
          {" · "}
          <Link href="/" className="hover:text-stone-600">Back to Community Site</Link>
        </p>
      </footer>
    </div>
  );
}
