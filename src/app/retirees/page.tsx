import { properties } from "@/config/properties";
import { getLandingPageBySlug } from "@/config/landingConfigs";
import LandingTemplate from "@/components/LandingTemplate";

const config = getLandingPageBySlug("retirees")!;
const property = properties.ranchocorrido;

export default function RetireesPage() {
  return <LandingTemplate config={config} property={property} />;
}

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(", "),
};
