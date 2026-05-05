import Link from "next/link";

export const metadata = {
  title: "Accessibility Statement",
  description: "Accessibility Statement for Round Lake Community",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-green-700 hover:text-green-800 text-sm mb-8 block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">Accessibility Statement</h1>
        <p className="text-stone-500 text-sm mb-10">Round Lake Community — Klamath Falls, OR</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700">

          <section>
            <p>Round Lake Community is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and, in doing so, adhere to many of the available standards and guidelines.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Our Commitment</h2>
            <p>We aim to comply with all applicable standards, including the Web Content Accessibility Guidelines (WCAG) 2.1 accessibility standards up to level AA. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines helps make the web more user-friendly for all people.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Need Assistance?</h2>
            <p>If you experience any difficulty in accessing any part of this website or if you need assistance with resident information or applications, please contact our management office directly. We will work with you to provide the information, item, or transaction you seek through an alternate communication method that is accessible for you consistent with applicable law (for example, through telephone support).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">Contact Information</h2>
            <div className="space-y-1">
              <p><strong>Round Lake Community</strong></p>
              <p>4000 Round Lake Rd, Klamath Falls, OR 97601</p>
              <p>Phone: <a href="tel:+15418842520" className="text-green-700 hover:underline">(541) 884-2520</a></p>
              <p>Email: <a href="mailto:office@roundlakecommunity.com" className="text-green-700 hover:underline">office@roundlakecommunity.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
