import { properties } from "@/config/properties";
import { getLandingPageBySlug } from "@/config/landingConfigs";
import LandingTemplate from "@/components/LandingTemplate";

const config = getLandingPageBySlug("families")!;
const property = properties.ranchocorrido;

export default function FamiliesPage() {
  return <LandingTemplate config={config} property={property} minimal={true} />;
}

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(", "),
};
