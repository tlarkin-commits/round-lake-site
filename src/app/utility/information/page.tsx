import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Information | Round Lake Water and Sewer District",
  description: "Round Lake Water and Sewer District service area, water quality information, new service connections, and district details.",
};

interface UtilityStatus {
  waterStatus: string;
  sewerStatus: string;
  lastUpdated: string;
  maintenanceNotices: { id: string; message: string; date: string; severity: string }[];
}

async function getUtilityStatus(): Promise<UtilityStatus | null> {
  try {
    const res = await fetch("https://roundlake.coastmhp.com/api/utility/roundlake", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

const SEVERITY_STYLES: Record<string, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-yellow-50 border-yellow-300 text-yellow-900",
  critical: "bg-red-50 border-red-300 text-red-900",
};

const SEVERITY_ICONS: Record<string, string> = {
  info: "ℹ️",
  warning: "⚠️",
  critical: "🚨",
};

export default async function InformationPage() {
  const status = await getUtilityStatus();

  const isNormal = (s: string) =>
    s.toLowerCase().includes("normal") || s.toLowerCase().includes("operating");

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
          <div className="text-green-300 font-medium mb-2 text-sm tracking-wide uppercase">Information</div>
          <h1 className="text-3xl md:text-4xl font-bold">Service Information</h1>
          <p className="mt-3 text-green-100">District information, service area, new connections, and important resources for Round Lake Water and Sewer District customers.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* Live System Status */}
        {status && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-stone-900">🔴 System Status</h2>
              <span className="text-xs text-stone-400">Updated {status.lastUpdated}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "💧", label: "Water", value: status.waterStatus },
                { icon: "🚽", label: "Sewer", value: status.sewerStatus },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    isNormal(item.value)
                      ? "bg-green-50 border-green-200"
                      : "bg-yellow-50 border-yellow-300"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-wide">{item.label}</div>
                    <div className={`font-semibold text-sm ${isNormal(item.value) ? "text-green-800" : "text-yellow-900"}`}>
                      {item.value}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className={`inline-block w-2 h-2 rounded-full ${isNormal(item.value) ? "bg-green-500" : "bg-yellow-500"}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Active maintenance notices */}
            {status.maintenanceNotices?.length > 0 && (
              <div className="mt-4 space-y-3">
                {status.maintenanceNotices.map((n) => (
                  <div
                    key={n.id}
                    className={`flex gap-3 p-4 rounded-xl border ${SEVERITY_STYLES[n.severity] || SEVERITY_STYLES.info}`}
                  >
                    <span className="text-lg flex-shrink-0">{SEVERITY_ICONS[n.severity] || "ℹ️"}</span>
                    <div>
                      <div className="text-sm font-medium">{n.message}</div>
                      <div className="text-xs opacity-70 mt-0.5">{n.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* District Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🏛️ About the District</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">District Name</div>
              <div className="font-semibold text-stone-800">Round Lake Water and Sewer District</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">Service Area</div>
              <div className="font-semibold text-stone-800">Round Lake Community, Klamath Falls, OR</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">Office Address</div>
              <div className="font-semibold text-stone-800">4000 Round Lake Rd, Klamath Falls, OR 97601</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">Phone</div>
              <a href="tel:+15418842520" className="font-semibold text-[#1B4D3E] hover:underline">(541) 884-2520</a>
            </div>
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">Email</div>
              <a href="mailto:office@roundlakecommunity.com" className="font-semibold text-[#1B4D3E] hover:underline">office@roundlakecommunity.com</a>
            </div>
            <div>
              <div className="text-stone-500 uppercase text-xs tracking-wide mb-1">Office Hours</div>
              <div className="font-semibold text-stone-800">Mon–Fri, 9:00 AM – 5:00 PM</div>
            </div>
          </div>
        </div>

        {/* New Service Connections */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🔌 New Service Connections</h2>
          <p className="text-stone-600 mb-4">To establish new water or sewer service at a property within the Round Lake district, contact our office. We'll walk you through the connection requirements and any associated fees.</p>
          <div className="bg-stone-50 rounded-xl p-4 text-sm text-stone-600">
            <p className="font-semibold text-stone-800 mb-2">What you'll need:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Property address and parcel number</li>
              <li>Proof of ownership or rental agreement</li>
              <li>Contact information for billing</li>
            </ul>
          </div>
          <div className="mt-4">
            <a href="tel:+15418842520" className="inline-block bg-[#1B4D3E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#133829] transition-colors text-sm">
              📞 Call to Set Up Service
            </a>
          </div>
        </div>

        {/* Backflow Prevention */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🛡️ Backflow Prevention</h2>
          <p className="text-stone-600 leading-relaxed">
            To protect the public water supply, state regulations may require backflow prevention devices on certain connections. Contact our office to determine if your property requires a backflow prevention assembly and to schedule required annual testing.
          </p>
        </div>

        {/* Watering Restrictions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🌿 Conservation & Watering</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The Klamath Falls area may be subject to seasonal watering restrictions, particularly during drought conditions. We encourage all customers to use water responsibly.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 text-sm">
            <p className="font-semibold text-blue-800 mb-1">Tips to conserve water:</p>
            <ul className="list-disc list-inside text-blue-700 space-y-1 ml-2">
              <li>Water lawns early morning or evening to reduce evaporation</li>
              <li>Fix dripping faucets and running toilets promptly</li>
              <li>Report suspected leaks or water waste to our office</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Links */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">🔗 Helpful Resources</h2>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Oregon Health Authority — Drinking Water Services", href: "https://www.oregon.gov/oha/PH/HEALTHYENVIRONMENTS/DRINKINGWATER" },
              { label: "Oregon DEQ — Water Quality", href: "https://www.oregon.gov/deq/wq/Pages/index.aspx" },
              { label: "Klamath County — Public Works", href: "https://klamathcounty.org/170/Public-Works" },
              { label: "EPA Safe Drinking Water Information", href: "https://www.epa.gov/ground-water-and-drinking-water" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] hover:underline flex items-center gap-2">
                  <span>↗</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Have a Question?</h2>
          <p className="text-green-100 mb-4">Our office is happy to assist with any service questions or concerns.</p>
          <a href="tel:+15418842520" className="bg-white text-[#1B4D3E] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
            📞 (541) 884-2520
          </a>
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
