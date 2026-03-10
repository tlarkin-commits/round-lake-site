// Landing page configurations - server-safe (no "use client")

export type LandingPageConfig = {
  slug: string;
  demographic: string;
  headline: string;
  subheadline: string;
  icon: string;
  benefits: { title: string; description: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
  seo: { title: string; description: string; keywords: string[] };
};

export const landingPages: LandingPageConfig[] = [
  {
    slug: "casino-workers",
    demographic: "Casino Workers",
    headline: "Live 5 Minutes from Work",
    subheadline: "Affordable housing for Harrahs, Pechanga, and Valley View casino employees. Skip the commute, save on rent, enjoy country living.",
    icon: "🎰",
    benefits: [
      { title: "5-Minute Commute", description: "Harrahs Rincon is right down the road. Pechanga and Valley View just 15 minutes." },
      { title: "Save on Rent", description: "SD County prices without SD County costs. Keep more of your paycheck." },
      { title: "Flexible Terms", description: "Month-to-month or long-term. Work with your schedule." },
      { title: "Community of Coworkers", description: "Join other casino employees who already call Rancho Corrido home." },
    ],
    ctaPrimary: { text: "Apply for a Space", link: "/apply?source=casino" },
    ctaSecondary: { text: "Schedule a Tour", link: "/contact?source=casino" },
    seo: {
      title: "Housing for Casino Workers | Rancho Corrido | Near Harrahs & Pechanga",
      description: "Affordable housing for casino employees near Harrahs Rincon and Pechanga. 5-minute commute, month-to-month available. RV and mobile home spaces in Pauma Valley.",
      keywords: ["casino worker housing", "Harrahs employee housing", "Pechanga housing", "affordable housing near casino", "Pauma Valley rentals"],
    },
  },
  {
    slug: "travel-nurses",
    demographic: "Travel Nurses",
    headline: "Your 90-Day Home Base",
    subheadline: "Fully-equipped housing for travel nurses on San Diego area contracts. All utilities included, flexible terms, easy access to major hospitals.",
    icon: "🏥",
    benefits: [
      { title: "Contract-Friendly Terms", description: "90-day stays perfect for typical travel assignments. Extend if needed." },
      { title: "All-Inclusive Pricing", description: "Utilities, WiFi, and amenities included. One simple payment." },
      { title: "Hospital Access", description: "45 min to Palomar, Scripps, Sharp. Easy commute to SD metro hospitals." },
      { title: "Rest Between Shifts", description: "Quiet, peaceful environment to recover after long shifts." },
    ],
    ctaPrimary: { text: "Check Availability", link: "/temporary?source=nurse" },
    ctaSecondary: { text: "Get a Quote", link: "/contact?source=nurse" },
    seo: {
      title: "Travel Nurse Housing San Diego | 90-Day Stays | Rancho Corrido",
      description: "Furnished housing for travel nurses near San Diego hospitals. 90-day terms, utilities included. Quiet community in Pauma Valley, 45 min to major hospitals.",
      keywords: ["travel nurse housing San Diego", "nurse housing California", "90 day housing San Diego", "temporary nurse housing", "furnished nurse rentals"],
    },
  },
  {
    slug: "tradesmen",
    demographic: "Tradesmen & Contractors",
    headline: "Your SoCal Base of Operations",
    subheadline: "Affordable housing for construction crews, electricians, plumbers, and contractors working throughout San Diego and Riverside counties.",
    icon: "🔧",
    benefits: [
      { title: "Central Location", description: "Easy access to job sites across San Diego, Temecula, and Riverside areas." },
      { title: "Space for Your Rig", description: "Room for work trucks, trailers, and equipment. No tight city parking." },
      { title: "Flexible Terms", description: "Weekly, monthly, or project-based. Stay as long as the job needs." },
      { title: "Affordable Rates", description: "Keep your per diem. Our rates beat hotels and city rentals." },
    ],
    ctaPrimary: { text: "Get a Quote", link: "/contact?source=trades" },
    ctaSecondary: { text: "View Spaces", link: "/temporary?source=trades" },
    seo: {
      title: "Contractor Housing San Diego | Tradesmen Rentals | Rancho Corrido",
      description: "Affordable housing for contractors and tradesmen in San Diego County. Space for work trucks, flexible terms, weekly rates available.",
      keywords: ["contractor housing San Diego", "tradesman housing", "construction worker housing", "weekly rentals San Diego", "RV parking for contractors"],
    },
  },
  {
    slug: "ag-workers",
    demographic: "Agricultural Workers",
    headline: "Home in the Heart of Farm Country",
    subheadline: "Affordable housing for agricultural workers in Pauma Valley and the surrounding farming communities. Close to work, close to nature.",
    icon: "🌾",
    benefits: [
      { title: "Minutes from the Fields", description: "Located in Pauma Valley, surrounded by orchards and farmland." },
      { title: "Affordable Monthly Rates", description: "Designed for working families. Rates that fit your budget." },
      { title: "Family-Friendly", description: "Safe community with families, playground, and space for kids." },
      { title: "Year-Round Availability", description: "Permanent and seasonal options for harvest schedules." },
    ],
    ctaPrimary: { text: "Apply Now", link: "/apply?source=ag" },
    ctaSecondary: { text: "Call Us", link: "tel:7607423755" },
    seo: {
      title: "Farm Worker Housing Pauma Valley | Agricultural Housing | Rancho Corrido",
      description: "Affordable housing for agricultural workers in Pauma Valley, CA. Family-friendly community, monthly rates, close to farms and orchards.",
      keywords: ["farm worker housing", "agricultural housing California", "Pauma Valley housing", "seasonal worker housing", "affordable farm housing"],
    },
  },
  {
    slug: "families",
    demographic: "Families",
    headline: "A Real Home for Your Family",
    subheadline: "Escape San Diego housing costs without leaving the county. Safe, affordable community living with space for kids to play and room to breathe.",
    icon: "👨‍👩‍👧‍👦",
    benefits: [
      { title: "Affordable Living", description: "Get more space for less. Real savings compared to city rentals." },
      { title: "Safe Community", description: "Quiet neighborhood, friendly neighbors, on-site management." },
      { title: "Room to Play", description: "Pool, playground, open spaces. Kids can be kids." },
      { title: "Good Schools Nearby", description: "Access to Pauma Valley and Valley Center school districts." },
    ],
    ctaPrimary: { text: "Apply for Residency", link: "/apply?source=family" },
    ctaSecondary: { text: "Schedule a Visit", link: "/contact?source=family" },
    seo: {
      title: "Affordable Family Housing San Diego County | Rancho Corrido",
      description: "Affordable housing for families in San Diego County. Safe community, pool, playground. RV and mobile home spaces in beautiful Pauma Valley.",
      keywords: ["affordable family housing San Diego", "family mobile home park", "cheap housing San Diego County", "family RV living", "Pauma Valley family housing"],
    },
  },
  {
    slug: "retirees",
    demographic: "Retirees & Snowbirds",
    headline: "Your Peaceful Retirement Awaits",
    subheadline: "Quiet country living in beautiful San Diego County. Perfect for retirees who want affordability, community, and easy access to wine country.",
    icon: "🌅",
    benefits: [
      { title: "Peaceful Setting", description: "Rolling hills, mountain views, quiet nights. The retirement you deserve." },
      { title: "Active Community", description: "Friendly neighbors, community events, people your age." },
      { title: "Wine Country Access", description: "Temecula wineries just 20 minutes away. Perfect for day trips." },
      { title: "Affordable Fixed Income", description: "Predictable costs that work with retirement budgets." },
    ],
    ctaPrimary: { text: "Learn More", link: "/apply?source=retiree" },
    ctaSecondary: { text: "Visit Us", link: "/contact?source=retiree" },
    seo: {
      title: "Retirement Living San Diego County | 55+ Community | Rancho Corrido",
      description: "Affordable retirement living in San Diego County wine country. Peaceful community, friendly neighbors. RV and mobile home spaces in Pauma Valley.",
      keywords: ["retirement community San Diego", "55+ RV park California", "snowbird housing", "affordable retirement living", "wine country retirement"],
    },
  },
];

export function getLandingPageBySlug(slug: string): LandingPageConfig | undefined {
  return landingPages.find(p => p.slug === slug);
}
