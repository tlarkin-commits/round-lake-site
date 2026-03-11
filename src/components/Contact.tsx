"use client";

import { PropertyConfig } from "@/config/properties";

export default function Contact({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in touch
            </h2>
            <p className="text-stone-300 mb-10 text-lg">
              Ready to make Rancho Corrido your home? Have questions? We are here to help.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-stone-400 uppercase tracking-wide mb-1">Address</div>
                <div className="text-lg">
                  {property.address}<br />
                  {property.city}, {property.state} {property.zip}
                </div>
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

          {/* Right - Simple form */}
          <div className="bg-stone-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Send a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
                />
                <input 
                  type="text" 
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone"
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
              />
              <select className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white focus:border-amber-500 focus:outline-none">
                <option value="">I am interested in...</option>
                <option value="permanent">Permanent RV Living</option>
                <option value="mobile-home">Mobile Home</option>
                <option value="temporary">Temporary Stay</option>
              </select>
              <textarea 
                placeholder="Message (optional)"
                rows={3}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none resize-none"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
