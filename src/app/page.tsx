import { properties } from "@/config/properties";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import StayOptions from "@/components/StayOptions";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

// For now, hardcode to Rancho Corrido - will make dynamic with middleware later
const property = properties.ranchocorrido;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero property={property} />
      <Features property={property} />
      <Community property={property} />
      <StayOptions property={property} />
      <Location property={property} />
      <Contact property={property} />
      <ChatWidget property={property} />
    </main>
  );
}

export const metadata = {
  title: properties.ranchocorrido.seo.title,
  description: properties.ranchocorrido.seo.description,
  keywords: properties.ranchocorrido.seo.keywords.join(", "),
};
