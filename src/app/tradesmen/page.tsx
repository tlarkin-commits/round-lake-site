import { properties } from "@/config/properties";
import { getLandingPageBySlug } from "@/config/landingConfigs";
import LandingTemplate from "@/components/LandingTemplate";

const config = getLandingPageBySlug("tradesmen")!;
const property = properties.ranchocorrido;

export default function TradesmenPage() {
  return <LandingTemplate config={config} property={property} minimal={true} />;
}

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords.join(", "),
};
