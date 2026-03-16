"use client";

import { useState } from "react";
import { properties } from "@/config/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import HousingOptions from "@/components/HousingOptions";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConversationalSarah from "@/components/ConversationalSarah";
import ChatLauncher from "@/components/ChatLauncher";
import Location from "@/components/Location";

const property = properties.ranchocorrido;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RVPark"],
  "name": "Rancho Corrido RV Resort & Mobile Home Community",
  "url": "https://www.ranchocorridopark.com",
  "telephone": "+17607423755",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "21501 CA-76",
    "addressLocality": "Pauma Valley",
    "addressRegion": "CA",
    "postalCode": "92061",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.3497,
    "longitude": -116.9619
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "description": "Affordable RV and mobile home community in Pauma Valley, San Diego County. Monthly and extended stays available. 5 minutes to Harrah's Resort SoCal, 20 minutes to Temecula wine country.",
  "priceRange": "$$"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is lot rent at Rancho Corrido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lot rent varies depending on the site and lease term. Please contact us at (760) 742-3755 or use our online contact form for current pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Are pets allowed at Rancho Corrido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are pet-friendly! We accept dogs and cats with a pet deposit. Weight restrictions may apply. Contact us for current pet policy details."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply for residency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can start the application process by chatting with our leasing assistant Sarah on this website, calling us at (760) 742-3755, or submitting the contact form. We'll walk you through income and credit requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How close is Rancho Corrido to Harrah's Resort SoCal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rancho Corrido is approximately 5 minutes from Harrah's Resort SoCal in Valley Center, making it an ideal home base for casino employees and guests."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer short-term or temporary stays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer both monthly and extended-stay options for RV sites. Temporary accommodations are ideal for seasonal workers, travel nurses, and those relocating to the area."
      }
    }
  ]
};

type SarahFlow = 'apply' | 'tour' | 'learn' | 'contact' | 'general' | 'permanent-rv' | 'mobile-homes' | 'temporary';

export default function Page() {
  const [sarahOpen, setSarahOpen] = useState(false);
  const [sarahFlow, setSarahFlow] = useState<SarahFlow>('general');

  const openSarah = (flow: SarahFlow) => {
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <section id="location-section">
        <Location property={property} />
      </section>

      <Reviews property={property} />
      
      <section id="contact">
        <Contact property={property} />
      </section>
      
      <Footer />
      
      <ConversationalSarah
        propertyId="3"
        isOpen={sarahOpen}
        onClose={() => setSarahOpen(false)}
        initialFlow={sarahFlow}
      />

      <ChatLauncher
        onOpen={() => openSarah('general')}
        isOpen={sarahOpen}
      />
    </main>
  );
}
