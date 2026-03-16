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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    
    setSubmitting(true);
    
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      
      // 1. Create lead in OPS system
      const leadResponse = await fetch('https://ops.coastmhp.com/api/leasing/ai/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone || null,
          propertyId: "3", // Rancho Corrido
          source: "website-contact-form",
          notes: `Contact form submission. Interest: ${formData.interest || 'General inquiry'}. Message: ${formData.message || 'No additional message'}`
        })
      });
      
      // 2. Send email to manager  
      const emailResponse = await fetch('https://ops.coastmhp.com/api/contact/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message
        })
      });
      
      if (leadResponse.ok) {
        trackEvent('generate_lead', { method: 'contact_form' });
        router.push('/thank-you');
        
        // Log success
        console.log('📧 Contact form submitted and email sent to manager@ranchocorridopark.com');
      } else {
        throw new Error('Failed to submit');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your message. Please call us directly at (760) 742-3755.');
    } finally {
      setSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              Thank you for your interest in Rancho Corrido Park! Our property manager has been notified and will contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
            <p className="text-stone-300 mb-10 text-lg">
              Ready to make Rancho Corrido your home? Have questions? We are here to help.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Address</div>
                <div className="text-lg">{property.address}<br/>{property.city}, {property.state} {property.zip}</div>
              </div>
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Phone</div>
                <a href={`tel:${property.phone}`} className="text-lg text-amber-400 hover:text-amber-300">
                  {property.phone}
                </a>
              </div>
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Email</div>
                <a href={`mailto:${property.email}`} className="text-lg text-amber-400 hover:text-amber-300">
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
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
                />
                <input 
                  type="text" 
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
              />
              <input 
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
              />
              <select 
                value={formData.interest}
                onChange={(e) => updateField('interest', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="">I am interested in...</option>
                <option value="permanent">Permanent RV Living</option>
                <option value="mobile-home">Mobile Home</option>
                <option value="temporary">Temporary Stay</option>
                <option value="information">General Information</option>
                <option value="tour">Scheduling a Tour</option>
              </select>
              <textarea 
                placeholder="Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none resize-none"
              />
              <button 
                type="submit"
                disabled={submitting || !formData.firstName || !formData.lastName || !formData.email}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-stone-900 font-semibold rounded-lg transition-colors"
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