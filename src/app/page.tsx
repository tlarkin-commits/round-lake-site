"use client";

import { useState } from "react";
import { properties } from "@/config/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import StayOptions from "@/components/StayOptions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConversationalSarah from "@/components/ConversationalSarah";

const property = properties.ranchocorrido;

export default function Home() {
  const [sarahOpen, setSarahOpen] = useState(false);
  const [sarahFlow, setSarahFlow] = useState<'apply' | 'tour' | 'learn' | 'contact' | 'general'>('general');

  const openSarah = (flow: 'apply' | 'tour' | 'learn' | 'contact' | 'general') => {
    setSarahFlow(flow);
    setSarahOpen(true);
  };

  return (
    <>
      <main className="min-h-screen">
        <Header onLocationClick={() => {
          document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <Hero 
          property={property}
          onApplyClick={() => openSarah('apply')}
          onLearnClick={() => openSarah('learn')}
        />
        
        <section id="features">
          <Features property={property} />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="options">
          <StayOptions />
        </section>
        
        <section id="contact">
          <Contact property={property} />
        </section>

        {/* Google Reviews Section */}
        <section id="reviews" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              What Our Residents Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;Great community with amazing views and friendly neighbors. The management is very responsive and helpful.&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;Perfect location - close to everything but still peaceful. The amenities are well-maintained.&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;Love the mountain views and the sense of community here. Highly recommend!&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;We have lived here for 2 years and absolutely love it. Clean, safe, and well-managed property.&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;Excellent value for money. Beautiful setting and great amenities. Highly recommend for anyone looking for affordable living.&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-3">&quot;The management team is wonderful and the community feels like family. Would not want to live anywhere else!&quot;</p>
                <p className="text-sm text-gray-500">- Verified Google Review</p>
              </div>
            </div>
            
            {/* Overall Rating */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-white rounded-lg p-6 shadow-sm border">
                <div className="mr-4">
                  <div className="flex text-yellow-400 text-2xl mb-1">★★★★★</div>
                  <p className="text-3xl font-bold text-gray-800">4.9</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Excellent Reviews</p>
                  <p className="text-gray-600">Based on 50+ Google Reviews</p>
                  <button
                    onClick={() => openSarah('learn')}
                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read all reviews →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location/Map Section */}
        <section id="location-section" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Our Perfect Location
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nestled in beautiful Pauma Valley, San Diego County. Close to wine country, 
              casinos, beaches, and all the amenities you need, while maintaining a peaceful, 
              country atmosphere.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Wine Country</h4>
                    <p className="text-blue-600">20 minutes to Temecula</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Beaches</h4>
                    <p className="text-green-600">30 minutes to coast</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Gaming</h4>
                    <p className="text-purple-600">5 minutes to casinos</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-amber-800">Shopping</h4>
                    <p className="text-amber-600">Close to amenities</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Property Address</h4>
                  <p className="text-gray-700 mb-3">40650 Sierra Maria Rd<br />Pauma Valley, CA 92061</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => openSarah('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Get Directions
                    </button>
                    <a
                      href="tel:+17607423933"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.9!2d-117.089748!3d33.322651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db9c8c8b4e4c4d%3A0x1234567890abcdef!2sPauma%20Valley%2C%20CA%2092061!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rancho Corrido Park Location"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Sarah Conversational Chat */}
      <ConversationalSarah
        propertyId="rancho-corrido"
        apiBaseUrl="https://ops.coastmhp.com"
        isOpen={sarahOpen}
        onClose={() => setSarahOpen(false)}
        initialFlow={sarahFlow}
      />
    </>
  );
}