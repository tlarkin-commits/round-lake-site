"use client";

import { PropertyConfig } from "@/config/properties";
import { useState } from "react";

export default function Contact({ property }: { property: PropertyConfig }) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // TODO: Connect to OPS API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormState('success');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about availability or want to schedule a visit? We are here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    {property.address}<br />
                    {property.city}, {property.state} {property.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href={`tel:${property.phone}`} className="text-gray-600 hover:text-green-700">
                    {property.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href={`mailto:${property.email}`} className="text-gray-600 hover:text-green-700">
                    {property.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">
                  🕐
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {formState === 'success' ? (
              <div className="text-center py-8">
                <span className="text-5xl mb-4 block">✅</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I am Interested In *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  >
                    <option value="">Select one...</option>
                    <option value="permanent-rv">Permanent RV Living</option>
                    <option value="mobile-home">Mobile Home (Rent/Buy)</option>
                    <option value="temporary">Temporary Stay (up to 90 days)</option>
                    <option value="other">Other / Just Looking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-4 rounded-lg font-semibold text-white transition-colors disabled:opacity-50"
                  style={{ backgroundColor: property.colors.primary }}
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
