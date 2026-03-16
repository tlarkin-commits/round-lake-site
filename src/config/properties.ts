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
      subheadline: "Affordable living in a beautiful San Diego County setting. Rolling hills, mountain views, tight-knit community — Temecula wine country and local casinos just minutes away.",
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

  roundlake: {
    id: 'roundlake',
    name: 'Round Lake Community',
    tagline: 'Experience Country Life in Nature',
    domain: 'roundlakecommunity.com',
    address: '4000 Round Lake Rd',
    city: 'Klamath Falls',
    state: 'OR',
    zip: '97601',
    phone: '(541) 884-2520',
    email: 'office@roundlakecommunity.com',
    opsPropertyId: '2',
    colors: {
      primary: '#1B4D3E',
      primaryDark: '#133829',
      accent: '#4A90D9',
      hero: 'from-green-900/80 to-blue-900/60',
    },
    hero: {
      headline: 'Experience Country Life in Nature',
      subheadline: '150 acres of peaceful living near Klamath Falls. Golf course, fishing pond, hiking trails, and a welcoming community — 15 minutes from town.',
      image: '/images/round-lake/hero.jpg',
      stats: [
        { label: 'From Klamath Falls', value: '15 min' },
        { label: 'Acres of nature', value: '150' },
        { label: 'Hole golf course', value: '18' },
      ],
    },
    paths: {
      permanent: {
        title: 'Make It Home',
        subtitle: 'Affordable manufactured home lots and mobile home spaces in a beautiful lakeside setting.',
        cta: 'Apply for Residency',
        link: '/apply',
      },
      temporary: {
        title: 'RV Sites Available',
        subtitle: 'Spacious RV sites with full hookups. Short and long-term stays welcome.',
        cta: 'Check Availability',
        link: '/availability',
      },
    },
    features: [
      { icon: '⛳', title: '18-Hole Golf Course', description: 'Full 18-hole course with putting green, cart rentals, and clubhouse' },
      { icon: '🎣', title: 'Fishing Pond', description: 'On-site fishing pond stocked and ready for residents' },
      { icon: '🥾', title: 'Hiking & Biking Trails', description: 'Miles of scenic trails through 150 acres of Oregon high plain' },
      { icon: '🏕️', title: 'RV Sites', description: 'Full hookup RV sites with 30/50 amp, water, and sewer' },
      { icon: '🏡', title: 'Manufactured Homes', description: 'Affordable home lots in a safe, well-maintained community' },
      { icon: '🏌️', title: 'Clubhouse', description: 'Community clubhouse available for residents and events' },
    ],
    stayOptions: [
      {
        id: 'manufactured-homes',
        title: 'Manufactured Home Lots',
        description: 'Long-term lot rentals for manufactured and mobile homes. Peaceful country setting with all the amenities of a full community.',
        features: [
          'Affordable lot rent',
          'Quiet country neighborhood',
          'Golf course access',
          'On-site fishing',
          'Pet friendly',
        ],
        ctaText: 'Apply for a Lot',
        ctaLink: '/apply',
      },
      {
        id: 'rv-sites',
        title: 'RV Sites',
        description: 'Spacious sites with full hookups. Ideal for long-term residents and seasonal visitors who want to enjoy Oregon countryside.',
        features: [
          'Full hookups (30/50 amp)',
          'Water & sewer included',
          'Golf course access',
          'Hiking trail access',
        ],
        ctaText: 'Check Availability',
        ctaLink: '/availability',
      },
    ],
    community: {
      headline: 'A Community Close to Nature',
      description: 'Discover Round Lake, a peaceful mobile home community near Klamath Falls dedicated to providing families with a serene country lifestyle. Our 150-acre property offers a unique blend of nature, with a golf course, fishing pond, hiking trails, and spacious RV sites.',
      highlights: [
        'Family-friendly community',
        '150 acres of natural beauty',
        'Golf, fishing, and hiking on-site',
        'Affordable lot and site rents',
        'Professionally managed by Coast MHP',
      ],
    },
    location: {
      highlights: [
        { place: 'Downtown Klamath Falls', time: '15 min' },
        { place: 'Crater Lake National Park', time: '1 hr' },
        { place: 'Klamath Falls Airport (LMT)', time: '20 min' },
        { place: 'OIT - Oregon Tech Campus', time: '20 min' },
        { place: 'Fishing on Upper Klamath Lake', time: '10 min' },
        { place: 'Hiking at Klamath Basin', time: 'Nearby' },
      ],
    },
    social: {
      facebook: 'https://facebook.com/roundlakecommunity',
    },
    seo: {
      title: 'Round Lake Community | Affordable Country Living Near Klamath Falls, OR',
      description: 'Find your home at Round Lake Community in Klamath Falls, OR. Affordable manufactured home lots and RV sites on 150 acres with golf course, fishing pond, and hiking trails.',
      keywords: [
        'mobile home park Klamath Falls',
        'manufactured homes Oregon',
        'RV park Klamath Falls',
        'affordable housing Klamath Falls',
        'Round Lake Community',
        'country living Oregon',
        'golf course community Oregon',
        'lot rent Klamath Falls',
      ],
    },
  },
};

export function getPropertyById(id: string): PropertyConfig | null {
  return properties[id] || null;
}
