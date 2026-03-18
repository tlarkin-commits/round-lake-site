"use client";

import { useState, useRef } from "react";
import { properties } from "@/config/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import HousingOptions from "@/components/HousingOptions";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ChatLauncher from "@/components/ChatLauncher";
import Location from "@/components/Location";

const property = properties.roundlake;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MobileHomePark"],
  "name": "Round Lake Community",
  "url": "https://www.roundlakecommunity.com",
  "telephone": "+15418842520",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4000 Round Lake Rd",
    "addressLocality": "Klamath Falls",
    "addressRegion": "OR",
    "postalCode": "97601",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.1837,
    "longitude": -121.8231
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "description": "Peaceful manufactured home and RV community on 150 acres near Klamath Falls, Oregon. Golf course, fishing pond, hiking trails on-site.",
  "priceRange": "$$"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is lot rent at Round Lake Community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manufactured home lot rent starts at $475/month. RV site rates vary — please contact us at (541) 884-2520 for current availability and pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Are pets allowed at Round Lake Community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are pet-friendly. Please contact us for current pet policy and any breed or weight restrictions."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply for residency at Round Lake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can start by chatting with our leasing assistant on this website, calling (541) 884-2520, or submitting the contact form. We'll walk you through the application process."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a golf course at Round Lake Community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Round Lake features a full 18-hole golf course with putting green, cart rentals, and a clubhouse — available to residents and visitors."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Round Lake Community from Klamath Falls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Round Lake Community is located approximately 15 minutes from downtown Klamath Falls at 4000 Round Lake Rd, Klamath Falls, OR 97601."
      }
    }
  ]
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef<{ open: () => void } | null>(null);

  const handleApplyClick = () => {
    setChatOpen(true);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header property={property} onApplyClick={handleApplyClick} />

      <main>
        <Hero property={property} onApplyClick={handleApplyClick} />
        <section id="features">
          <Features property={property} />
        </section>
        <section id="gallery">
          <Gallery property={property} />
        </section>
        <section id="options">
          <HousingOptions property={property} onApplyClick={handleApplyClick} />
        </section>
        <Reviews property={property} />
        <section id="location-section">
          <Location property={property} />
        </section>
        <section id="contact">
          <Contact property={property} />
        </section>
      </main>

      <Footer property={property} />

      <ChatWidget
        property={property}
        isOpen={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
      />
      <ChatLauncher onOpen={() => setChatOpen(true)} isOpen={chatOpen} />
    </>
  );
}
