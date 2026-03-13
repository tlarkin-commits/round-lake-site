"use client";

import { useState } from "react";
import { properties } from "@/config/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import HousingOptions from "@/components/HousingOptions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConversationalSarah from "@/components/ConversationalSarah";

const property = properties.ranchocorrido;

export default function Page() {
  const [sarahOpen, setSarahOpen] = useState(false);
  const [sarahFlow, setSarahFlow] = useState<'apply' | 'tour' | 'learn' | 'contact' | 'general' | 'permanent-rv' | 'mobile-homes' | 'temporary' | 'permanent-rv' | 'mobile-homes' | 'temporary'>('general');

  const openSarah = (flow: 'apply' | 'tour' | 'learn' | 'contact' | 'general' | 'permanent-rv' | 'mobile-homes' | 'temporary' | 'permanent-rv' | 'mobile-homes' | 'temporary') => {
    console.log('🎯 Opening Sarah with context:', flow);
    setSarahFlow(flow);
    setSarahOpen(true);
  };

  const handleLocationClick = () => {
    const locationSection = document.getElementById('location-section');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      <Header onLocationClick={handleLocationClick} />
      <Hero property={property} onApplyClick={() => openSarah("permanent-rv")} onLearnClick={() => openSarah("learn")} />
      
      <section id="features">
        <Features property={property} />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      
      <section id="options">
        <HousingOptions 
          onApplyClick={() => openSarah("permanent-rv")} 
          onHomesClick={() => openSarah("mobile-homes")} 
          onTemporaryClick={() => openSarah("temporary")} 
        />
      </section>
      
      <section id="contact">
        <Contact property={property} />
      </section>
      
      <Footer />
      
      <ConversationalSarah
        propertyId="rancho-corrido"
        isOpen={sarahOpen}
        onClose={() => setSarahOpen(false)}
        initialFlow={sarahFlow}
      />
    </main>
  );
}