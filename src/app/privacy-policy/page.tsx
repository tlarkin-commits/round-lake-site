import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rancho Corrido RV Resort & Mobile Home Community",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm mb-8 block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
        <p className="text-stone-500 text-sm mb-10">Effective Date: March 16, 2026</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700">

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">1. Introduction</h2>
            <p>Rancho Corrido RV Resort &amp; Mobile Home Community (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates ranchocorridopark.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us about residency.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Contact information</strong> — name, email address, phone number</li>
              <li><strong>Inquiry details</strong> — your interest in housing, move-in timeline, and messages you submit</li>
              <li><strong>Chat conversations</strong> — messages exchanged with our leasing assistant Sarah</li>
              <li><strong>Usage data</strong> — pages visited, time on site, and browser type via Google Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your leasing inquiries and schedule tours</li>
              <li>Process residency applications</li>
              <li>Send you relevant information about availability and pricing</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share it with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Property management staff</strong> — to process your inquiry or application</li>
              <li><strong>Service providers</strong> — such as email and analytics platforms (e.g., Google Analytics) that assist us in operating the website</li>
              <li><strong>Legal authorities</strong> — when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">5. Google Analytics</h2>
            <p>We use Google Analytics to understand how visitors use our site. Google Analytics may collect data such as your IP address, browser type, and pages visited. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Google Analytics opt-out browser add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy or as required by law. Inquiry and chat records are retained for up to 2 years unless you request deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:manager@ranchocorridopark.com" className="text-amber-600 hover:underline">manager@ranchocorridopark.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">8. Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is completely secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. The effective date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-2 space-y-1">
              <p><strong>Rancho Corrido RV Resort &amp; Mobile Home Community</strong></p>
              <p>14715 Highway 76, Pauma Valley, CA 92061</p>
              <p>Phone: <a href="tel:+17607423755" className="text-amber-600 hover:underline">(760) 742-3755</a></p>
              <p>Email: <a href="mailto:manager@ranchocorridopark.com" className="text-amber-600 hover:underline">manager@ranchocorridopark.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
