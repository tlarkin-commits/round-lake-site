"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/gtag";
import { PropertyConfig } from "@/config/properties";

interface ContactProps {
  property: PropertyConfig;
  onContactClick?: () => void;
}

export default function Contact({ property, onContactClick }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const phoneHref = `tel:+1${property.phone.replace(/\D/g, '')}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    setSubmitting(true);

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;

      const leadResponse = await fetch('https://ops.coastmhp.com/api/leasing/ai/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone || null,
          propertyId: property.opsPropertyId,
          source: "website-contact-form",
          notes: `Contact form submission. Interest: ${formData.interest || 'General inquiry'}. Message: ${formData.message || 'No additional message'}`
        })
      });

      await fetch('https://ops.coastmhp.com/api/contact/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          propertyId: property.opsPropertyId,
        })
      });

      if (leadResponse.ok) {
        trackEvent('generate_lead', { method: 'contact_form' });
        router.push('/thank-you');
      } else {
        throw new Error('Failed to submit');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      alert(`There was an error submitting your message. Please call us directly at ${property.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
            <p className="text-stone-300 mb-10 text-lg">
              Ready to make {property.name} your home? Have questions about lots, rates, or availability? We're here to help.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Address</div>
                <div className="text-lg">{property.address}<br />{property.city}, {property.state} {property.zip}</div>
              </div>
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Phone</div>
                <a href={phoneHref} className="text-lg hover:opacity-80" style={{ color: property.colors.accent }}>
                  {property.phone}
                </a>
              </div>
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Email</div>
                <a href={`mailto:${property.email}`} className="text-lg hover:opacity-80" style={{ color: property.colors.accent }}>
                  {property.email}
                </a>
              </div>
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Office Hours</div>
                <div className="text-lg">Monday – Friday, 9am – 5pm</div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-green-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-green-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-green-500 focus:outline-none"
              />
              <select
                value={formData.interest}
                onChange={(e) => updateField('interest', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
              >
                <option value="">I am interested in...</option>
                <option value="manufactured-home-lot">Manufactured Home Lot</option>
                <option value="rv-site">RV Site</option>
                <option value="golf">Golf Course & Amenities</option>
                <option value="tour">Scheduling a Tour</option>
                <option value="information">General Information</option>
              </select>
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-green-500 focus:outline-none resize-none"
              />
              <button
                type="submit"
                disabled={submitting || !formData.firstName || !formData.lastName || !formData.email}
                className="w-full py-4 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: submitting || !formData.firstName || !formData.lastName || !formData.email ? undefined : property.colors.primary }}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
