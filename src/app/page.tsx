import { properties } from "@/config/properties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import StayOptions from "@/components/StayOptions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const property = properties.ranchocorrido;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero property={property} />
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
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "Rancho Corrido | Affordable RV & Mobile Home Living | Pauma Valley, CA",
  description: "Affordable RV and mobile home community in Pauma Valley, San Diego County. Full hookups, pool, mountain views. Near Temecula wine country and casinos.",
  keywords: "RV park Pauma Valley, mobile home San Diego County, affordable housing California, long term RV California",
};
