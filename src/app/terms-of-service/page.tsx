import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Round Lake Community",
  description: "Terms of service for roundlakecommunity.com",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto prose prose-stone">
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-700 mb-8 block">← Back to Round Lake Community</Link>
        <h1>Terms of Service</h1>
        <p className="text-stone-500 text-sm">Effective Date: March 2025 | Round Lake Community · roundlakecommunity.com</p>

        <h2>1. Use of This Website</h2>
        <p>By accessing roundlakecommunity.com, you agree to these Terms of Service. This website is provided for informational and leasing inquiry purposes for Round Lake Community in Klamath Falls, Oregon.</p>

        <h2>2. AI Chat Assistant Disclaimer</h2>
        <p>Our website features an AI-powered leasing assistant. This assistant:</p>
        <ul>
          <li>Provides general information about availability, amenities, and the application process</li>
          <li>Is <strong>not a licensed real estate agent</strong> and does not provide legally binding lease commitments</li>
          <li>May occasionally provide inaccurate information — always verify details with our office directly</li>
        </ul>

        <h2>3. Fair Housing</h2>
        <p>Round Lake Community complies with all applicable federal, state, and local fair housing laws. We do not discriminate based on race, color, national origin, religion, sex, familial status, disability, or any other protected class under the Fair Housing Act or Oregon state law.</p>

        <h2>4. Utility Services</h2>
        <p>The utility section of this website (utility.roundlakecommunity.com and /utility) pertains to the Round Lake Water and Sewer District, a regulated utility serving the Round Lake Community area. Utility information is provided for customer convenience and does not constitute a binding service agreement.</p>

        <h2>5. No Legal or Financial Advice</h2>
        <p>Nothing on this website constitutes legal, financial, or real estate advice. Consult appropriate professionals before making housing decisions.</p>

        <h2>6. Intellectual Property</h2>
        <p>All content on this website, including text, photos, and design, is the property of Round Lake Community / Coast MHP and may not be reproduced without permission.</p>

        <h2>7. Limitation of Liability</h2>
        <p>Round Lake Community is not liable for any damages arising from your use of, or inability to use, this website or its information.</p>

        <h2>8. Governing Law</h2>
        <p>These terms are governed by the laws of the State of Oregon. Disputes shall be resolved in Klamath County, Oregon.</p>

        <h2>9. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>

        <h2>Contact</h2>
        <p>Round Lake Community · 4000 Round Lake Rd, Klamath Falls, OR 97601 · <a href="mailto:office@roundlakecommunity.com">office@roundlakecommunity.com</a> · (541) 884-2520</p>
      </div>
    </div>
  );
}
