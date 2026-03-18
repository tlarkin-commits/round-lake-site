import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report | Round Lake Water and Sewer District",
  description: "Round Lake Water and Sewer District annual Consumer Confidence Report and water quality compliance information.",
};

interface Report {
  id: string;
  year: string;
  label: string;
  filename: string;
  uploadedAt: string;
}

async function getReports(): Promise<Report[]> {
  try {
    const res = await fetch("https://roundlake.coastmhp.com/api/utility/roundlake", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.annualReports || [];
  } catch {
    return [];
  }
}

export default async function AnnualReportPage() {
  const reports = await getReports();
  const currentYear = new Date().getFullYear();

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
          <div className="text-green-300 font-medium mb-2 text-sm tracking-wide uppercase">Annual Report</div>
          <h1 className="text-3xl md:text-4xl font-bold">Consumer Confidence Report</h1>
          <p className="mt-3 text-green-100">Annual water quality report for Round Lake Water and Sewer District customers, as required by the EPA Safe Drinking Water Act.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* About the CCR */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">📋 About the Consumer Confidence Report</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Every year, community water systems are required by the U.S. Environmental Protection Agency (EPA) to deliver a Consumer Confidence Report (CCR) to their customers. This report provides information about your local drinking water quality.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The CCR tells you what's in your water, where it comes from, and how it compares to EPA and Oregon state drinking water standards.
          </p>
        </div>

        {/* Reports — live from API */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">📄 Current & Past Reports</h2>

          {reports.length > 0 ? (
            <div className="space-y-3">
              {reports.map((r, i) => (
                <div
                  key={r.id}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    i === 0 ? "bg-green-50 border-green-200" : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <div>
                    <div className="font-semibold text-stone-800">{r.label}</div>
                    <div className="text-sm text-stone-500">Reporting year {r.year} · Uploaded {new Date(r.uploadedAt).toLocaleDateString()}</div>
                  </div>
                  <a
                    href={`https://roundlake.coastmhp.com/uploads/utility/${r.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                      i === 0
                        ? "bg-[#1B4D3E] text-white hover:bg-[#133829]"
                        : "border border-stone-300 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    ↓ Download PDF
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <div>
                  <div className="font-semibold text-stone-800">{currentYear - 1} Consumer Confidence Report</div>
                  <div className="text-sm text-stone-500">Reporting year {currentYear - 1} — distributed {currentYear}</div>
                </div>
                <a
                  href="mailto:office@roundlakecommunity.com?subject=Annual Report Request"
                  className="bg-[#1B4D3E] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#133829] transition-colors"
                >
                  Request Copy
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <div className="font-semibold text-stone-800">{currentYear - 2} Consumer Confidence Report</div>
                  <div className="text-sm text-stone-500">Reporting year {currentYear - 2}</div>
                </div>
                <a
                  href="mailto:office@roundlakecommunity.com?subject=Annual Report Request"
                  className="border border-stone-300 text-stone-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  Request Copy
                </a>
              </div>
              <p className="mt-4 text-sm text-stone-500">
                To receive a printed or digital copy of any annual report, contact our office at{" "}
                <a href="tel:+15418842520" className="text-[#1B4D3E] hover:underline">(541) 884-2520</a> or{" "}
                <a href="mailto:office@roundlakecommunity.com" className="text-[#1B4D3E] hover:underline">email us</a>.
              </p>
            </div>
          )}
        </div>

        {/* Water Source */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">💧 Our Water Source</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Round Lake Water and Sewer District serves the Round Lake Community area of Klamath Falls, Oregon. For specific information about your water source, treatment process, and testing results, please refer to the current Consumer Confidence Report or contact our office.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "🏔️", label: "Source", value: "Contact Office" },
              { icon: "🔬", label: "Treatment", value: "Contact Office" },
              { icon: "✅", label: "Compliance", value: "Oregon DEQ Regulated" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-stone-50 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-stone-500 uppercase tracking-wide">{item.label}</div>
                <div className="font-semibold text-stone-800 mt-1 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Questions About Water Quality?</h2>
          <p className="text-green-100 mb-4">Contact our office for copies of reports or to discuss water quality questions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+15418842520" className="bg-white text-[#1B4D3E] font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
              📞 (541) 884-2520
            </a>
            <a href="mailto:office@roundlakecommunity.com?subject=Annual Report Request" className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
              ✉ Request a Report
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
