// Property configurations - skin the template for each property
export type PropertyConfig = {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  opsPropertyId: string;
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    hero: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    stats: { label: string; value: string }[];
  };
  paths: {
    permanent: { title: string; subtitle: string; cta: string; link: string };
    temporary: { title: string; subtitle: string; cta: string; link: string };
  };
  features: { icon: string; title: string; description: string }[];
  stayOptions: { 
    id: string;
    title: string; 
    description: string; 
    features: string[]; 
    ctaText: string; 
    ctaLink: string;
    badge?: string;
  }[];
  community: {
    headline: string;
    description: string;
    highlights: string[];
  };
  location: {
    highlights: { place: string; time: string }[];
  };
  social: { facebook?: string; instagram?: string; yelp?: string };
  seo: { title: string; description: string; keywords: string[] };
};

export const properties: Record<string, PropertyConfig> = {
  ranchocorrido: {
    id: "ranchocorrido",
    name: "Rancho Corrido",
    tagline: "Country living, 30 minutes from the ocean",
    domain: "ranchocorridopark.com",
    address: "14715 Highway 76",
    city: "Pauma Valley",
    state: "CA",
    zip: "92061",
    phone: "(760) 742-3755",
    email: "manager@ranchocorridopark.com",
    opsPropertyId: "3",
    colors: {
      primary: "#2D5016", // Forest green - country/nature feel
      primaryDark: "#1E3A0F",
      accent: "#D97706", // Warm amber accent
      hero: "from-green-900/80 to-amber-900/60",
    },
    hero: {
      headline: "Find Your Home in the Hills",
      subheadline: "Affordable living in a beautiful San Diego County setting. Rolling hills, mountain views, tight-knit community — wine country and casinos just minutes away.",
      image: "/images/rancho-hero.jpg",
      stats: [
        { label: "To the beach", value: "30 min" },
        { label: "To wine country", value: "20 min" },
        { label: "To casinos", value: "5 min" },
      ],
    },
    paths: {
      permanent: {
        title: "Make It Home",
        subtitle: "Long-term RV & mobile home living for families, workers, and those seeking affordable country life.",
        cta: "Apply for Residency",
        link: "/apply",
      },
      temporary: {
        title: "Stay Up to 90 Days",
        subtitle: "Perfect for seasonal work, travel contracts, or extended getaways. Full hookups, all amenities included.",
        cta: "Check Availability",
        link: "/temporary",
      },
    },
    features: [
      { icon: "🏔️", title: "Country Setting", description: "Rolling hills and mountain views, away from city noise" },
      { icon: "🏖️", title: "30 Min to Beach", description: "Quick drive to San Diego beaches and coastal towns" },
      { icon: "👨‍👩‍👧‍👦", title: "Family Community", description: "Safe, friendly neighborhood with families and working professionals" },
      { icon: "💰", title: "Affordable Living", description: "Escape San Diego housing costs without leaving the county" },
      { icon: "🏊", title: "Pool & Recreation", description: "Swimming pool, playground, horseshoe pits, community spaces" },
      { icon: "⚡", title: "Full Hookups", description: "30/50 amp electric, water, sewer, WiFi at every space" },
    ],
    stayOptions: [
      { 
        id: "permanent-rv",
        title: "Permanent RV Living", 
        description: "Bring your RV and make Rancho Corrido home. Popular with families, retirees, and workers at nearby casinos and businesses.",
        features: [
          "Full hookups (30/50 amp)",
          "Competitive monthly rates", 
          "Community atmosphere",
          "Pool & laundry access",
          "Pet friendly",
        ],
        ctaText: "Apply for a Space", 
        ctaLink: "/apply",
      },
      { 
        id: "mobile-homes",
        title: "Mobile Homes", 
        description: "Move-in ready park models available for rent or purchase. Fully-equipped 1 bed/1 bath units.",
        features: [
          "Kitchen with appliances",
          "Private space",
          "All utilities included",
          "No RV needed",
        ],
        ctaText: "View Available Homes", 
        ctaLink: "/homes",
      },
      { 
        id: "temporary",
        title: "Temporary Stays (Up to 90 Days)", 
        description: "Ideal for travel nurses, seasonal workers, contract jobs, or extended visits to the area.",
        features: [
          "Nightly, weekly, and monthly rates",
          "Full hookups included",
          "All amenities access",
          "Flexible terms",
        ],
        ctaText: "Book Your Stay", 
        ctaLink: "/temporary",
        badge: "Great for Work Contracts",
      },
    ],
    community: {
      headline: "More Than a Place to Park",
      description: "Rancho Corrido has been a home for generations. We're a real community — families, workers, retirees — all enjoying affordable country living with easy access to everything San Diego County offers.",
      highlights: [
        "Family-owned and operated",
        "Quiet, safe neighborhood",
        "Friendly staff on-site",
        "Clean, well-maintained facilities",
        "Mix of long-term residents and temporary guests",
      ],
    },
    location: {
      highlights: [
        { place: "Harrah's Resort Casino", time: "5 min" },
        { place: "Pechanga Resort Casino", time: "15 min" },
        { place: "Temecula Wine Country", time: "20 min" },
        { place: "San Diego Beaches", time: "30 min" },
        { place: "Downtown San Diego", time: "45 min" },
        { place: "Local hiking trails", time: "On-site" },
      ],
    },
    social: { 
      facebook: "https://facebook.com/ranchocorrido", 
      yelp: "https://yelp.com/biz/rancho-corrido-rv-resort-and-campground-pauma-valley" 
    },
    seo: {
      title: "Rancho Corrido | Affordable Country Living in San Diego County",
      description: "Find your home at Rancho Corrido in Pauma Valley, CA. Affordable RV & mobile home community with mountain views, pool, and full hookups. 30 minutes from the beach.",
      keywords: [
        "affordable housing San Diego County",
        "RV living California",
        "mobile home park Pauma Valley",
        "long term RV San Diego",
        "workforce housing San Diego",
        "country living near beach",
        "RV park near Temecula",
        "travel nurse housing San Diego",
      ],
    },
  },
};

export function getPropertyById(id: string): PropertyConfig | null {
  return properties[id] || null;
}
