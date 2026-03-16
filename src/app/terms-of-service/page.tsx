import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rancho Corrido RV Resort & Mobile Home Community",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm mb-8 block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">Terms of Service</h1>
        <p className="text-stone-500 text-sm mb-10">Effective Date: March 16, 2026</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700">

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using ranchocorridopark.com (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site. These terms apply to all visitors, including prospective residents and applicants.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">2. Use of the Site</h2>
            <p>You may use the Site for lawful purposes only. You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Submit false or misleading information in any contact form or application</li>
              <li>Attempt to gain unauthorized access to any part of the Site or our systems</li>
              <li>Use the Site in any way that could damage, disable, or impair its functionality</li>
              <li>Scrape, copy, or redistribute Site content without prior written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">3. Informational Purpose Only</h2>
            <p>The information on this Site — including pricing, availability, amenities, and policies — is provided for general informational purposes and is subject to change without notice. Nothing on this Site constitutes a binding lease offer or contract. All residency agreements are subject to a formal application, approval process, and execution of a separate written lease agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">4. Leasing Assistant (AI Chat)</h2>
            <p>Our Site includes an AI-powered leasing assistant (&ldquo;Sarah&rdquo;) to answer questions about the community. Responses from Sarah are automated and for informational purposes only. They do not constitute legal advice, a lease offer, or a guarantee of availability or pricing. Always confirm details directly with our property management team before making decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">5. Intellectual Property</h2>
            <p>All content on this Site — including text, photos, logos, and graphics — is the property of Rancho Corrido or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">6. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites (e.g., Google Maps). We are not responsible for the content, accuracy, or privacy practices of those sites. Links do not imply endorsement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">7. Disclaimer of Warranties</h2>
            <p>The Site is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Rancho Corrido and its owners, managers, and agents shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site, even if advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">9. Fair Housing</h2>
            <p>Rancho Corrido is committed to compliance with all applicable federal, state, and local fair housing laws. We do not discriminate on the basis of race, color, national origin, religion, sex, familial status, disability, or any other protected class.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">10. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Diego County, California.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">11. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms at any time. The effective date will be updated accordingly. Continued use of the Site after changes constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">12. Contact Us</h2>
            <p>For questions about these Terms, please contact us:</p>
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
