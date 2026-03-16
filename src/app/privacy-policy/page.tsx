import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Round Lake Community",
  description: "Privacy policy for roundlakecommunity.com",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto prose prose-stone">
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-700 mb-8 block">← Back to Round Lake Community</Link>
        <h1>Privacy Policy</h1>
        <p className="text-stone-500 text-sm">Effective Date: March 2025 | Round Lake Community · roundlakecommunity.com</p>

        <h2>Information We Collect</h2>
        <p>When you use this website, we may collect:</p>
        <ul>
          <li><strong>Contact information</strong> you voluntarily submit (name, email, phone) via our contact form or AI chat widget</li>
          <li><strong>Usage data</strong> via Google Analytics 4 (GA4) including pages visited, session duration, and device type — collected anonymously</li>
          <li><strong>Cookies</strong> used by GA4 to improve our site experience</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your leasing, residency, or utility inquiries</li>
          <li>To improve our website and user experience via analytics</li>
          <li>We do not sell or share your personal information with third parties for marketing purposes</li>
        </ul>

        <h2>Google Analytics</h2>
        <p>We use Google Analytics 4 to understand how visitors use our website. GA4 uses cookies to collect anonymized data. You can opt out of GA4 tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

        <h2>AI Chat Widget</h2>
        <p>Our website uses an AI-powered leasing assistant. Conversations with this assistant may be stored for quality assurance and follow-up purposes. The assistant is not a licensed real estate agent and provides general leasing information only.</p>

        <h2>Data Retention</h2>
        <p>Contact form submissions and chat conversations are retained for up to 12 months for leasing follow-up purposes and are then securely deleted.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="mailto:office@roundlakecommunity.com">office@roundlakecommunity.com</a> or (541) 884-2520.</p>

        <h2>Children's Privacy</h2>
        <p>Our website is not directed to children under 13, and we do not knowingly collect personal information from children.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy periodically. The effective date above will reflect the most recent update.</p>

        <h2>Contact</h2>
        <p>Round Lake Community · 4000 Round Lake Rd, Klamath Falls, OR 97601 · <a href="mailto:office@roundlakecommunity.com">office@roundlakecommunity.com</a> · (541) 884-2520</p>
      </div>
    </div>
  );
}
