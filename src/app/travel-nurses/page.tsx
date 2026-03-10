import { properties } from "@/config/properties";
import { getLandingPageBySlug } from "@/config/landingConfigs";
import LandingTemplate from "@/components/LandingTemplate";

const config = getLandingPageBySlug("travel-nurses")!;
const property = properties.ranchocorrido;

export default function TravelNursesPage() {
  return <LandingTemplate config={config} property={property} />;
}

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(", "),
};
